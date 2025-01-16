import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import { useContentfulArticleCardBySlug } from './useContentfulArticleCardBySlug';
import { useLegalContentByCodeIds } from './useLegalContentByCodeIds';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe(useContentfulArticleCardBySlug, () => {
  test('it returns undefined data returned is null', () => {
    const consoleWarn = console.warn;
    console.warn = jest.fn();
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: null,
    });

    const {
      result: {
        current: { legalContent },
      },
    } = renderHook(() =>
      useLegalContentByCodeIds({
        codeIds: ['code1', 'code2'],
      })
    );

    expect(legalContent).toStrictEqual(undefined);
    console.warn = consoleWarn;
  });
});
