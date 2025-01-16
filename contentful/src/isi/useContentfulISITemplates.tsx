import React from 'react';

import {
  ImportantSafetyInformation,
  ImportantSafetyInformationTemplate,
  ImportantSafetyInformationTemplateIsiHeaderTemplate,
  ImportantSafetyInformationTemplateIsiLinkTemplate,
  Maybe,
  Brand,
} from '../types';
import {
  getContentfulISITemplatesByCodeId,
  mapISISlugToContentfulBrandId,
} from './isiHelpers';
import { BrandCodeId, CONTENTFUL_ISI_TEMPLATE_CODEIDS } from './brandTypes';

export type ContentfulISITemplatesTypesBrand = Pick<
  Brand,
  | 'codeId'
  | 'shortBrandName'
  | 'fullBrandName'
  | 'consumerImportantSafetyInformation'
>;

export type ContentfulISITemplatesTypes = {
  brands?: ContentfulISITemplatesTypesBrand[];
  isiHeaderTemplate?:
    | Maybe<Array<ImportantSafetyInformationTemplateIsiHeaderTemplate>>
    | undefined;
  isiLinkTemplates?:
    | Maybe<Array<ImportantSafetyInformationTemplateIsiLinkTemplate>>
    | undefined;
  combinedUsage?: string;
};

export interface ISITemplateConfiguration {
  botoxOnlyId?:
    | typeof CONTENTFUL_ISI_TEMPLATE_CODEIDS.botoxOnly
    | typeof CONTENTFUL_ISI_TEMPLATE_CODEIDS.botoxOnlyShorten;
  showCombinedUsage?: boolean;
}

const defaultTemplateConfig: ISITemplateConfiguration = {
  botoxOnlyId: CONTENTFUL_ISI_TEMPLATE_CODEIDS.botoxOnly,
  showCombinedUsage: false,
};

/**
 * Helper that transforms Contentful data + applies business logic to return header, link, and brand name text for ISI presentation
 *
 * Uses Contentful content types of Brand, ISI, and ISI Templates
 * @param data return value of useContentfulBuilder
 * @param contentfulBrandCodeIds list of Contentful Brand CodeIds to filter return data
 * @param templateConfig config object for any ISI additional logic // if you want this
 * @param templateConfig.botoxOnlyId defines which botox only temple will use, default is BotoxOnly
 * @param templateConfig.showCombinedUsage indicate whether to show combined usage
 * @returns {
 *   brands: array of brand-specific data
 *   isiHeaderTemplate: array of ISI header text by brand
 *   isiLinkTemplate: array of ISI link text by brand
 *   combinedUsage: is a string that may or may not contain ISI information
 * }
 */
const useContentfulISITemplates = (
  contentfulIsi?: Maybe<ImportantSafetyInformation>,
  contentfulBrandCodeIds?: Array<BrandCodeId>,
  templateConfig?: ISITemplateConfiguration
): ContentfulISITemplatesTypes => {
  const templates = getContentfulIsiTemplates(
    contentfulIsi,
    contentfulBrandCodeIds,
    templateConfig
  );

  return { ...templates };
};

export const getContentfulIsiTemplates = (
  contentfulIsi?: Maybe<ImportantSafetyInformation>,
  contentfulBrandCodeIds?: Array<BrandCodeId>,
  templateConfig?: ISITemplateConfiguration
): ContentfulISITemplatesTypes | undefined => {
  if (
    contentfulBrandCodeIds &&
    contentfulBrandCodeIds.length &&
    contentfulIsi?.templatesCollection?.items
  ) {
    let fullBrandData: Brand[] | undefined;
    let filteredBrandData: Brand[] = [];

    const isiTemplates = getContentfulISITemplatesByCodeId(
      contentfulBrandCodeIds,
      contentfulIsi.templatesCollection.items,
      { ...defaultTemplateConfig, ...templateConfig }
    );

    const linkTemplates = isiTemplates
      ? isiTemplates.map((isiTemplate) => {
          return isiTemplate?.isiLinkTemplate;
        })
      : null;

    const headerTemplate = isiTemplates
      ? isiTemplates.map(
          (isiTemplate: Maybe<ImportantSafetyInformationTemplate>) => {
            return isiTemplate?.isiHeaderTemplate;
          }
        )
      : null;

    /**
     * Merge data from brands with full and short name lists to one array
     *
     * The brand name presented to the user will be either the full OR short name
     * from the Contentful data
     */
    if (
      contentfulIsi?.longBrandNamesCollection?.items &&
      contentfulIsi?.shortBrandNameCollection?.items
    ) {
      fullBrandData = contentfulIsi.longBrandNamesCollection.items
        .concat(contentfulIsi.shortBrandNameCollection.items)
        .filter(Boolean) as Brand[];
    }

    if (fullBrandData) {
      filteredBrandData = fullBrandData.filter((brand) =>
        contentfulBrandCodeIds.includes(brand?.codeId as BrandCodeId)
      );
    }

    const combinedUsage =
      'The safety and efficacy of these products for combined use have not been studied';
    /**
     * If one Contentful brand codeId is changed to an unsupported value,
     * do not return partial ISI data for any remaining brands
     *
     * @see CONTENTFUL_BRAND_CODEIDS: supported brand codeIds
     */
    if (filteredBrandData.length !== contentfulBrandCodeIds.length) return;

    if (headerTemplate && linkTemplates && filteredBrandData.length) {
      return {
        brands: [...filteredBrandData],
        isiHeaderTemplate: headerTemplate as Maybe<
          Array<ImportantSafetyInformationTemplateIsiHeaderTemplate>
        >,
        isiLinkTemplates: linkTemplates as Maybe<
          Array<ImportantSafetyInformationTemplateIsiLinkTemplate>
        >,
        combinedUsage:
          templateConfig?.showCombinedUsage && filteredBrandData.length > 1
            ? combinedUsage
            : undefined,
      };
    }
  }
  return;
};

/**
 * Helper to return a memoized brandCodeIds to pass to useContentfulISITemplates
 */
const useMemoizedBrandCodeIds = (
  isiSlugs?: { slug?: Maybe<string>; [key: string]: any }[]
) => {
  const data = React.useMemo(() => {
    return mapISISlugToContentfulBrandId(isiSlugs?.map((isi) => isi.slug));
  }, [isiSlugs]);

  return data;
};

export {
  useContentfulISITemplates,
  useMemoizedBrandCodeIds,
  defaultTemplateConfig,
};
