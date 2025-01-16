import { pipe } from '../utils/functionalHelpers';
import {
  filterFullBrandNamesByName,
  filterBrandsByShortName,
  getCodeIds,
} from './fullSafetyDetails';
import {
  ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID,
  BrandCodeId,
  LegacyISIFilter,
  CONTENTFUL_BRAND_CODEIDS,
} from './brandTypes';
import { Brand, ImportantSafetyInformationTemplate, Maybe } from '../types';
import { ISITemplateConfiguration } from './useContentfulISITemplates';

export type BrandName = { slug?: string | null | undefined };

const pluckBrandNames = (
  brandNames?: Array<BrandName>
): Array<undefined | string> => {
  if (!brandNames) {
    return [];
  }

  return brandNames.map((n: BrandName) => normalizeNames(n.slug));
};

/**
 * Pluck codeId off of a Contentful Brand
 * @returns array of codeIds as type BrandCodeId[]
 */
const pluckBrandCodeIds = (brands: Pick<Brand, 'codeId'>[]): BrandCodeId[] => {
  return brands.reduce((acc: BrandCodeId[], brand: Pick<Brand, 'codeId'>) => {
    brand?.codeId && acc.push(brand.codeId as BrandCodeId);
    return acc;
  }, []);
};

type NormalizeNames = (
  brandName: string | undefined | null
) => string | undefined;

const normalizeNames: NormalizeNames = (
  brandName: string | undefined | null
) => {
  if (!brandName) {
    return undefined;
  }

  return brandName.replace('consumer_', '');
};

type AlleCMSKeys = keyof typeof consumerBrandMap;
type ContentfulValues = (typeof consumerBrandMap)[AlleCMSKeys];

const mapToContentful = (
  brands?: Array<string | undefined> | null
): Array<ContentfulValues> => {
  if (!brands) {
    return [];
  }
  const keys = brands.filter((x) => x);

  return keys.map((key) => consumerBrandMap[key as AlleCMSKeys]);
};

/**
 * @deprecated
 * @see type ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID for CMS Service data to Contentful Brand CodeId map
 */
const consumerBrandMap = {
  botox: 'BOTOX®',
  juvederm: 'JUVÉDERM®',
  cool_sculpting: 'CoolSculpting® and CoolSculpting® Elite',
  cool_tone: 'CoolTone®',
  diamond_glow: 'DiamondGlow®',
  kybella: 'KYBELLA®',
  latisse: 'LATISSE®',
  natrelle: 'Natrelle®',
  skin_medica: 'SkinMedica®',
  skinvive_by_juvederm: 'SKINVIVE',
} as const;

const brandSearchString = {
  botox: 'BOTOX® Cosmetic (onabotulinumtoxinA)',
  natrelle: 'Natrelle® Breast Implants',
} as const;

/**
 * contentfulBrandNamePlaceholderTextTypesMap
 *
 * Brand name placeholders currently being used in Contentful CMS
 */
const contentfulBrandNamePlaceholderTextTypesMap = [
  '{{LONG_BRAND_NAMES}}',
  '{{SHORT_BRAND_NAMES}}',
] as const;

// move this to utils
function isDefined<T>(t: T | undefined): t is T {
  return t !== undefined;
}

/**
  getContentfulBrands will return the consumer ISI Rich tech entity
  Sample usage
  const {
    data: { importantSafetyInformation } = {},
    loading,
    error,
  } = useContentfulBuilder();

  const brandNames = content.content.isis.nodes;
  const contentfulTemplates = importantSafetyInformation.templatesCollection.items;

  const longBrandNames = getContentfulBrands(
    brandNames,
    importantSafetyInformation.longBrandNamesCollection.items
  );
  const shortBrandNames = getContentfulBrands(
    brandNames,
    importantSafetyInformation.shortBrandNameCollection.items
  );
 */
// @ts-ignore
const getContentfulBrands = (
  brandNames: Array<BrandName>,
  contentfulTemplates: Array<{
    shortBrandName: string;
  }>
) => {
  const brands: Array<string | undefined> = pipe(
    pluckBrandNames,
    mapToContentful,
    (x) => x.filter(isDefined)
  )(brandNames);

  if (brands.length > 0) {
    return filterBrandsByShortName(brands, contentfulTemplates);
  }
};

