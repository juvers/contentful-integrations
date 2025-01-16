// Root level exports
export { useContentfulRoutes } from './useContentfulRoutes';

// Web
export { useArticleCardsMetadata } from './web/useArticleCardsMetadata';
export type {
  ArticleCardMetadata,
  CardCollectionMetadata,
} from './web/useArticleCardsMetadata';

export { useAuthFlowQuery } from './web/useAuthFlowQuery';

export { useContentfulArticleCardBySlug } from './web/useContentfulArticleCardBySlug';
export type {
  ArticlePageType,
  UIBrandsCollection,
  ArticlePageData,
  ArticleCardType,
} from './web/useContentfulArticleCardBySlug';

export {
  useContentfulArticleCollection,
  ArticleCardsCodeID,
  articleCardIndex,
  checkPathIsArticleCard,
} from './web/useContentfulArticleCollection';

export {
  useLegalContentByCodeIds,
  LegalContentCodeIds,
} from './web/useLegalContentByCodeIds';
export type {
  LegalContentType,
  LegalContentData,
  QueryResponseType,
} from './web/useLegalContentByCodeIds';
