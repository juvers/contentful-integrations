import { renderHook } from '@testing-library/react';

import { useContentfulISITemplates } from './useContentfulISITemplates';
import { mockImportantSafetyInformation } from '../mockData/mockImportantSafetyInformation';
import {
  BrandCodeId,
  CONTENTFUL_BRAND_CODEIDS,
  CONTENTFUL_ISI_TEMPLATE_CODEIDS,
} from './brandTypes';

describe('useContentfulISITemplates', () => {
  it('returns templates as undefined if Contentful CMS and Pre-CMs ISI data is undefined', () => {
    const { result } = renderHook(() =>
      useContentfulISITemplates(undefined, undefined)
    );

    expect(result.current.brands).toBeUndefined();
    expect(result.current.isiHeaderTemplate).toBeUndefined();
    expect(result.current.isiLinkTemplates).toBeUndefined();
  });

  it('returns templates as undefined if Contentful CMS data is undefined', () => {
    const { result } = renderHook(() =>
      useContentfulISITemplates(undefined, [
        CONTENTFUL_BRAND_CODEIDS.coolsculpting,
      ])
    );

    expect(result.current.brands).toBeUndefined();
    expect(result.current.isiHeaderTemplate).toBeUndefined();
    expect(result.current.isiLinkTemplates).toBeUndefined();
  });

  it('returns templates as undefined if Pre-CMS ISI data is undefined', () => {
    const { result } = renderHook(() =>
      useContentfulISITemplates(mockImportantSafetyInformation, undefined)
    );

    expect(result.current.brands).toBeUndefined();
    expect(result.current.isiHeaderTemplate).toBeUndefined();
    expect(result.current.isiLinkTemplates).toBeUndefined();
  });

  it('returns ISI templates for single brand', () => {
    const kybellaCodeId = [CONTENTFUL_BRAND_CODEIDS.kybella];

    const { result } = renderHook(() =>
      useContentfulISITemplates(mockImportantSafetyInformation, kybellaCodeId)
    );

    expect(result.current.brands).toBeDefined();
    expect(result.current.brands?.length).toEqual(1);
    expect(result.current.isiHeaderTemplate).toBeDefined();
    expect(result.current.isiHeaderTemplate?.length).toEqual(1);
    expect(result.current.isiLinkTemplates).toBeDefined();
    expect(result.current.isiLinkTemplates?.length).toEqual(1);
  });

  it('returns ISI templates for multiple brands', () => {
    const multipleBrandCodeIds = [
      CONTENTFUL_BRAND_CODEIDS.coolsculpting,
      CONTENTFUL_BRAND_CODEIDS.cooltone,
    ];
    const { result } = renderHook(() =>
      useContentfulISITemplates(
        mockImportantSafetyInformation,
        multipleBrandCodeIds
      )
    );

    expect(result.current.brands).toBeDefined();
    expect(result.current.brands?.length).toEqual(2);
    expect(result.current.isiHeaderTemplate).toBeDefined();
    expect(result.current.isiHeaderTemplate?.length).toEqual(1);
    expect(result.current.isiLinkTemplates).toBeDefined();
    expect(result.current.isiLinkTemplates?.length).toEqual(1);
  });

  it('returns multiple ISI link templates when single brand and BOTOX is mentioned', () => {
    const singleBrandAndBotoxCodeIds = [
      CONTENTFUL_BRAND_CODEIDS.botox,
      CONTENTFUL_BRAND_CODEIDS.latisse,
    ];
    const { result } = renderHook(() =>
      useContentfulISITemplates(
        mockImportantSafetyInformation,
        singleBrandAndBotoxCodeIds
      )
    );

    expect(result.current.brands).toBeDefined();
    expect(result.current.brands?.length).toEqual(2);
    expect(result.current.isiHeaderTemplate).toBeDefined();
    expect(result.current.isiHeaderTemplate?.length).toEqual(2);
    expect(result.current.isiLinkTemplates).toBeDefined();
    expect(result.current.isiLinkTemplates?.length).toEqual(2);
  });

  it('overrides Botox Only config and returns multiple ISI link templates when single brand and BOTOX Shorten is mentioned', () => {
    const singleBrandAndBotoxCodeIds: BrandCodeId[] = [
      CONTENTFUL_BRAND_CODEIDS.botox,
      CONTENTFUL_BRAND_CODEIDS.latisse,
    ];
    const templateConfig = {
      botoxOnlyId: CONTENTFUL_ISI_TEMPLATE_CODEIDS.botoxOnlyShorten,
    };
    const { result } = renderHook(() =>
      useContentfulISITemplates(
        mockImportantSafetyInformation,
        singleBrandAndBotoxCodeIds,
        templateConfig
      )
    );

    expect(result.current.brands).toBeDefined();
    expect(result.current.brands?.length).toEqual(2);
    expect(result.current.isiHeaderTemplate).toBeDefined();
    expect(result.current.isiHeaderTemplate?.length).toEqual(2);
    expect(result.current.isiLinkTemplates).toBeDefined();
    expect(result.current.isiLinkTemplates?.length).toEqual(2);
  });

  it('returns undefined if a Contentful Brand codeId has broken the defined data contract', () => {
    const isiWithUnsupportedBrandCodeId = {
      ...mockImportantSafetyInformation,
    };
    // @ts-ignore
    isiWithUnsupportedBrandCodeId.shortBrandNameCollection?.items[1]?.codeId =
      'cooltone890';
    const { result } = renderHook(() =>
      useContentfulISITemplates(isiWithUnsupportedBrandCodeId, [
        CONTENTFUL_BRAND_CODEIDS.cooltone,
        CONTENTFUL_BRAND_CODEIDS.botox,
      ])
    );

    expect(result.current.brands).toBeUndefined();
    expect(result.current.isiHeaderTemplate).toBeUndefined();
    expect(result.current.isiLinkTemplates).toBeUndefined();
  });
});
