import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import {
  useContentfulArticleCollection,
  ArticleCardsCodeID,
} from './useContentfulArticleCollection';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe.skip(useContentfulArticleCollection, () => {
  test('it returns empty object data returned is null', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: null,
    });

    const {
      result: {
        current: { articleCollection },
      },
    } = renderHook(() =>
      useContentfulArticleCollection({
        codeId: ArticleCardsCodeID.discoverPage,
      })
    );

    expect(articleCollection).toStrictEqual({});
  });

  test('it filters out articles with "unresolvable link" errors', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: {
        graphQLErrors: [
          {
            extensions: { contentful: { code: 'UNRESOLVABLE_LINK' } },
            path: [
              'composeCardsCollection',
              'items',
              0,
              'cardsCollection',
              'items',
              0,
            ],
          },
        ],
      },
      data: {
        composeCardsCollection: {
          items: [
            {
              headline: 'test headline',
              subhead: 'test subhead',
              cardsCollection: {
                items: [
                  { headline: 'article 1 headline' },
                  { headline: 'article 2 headline' },
                ],
                total: 2,
              },
            },
          ],
        },
      },
    });

    const {
      result: {
        current: { articleCollection },
      },
    } = renderHook(() =>
      useContentfulArticleCollection({
        codeId: ArticleCardsCodeID.discoverPage,
      })
    );

    expect(articleCollection?.cardsCollection?.items?.length).toBe(1);
    expect(articleCollection?.cardsCollection?.items?.[0]).toStrictEqual({
      headline: 'article 2 headline',
    });
    expect(articleCollection?.cardsCollection?.total).toBe(1);
  });

  test('it returns an empty object when errors are not all "unresolvable link" errors', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: {
        graphQLErrors: [
          {
            extensions: { contentful: { code: 'UNRESOLVABLE_LINK' } },
            path: [
              'composeCardsCollection',
              'items',
              0,
              'cardsCollection',
              'items',
              0,
            ],
          },
          {
            extensions: { contentful: { code: 'UNKNOWN_LOCALE' } },
          },
        ],
      },
      data: {
        composeCardsCollection: {
          items: [
            {
              headline: 'test headline',
              subhead: 'test subhead',
              cardsCollection: {
                items: [
                  { headline: 'article 1 headline' },
                  { headline: 'article 2 headline' },
                ],
                total: 2,
              },
            },
          ],
        },
      },
    });

    const {
      result: {
        current: { articleCollection },
      },
    } = renderHook(() =>
      useContentfulArticleCollection({
        codeId: ArticleCardsCodeID.discoverPage,
      })
    );

    expect(articleCollection).toStrictEqual({});
  });
});
