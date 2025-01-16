import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import { useContentfulArticleCardBySlug } from './useContentfulArticleCardBySlug';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe(useContentfulArticleCardBySlug, () => {
  test('it returns empty object data returned is null', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: null,
    });

    const {
      result: {
        current: { articleCardData },
      },
    } = renderHook(() =>
      useContentfulArticleCardBySlug({
        slug: '/',
      })
    );

    expect(articleCardData).toStrictEqual({});
  });
});
