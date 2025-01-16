import { useQuery } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import { contentfulClient } from '../../contentfulClient';
import { ARTICLE_CARDS_METADATA_QUERY } from '../../queries/articleCardsMetadata.query';
import { Query, Maybe } from '../../types';
import { MetadataCollection } from '../../types/metadata';
import { ArticleCardsCodeID } from '../../types/articleCards';

export type ArticleCardMetadata = {
  sys: { id: string };
  metaConcernAreaCollection: Maybe<MetadataCollection>;
  metaProductCollection: Maybe<MetadataCollection>;
  metaUserJourneyCollection: Maybe<MetadataCollection>;
  metaContentVisualCollection: Maybe<MetadataCollection>;
  metaContentTagsCollection: Maybe<MetadataCollection>;
};

export type CardCollectionMetadata = {
  cardsCollection?: {
    items?: ArticleCardMetadata[];
  };
};

const useArticleCardsMetadata = ({
  codeId,
  skip = false,
}: {
  codeId: (typeof ArticleCardsCodeID)[keyof typeof ArticleCardsCodeID];
  skip?: boolean;
  limitNumCards?: number;
}): {
  articleMetadataCollection: CardCollectionMetadata;
  loading: boolean;
  error?: ApolloError;
} => {
  const { data, loading, error } = useQuery<Query>(
    ARTICLE_CARDS_METADATA_QUERY,
    {
      skip,
      client: contentfulClient,
      variables: {
        codeId,
      },
    }
  );

  const articleMetadataCollection =
    data?.composeCardsCollection?.items?.[0] || {};

  if (error) {
    console.error(
      `useArticleCardsMetadata--error`,
      { component: 'useArticleCardsMetadata', codeId },
      error
    );
  }

  return { articleMetadataCollection, loading, error };
};

export { useArticleCardsMetadata };
