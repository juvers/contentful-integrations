export {
  FullBrandName,
  ShortBrandName,
  CONTENTFUL_ISI_TEMPLATE_CODEIDS,
  CONTENTFUL_BRAND_CODEIDS,
  ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID,
} from './brandTypes';

export type {
  FullBrandNameString,
  ShortBrandNameString,
  BrandCodeId,
  LegacyISIFilter,
} from './brandTypes';

export {
  useContentfulBuilder,
  getCodeIds,
  filterBrandsByShortName,
  filterFullBrandNamesByName,
} from './fullSafetyDetails';

export type {
  Template,
  Templates,
  ContentfulISIDataState,
} from './fullSafetyDetails';

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
} from './isiHelpers';

export type { BrandName } from './isiHelpers';

export {
  mockContentfulData,
  fullDataMock,
  brandQueryResult,
} from './mockContentfulData';

export { useContentfulISI } from './useContentfulISI';

export {
  useContentfulISIByBrand,
  useContentfulISIByBrandId,
} from './useContentfulISIByBrand';

export {
  useContentfulISITemplates,
  useMemoizedBrandCodeIds,
  defaultTemplateConfig,
  getContentfulIsiTemplates,
} from './useContentfulISITemplates';

export type {
  ContentfulISITemplatesTypesBrand,
  ContentfulISITemplatesTypes,
  ISITemplateConfiguration,
} from './useContentfulISITemplates';
