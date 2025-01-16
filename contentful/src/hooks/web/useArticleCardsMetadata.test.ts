import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import { ArticleCardsCodeID } from './useContentfulArticleCollection';
import { useArticleCardsMetadata } from './useArticleCardsMetadata';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe(useArticleCardsMetadata, () => {
  test('it returns empty object data returned is null', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: null,
    });

    const {
      result: {
        current: { articleMetadataCollection },
      },
    } = renderHook(() =>
      useArticleCardsMetadata({
        codeId: ArticleCardsCodeID.discoverPage,
      })
    );

    expect(articleMetadataCollection).toStrictEqual({});
  });
});
