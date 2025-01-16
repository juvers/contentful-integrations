import { useQuery } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';

import { contentfulClient } from '../../contentfulClient';
import { ARTICLE_CARD_BY_SLUG_QUERY } from '../../queries/articleCardBySlug.query';
import { ArticlePage, Maybe, Brand } from '../../types';

export type ArticlePageType = Pick<
  ArticlePage,
  | 'breadcrumb'
  | 'headline'
  | 'slug'
  | 'cardSummary'
  | 'hero'
  | 'mobileHero'
  | 'brandsCollection'
>;

export type UIBrandsCollection = Pick<Brand, 'codeId'>[] &
  Maybe<Brand>[] &
  undefined;

export type ArticlePageData = {
  items?: Maybe<ArticlePageType>[] | [];
};

export type ArticleCardType = {
  articlePageCollection?: ArticlePageData;
};

type ArticlePageVars = {
  slug: string;
  skip?: boolean;
  preview?: boolean;
};

const useContentfulArticleCardBySlug = ({
  slug,
  skip = false,
  preview = false,
}: ArticlePageVars): {
  articleCardData: ArticleCardType;
  loading: boolean;
  error?: ApolloError;
} => {
  const { data, loading, error } = useQuery<ArticleCardType, ArticlePageVars>(
    ARTICLE_CARD_BY_SLUG_QUERY,
    {
      skip,
      client: contentfulClient,
      variables: {
        slug,
        preview,
      },
    }
  );

  const articleCardData = data || {};

  if (error) {
    console.error(`useContentfulArticleCard--error`, { slug }, error);
  }

  return { articleCardData, loading, error };
};

export { useContentfulArticleCardBySlug };