/**
 * @param brandCodeIds list for which Contentful ISI Templates to return
 * @param contentfulTemplates Contentful ISI Template data
 * @param templateConfig defines which templates we will use, there is default object
 * @returns filtered Contentful ISI Template data
 */
const getContentfulISITemplatesByCodeId = (
  brandCodeIds: Array<BrandCodeId>,
  contentfulTemplates: Array<Maybe<ImportantSafetyInformationTemplate>>,
  templateConfig?: ISITemplateConfiguration | undefined
) => {
  if (brandCodeIds.length > 0) {
    const { codeIds } = getCodeIds(brandCodeIds, templateConfig);
    return contentfulTemplates.filter(
      (template) => template?.codeId && codeIds.includes(template?.codeId)
    );
  }

  return undefined;
};

/**
 * includesContentfulBrandNamePlaceholderTypes
 *
 * Returns true if placeholder exists within given string else returns false
 */
const includesContentfulBrandNamePlaceholderTypes = (val: string) => {
  return contentfulBrandNamePlaceholderTextTypesMap.some((placeholderText) =>
    val.includes(placeholderText)
  );
};

/**
 * @deprecated Use replaceISILinkTemplatePlaceholderText in renderOptions of Contentful renderer on FE
 *
 * replaceContentfulBrandNamePlaceholderText
 *
 * Replaces the placeholder with values from array
 */
const replaceContentfulBrandNamePlaceholderText = (
  brandNames: Array<string>,
  placeholderText: string | undefined
) => {
  if (!placeholderText) return;
  if (!includesContentfulBrandNamePlaceholderTypes(placeholderText)) return;

  const placeholders = contentfulBrandNamePlaceholderTextTypesMap
    .filter((placeholderTextType: string) =>
      placeholderText.includes(placeholderTextType)
    )
    .join(' ');

  if (brandNames.length > 1) {
    if (brandNames.length >= 3) {
      const lastValue = brandNames.pop();

      return placeholderText.replace(
        placeholders,
        brandNames.join(', ') + ', and ' + lastValue
      );
    } else {
      return placeholderText.replace(placeholders, brandNames.join(' and '));
    }
  } else {
    return placeholderText.replace(placeholders, brandNames[0]);
  }
};

/**
 * replaceISILinkTemplatePlaceholderText
 *
 * Description:
 * Helper for replacing template string placeholders added in Contentful rich text ISI Link Templates
 *
 * Note:
 * - ISI Link template strings include {{LONG_BRAND_NAMES}} and {{SHORT_BRAND_NAMES}}
 * - Order of brand names is based on order of Contentful Content Important Safety Information in Contentful CMS
 *
 * Example:
 * template - See Use(s) and Important Safety Info for {{SHORT_BRAND_NAMES}}
 * output - See Use(s) and Important Safety Info for JUVÉDERM® Collection of Fillers
 *
 * @param brands Array of objects containing full brand names from Contentful CMS data
 * @param isis  Array of objects containing slugs from Pre-CMS isi data
 * @param template rich text template from Contentful CMS
 * @returns string
 */
const replaceISILinkTemplatePlaceholderText = (
  brands: Array<{
    fullBrandName: string;
  }>,
  isis: Array<BrandName>,
  template: string
) => {
  if (!template) return;
  // If there are no string template placeholders, return the template as is (Example - BOTOX)
  if (!includesContentfulBrandNamePlaceholderTypes(template)) return template;

  const brandNames: Array<string | undefined> = pipe(
    pluckBrandNames,
    mapToContentful,
    (x) => x.filter(isDefined)
  )(isis);

  const placeholders = contentfulBrandNamePlaceholderTextTypesMap
    .filter((placeholderTextType: string) =>
      template.includes(placeholderTextType)
    )
    .join(' ');

  const brandsByNames = filterFullBrandNamesByName(brandNames, brands).filter(
    (item) =>
      (item !== brandSearchString.botox &&
        item !== brandSearchString.natrelle) ||
      brands.length === 1
  );
  if (brandsByNames.length > 1) {
    // 3 or more products should be comma delimited and include conjunction
    if (brandsByNames.length >= 3) {
      const lastValue = brandsByNames.pop();

      return template.replace(
        placeholders,
        brandsByNames.join(', ') + ', and ' + lastValue
      );
    } else {
      // If only 2 products include conjunction
      return template.replace(placeholders, brandsByNames.join(' and '));
    }
  } else {
    return template.replace(placeholders, brandsByNames[0] as string);
  }
};

