import { useState, useEffect, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import { contentfulClient } from '../../contentfulClient';
import { ARTICLE_CARDS_QUERY } from '../../queries/articleCards.query';
import { Query } from '../../types';
import { CardCollection, ArticleCardsCodeID } from '../../types/articleCards';

export type ReturnValues = {
  articleCollection: CardCollection;
  loading: boolean;
  error?: ApolloError | Error;
};

export const articleCardIndex = 5;

export const checkPathIsArticleCard = (
  path?: readonly (string | number)[]
): boolean => {
  if (!path) return false;
  return (
    path[0] === 'composeCardsCollection' &&
    path[1] === 'items' &&
    typeof path[2] === 'number' &&
    path[3] === 'cardsCollection' &&
    path[4] === 'items' &&
    typeof path[articleCardIndex] === 'number'
  );
};

const useContentfulArticleCollection = ({
  codeId,
  skip = false,
  limitNumCards,
}: {
  codeId: (typeof ArticleCardsCodeID)[keyof typeof ArticleCardsCodeID];
  skip?: boolean;
  limitNumCards?: number;
}): ReturnValues => {
  const [returnValues, setReturnValues] = useState<ReturnValues>({
    articleCollection: {},
    loading: !skip,
  });
  const { data, loading, error } = useQuery<Query>(ARTICLE_CARDS_QUERY, {
    skip,
    client: contentfulClient,
    variables: {
      codeId,
      limitNumCards,
    },
    errorPolicy: 'all',
  });
  const articleCollectionResult: CardCollection = useMemo(
    () => (data?.composeCardsCollection?.items?.[0] as CardCollection) || {},
    [data]
  );

  const generalError = useCallback(() => {
    console.error(
      `useContentfulArticleCollection--error`,
      {
        component: 'useContentfulArticleCollection',
        codeId,
      },
      error
    );
    setReturnValues({
      articleCollection: {},
      loading,
      error,
    });
  }, [codeId, error, loading]);

  const noArticlesError = useCallback(() => {
    console.error(
      `useContentfulArticleCollection--error__noArticles`,
      {
        component: 'useContentfulArticleCollection',
        codeId,
      },
      Error(`No articles in collection with codeId ${codeId}`)
    );
    setReturnValues({
      articleCollection: {},
      loading,
      error,
    });
  }, [codeId, loading, error]);

  useEffect(() => {
    if (!loading && !skip) {
      // gql errors
      if (error) {
        // if error type gql, all the gql errors are unresovable link errors, there isn't a network error, and there are articles returned -> we want ignore articles that are due to 'unresolvable links' (but return other articles)
        // read more about unresolvable link error at https://www.contentful.com/developers/docs/references/graphql/#/reference/graphql-errors
        if (
          error.graphQLErrors.length > 0 &&
          !error.graphQLErrors.some(
            // @ts-ignore
            (err) => err.extensions.contentful.code !== 'UNRESOLVABLE_LINK'
          ) &&
          !error.networkError &&
          !!articleCollectionResult?.cardsCollection?.items &&
          articleCollectionResult?.cardsCollection?.items?.length > 0
        ) {
          // get the indexes of articles to exclude
          const articleIndexesToExclude: number[] = error.graphQLErrors.reduce(
            (acc, curr) => {
              if (checkPathIsArticleCard(curr.path)) {
                const articleIndex = curr?.path?.[articleCardIndex] as number;
                articleIndex >= 0 &&
                  !acc.some((number) => number === articleIndex) &&
                  acc.push(articleIndex);
              }
              return acc;
            },
            [] as number[]
          );

          // exclude the articles with 'unresolvable links',

          const newItems =
            articleCollectionResult.cardsCollection.items?.filter(
              (_item, index) =>
                !articleIndexesToExclude.some(
                  (indexToExclude) => indexToExclude === index
                )
            );
          const newTotal =
            articleCollectionResult.cardsCollection.total -
            articleIndexesToExclude.length;

          // if after filtering error articles out there are no articles to render, trigger no articles error
          if (newItems?.length < 1) {
            noArticlesError();
          }
          // still return the articles with no errors, but log the error
          else {
            console.error(
              `useContentfulArticleCollection--error__unresolvableLink, `,
              {
                component: 'useContentfulArticleCollection',
                codeId,
              },
              error
            );

            setReturnValues({
              articleCollection: {
                ...articleCollectionResult,
                cardsCollection: { items: newItems, total: newTotal },
              },
              loading,
            });
          }
        }
        // general gql error
        else {
          generalError();
        }
      }
      // no articles in the collection
      else if (!articleCollectionResult.cardsCollection?.items?.[0]) {
        noArticlesError();
      }
      // result
      else {
        setReturnValues({
          articleCollection: articleCollectionResult,
          loading,
          error,
        });
      }
    }
  }, [
    articleCollectionResult,
    loading,
    error,
    skip,
    codeId,
    generalError,
    noArticlesError,
  ]);

  return { ...returnValues };
};

export { useContentfulArticleCollection, ArticleCardsCodeID };
