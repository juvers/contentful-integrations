import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import { brandQueryResult } from './mockContentfulData';
import { useContentfulISIByBrand } from './useContentfulISIByBrand';
import { FullBrandName } from './brandTypes';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe(useContentfulISIByBrand, () => {
  test('it returns data', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: brandQueryResult,
    });

    const {
      result: {
        current: { data },
      },
    } = renderHook(() => useContentfulISIByBrand([FullBrandName.SkinMedica]));

    expect(data).toStrictEqual(brandQueryResult);
  });
});