/**
 * replaceBrandNamePlaceholderText
 *
 * Description:
 * Preference should be to use this function over replaceISILinkTemplatePlaceholderText (the latter is compatible with backend CMS, not needed for contentful data)
 * Helper for replacing any template string of type contentfulBrandNamePlaceholderTextTypesMap in text
 *
 * Note:
 * - contentfulBrandNamePlaceholderTextTypesMap include {{LONG_BRAND_NAMES}} and {{SHORT_BRAND_NAMES}}
 * - Order of brand names is based on order of brands[]
 *
 * Example:
 * text: See Use(s) and Important Safety Info for {{SHORT_BRAND_NAMES}}
 * brands: [{...otherProperties, fullBrandName: JUVÉDERM® Collection of Fillers}]
 * output - See Use(s) and Important Safety Info for JUVÉDERM® Collection of Fillers
 *
 * @param brands Array of objects containing full brand names and code Ids from Contentful CMS data
 * @param text string
 * @returns string
 */

const replaceBrandNamePlaceholderText = (
  text: string,
  brands: Pick<Brand, 'fullBrandName' | 'codeId'>[] = []
): string => {
  if (!text) return '';
  // If there are no string template placeholders, return the text as is
  if (!includesContentfulBrandNamePlaceholderTypes(text)) return text;

  const placeholders = contentfulBrandNamePlaceholderTextTypesMap
    .filter((placeholderTextType: string) => text.includes(placeholderTextType))
    .join(' ');

  const fullBrandNames: string[] = brands.reduce((acc, brand) => {
    // we don't replace brand names string templates with these brands (natrelle and botox have their own special isi template)
    if (
      brand.codeId !== CONTENTFUL_BRAND_CODEIDS.natrelle &&
      brand.codeId !== CONTENTFUL_BRAND_CODEIDS.botox &&
      brand.fullBrandName
    ) {
      acc.push(brand.fullBrandName);
    }
    return acc;
  }, [] as string[]);

  if (fullBrandNames.length > 1) {
    // 3 or more products should be comma delimited and include conjunction
    if (fullBrandNames.length >= 3) {
      const lastValue = fullBrandNames.pop();

      return text.replace(
        placeholders,
        fullBrandNames.join(', ') + ', and ' + lastValue
      );
    } else {
      // If only 2 products include conjunction
      return text.replace(placeholders, fullBrandNames.join(' and '));
    }
  } else {
    return text.replace(placeholders, fullBrandNames[0] as string);
  }
};

/**
 * Maps isi slugs to Contentful brand codeIds
 * @param isiSlugs - unique value to associate an independent data source to a specific brand's isi
 * @returns { BrandCodeId[] }
 */
const mapISISlugToContentfulBrandId = (
  isiSlugs?: (Maybe<string | LegacyISIFilter> | undefined)[]
): BrandCodeId[] => {
  if (!isiSlugs || !isiSlugs.length) return [];
  const brandCodeIds: BrandCodeId[] = [];

  isiSlugs.forEach((slug) => {
    if (isKnownISISlug(slug)) {
      brandCodeIds.push(ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID[slug]);
    } else {
      console.error('mapISISlugToContentfulBrandId__wrongData', { slug });
    }
  });

  return brandCodeIds;
};

/**
 * Typeguard to tell if an isi slug is compatible for Contentful Brand CodeId map
 * @param isiSlug
 * @returns { boolean }
 */
const isKnownISISlug = (
  isiSlug?: Maybe<string | LegacyISIFilter>
): isiSlug is LegacyISIFilter =>
  ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID[isiSlug as LegacyISIFilter] !== undefined;

export {
  normalizeNames,
  pluckBrandNames,
  pluckBrandCodeIds,
  consumerBrandMap,
  mapToContentful,
  getContentfulBrands,
  includesContentfulBrandNamePlaceholderTypes,
  replaceContentfulBrandNamePlaceholderText,
  replaceISILinkTemplatePlaceholderText,
  getContentfulISITemplatesByCodeId,
  mapISISlugToContentfulBrandId,
  isKnownISISlug,
  replaceBrandNamePlaceholderText,
};
