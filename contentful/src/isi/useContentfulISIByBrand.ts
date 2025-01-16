import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { contentfulClient } from '../contentfulClient';
import {
  ISI_BY_BRAND_QUERY,
  ISI_BY_BRAND_ID_QUERY,
} from '../queries/isiByBrand.query';
import { BrandCollection } from '../types';
import { FullBrandNameString, BrandCodeId } from './brandTypes';

/**
 * @deprecated please use "useContentfulISIByBrandId"
 *
 * Hook to fetch Contentful ISI data, limited to data in one Brand content type.
 * To return all Contentful ISI data, @see useContentfulBuilder
 * @fullBrandNames array of Brand.fullBrandName, @see Brand type in src/types
 *
 */
const useContentfulISIByBrand = (
  fullBrandNames: FullBrandNameString[]
): QueryResult<
  { brandCollection: BrandCollection },
  { fullBrandNames: string[] }
> => {
  const result = useQuery(ISI_BY_BRAND_QUERY, {
    client: contentfulClient,
    variables: { fullBrandNames },
    skip: fullBrandNames.length === 0,
  });

  if (result.error)
    console.error('useContentfulISIByBrand--error', {
      fullBrandNames,
      error: result.error,
    });

  return result;
};

const useContentfulISIByBrandId = (
  brandIds: BrandCodeId[]
): QueryResult<
  { brandCollection: BrandCollection },
  { brandIds: string[] }
> => {
  const result = useQuery(ISI_BY_BRAND_ID_QUERY, {
    client: contentfulClient,
    variables: { brandIds },
    skip: brandIds?.length === 0,
  });

  if (result.error)
    console.error('useContentfulISIByBrand--error', {
      brandIds,
      error: result.error,
    });

  return result;
};

export { useContentfulISIByBrand, useContentfulISIByBrandId };
