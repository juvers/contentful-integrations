// Root level exports
import introspectionResult from './introspection-result';
export { introspectionResult };
export * from './types';
export { contentfulClient } from './contentfulClient';

// Helpers
export { getMetadataValuesArray, getMetadataValues } from './helpers';

// Hooks
export {
  useContentfulRoutes,
  useArticleCardsMetadata,
  useAuthFlowQuery,
  useContentfulArticleCardBySlug,
  useContentfulArticleCollection,
  articleCardIndex,
  checkPathIsArticleCard,
  useLegalContentByCodeIds,
  LegalContentCodeIds,
} from './hooks';

export type {
  ArticleCardMetadata,
  CardCollectionMetadata,
  ArticlePageType,
  UIBrandsCollection,
  ArticlePageData,
  ArticleCardType,
  LegalContentType,
  LegalContentData,
  QueryResponseType,
} from './hooks';

// ISI
export {
  FullBrandName,
  ShortBrandName,
  CONTENTFUL_ISI_TEMPLATE_CODEIDS,
  CONTENTFUL_BRAND_CODEIDS,
  ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID,
  useContentfulBuilder,
  getCodeIds,
  filterBrandsByShortName,
  filterFullBrandNamesByName,
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
  useContentfulISI,
  useContentfulISIByBrand,
  useContentfulISIByBrandId,
  useContentfulISITemplates,
  useMemoizedBrandCodeIds,
  defaultTemplateConfig,
  getContentfulIsiTemplates,
} from './isi';
export type {
  FullBrandNameString,
  ShortBrandNameString,
  BrandCodeId,
  LegacyISIFilter,
  Template,
  Templates,
  ContentfulISIDataState,
  BrandName,
  ContentfulISITemplatesTypesBrand,
  ContentfulISITemplatesTypes,
  ISITemplateConfiguration,
} from './isi';

// Mock Data
export {
  mockImportantSafetyInformation,
  mockContentfulISITemplates,
  mockPrivacyTerms,
  mockHipaa,
  richTextParagraph,
} from './mockData';
// Queries
export {
  ARTICLE_CARD_BY_SLUG_QUERY,
  ARTICLE_CARDS_QUERY,
  ARTICLE_CARDS_METADATA_QUERY,
  ISI_TEMPLATES_QUERY,
  LONG_BRAND_NAMES_QUERY,
  SHORT_BRAND_NAMES_QUERY,
  ISI_BY_BRAND_QUERY,
  ISI_BY_BRAND_ID_QUERY,
  LEGAL_CONTENT_QUERY,
  AUTHENTICATION_FLOW_BY_LANDING_PAGE_SLUG_QUERY,
  AUTHENTICATION_FLOW_BY_CODE_ID_QUERY,
} from './queries';
// Types
export { ArticleCardsCodeID } from './types/index';
export type {
  UIArticleHero,
  ArticleCard,
  CardCollection,
  MetadataTag,
  MetadataCollection,
} from './types/index';

// Utils
export { getISIShortname, pipe, compose } from './utils';
