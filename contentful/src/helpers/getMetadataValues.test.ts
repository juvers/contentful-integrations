import { MetadataTag } from '../types/metadata';
import { getMetadataValues, getMetadataValuesArray } from './getMetadataValues';

describe('getMetadataValues', () => {
  it('should return undefined if "not applicable" is the only selection, ignoring capitalization', () => {
    const notApplicable: MetadataTag[] = [{ value: 'Not applIcabLe' }];
    expect(getMetadataValues(notApplicable)).toBe(undefined);
  });

  it('should remove duplicates from the string returned', () => {
    const userJourney: MetadataTag[] = [
      { value: 'book treatment' },
      { value: 'join alle' },
      { value: 'book treatment' },
    ];
    const notApplicable: MetadataTag[] = [
      { value: 'not applicable' },
      { value: 'Not Applicable' },
    ];
    expect(getMetadataValues(userJourney)).toBe('book treatment, join alle');
    expect(getMetadataValues(notApplicable)).toBe(undefined);
  });

  it('should remove "not applicable" from the string returned if it is NOT the only selection', () => {
    const userJourney: MetadataTag[] = [
      { value: 'book treatment' },
      { value: 'join alle' },
      { value: 'book treatment' },
      { value: 'not applicable' },
    ];
    expect(getMetadataValues(userJourney)).toBe('book treatment, join alle');
  });

  it('returns undefined if array is null or undefined', () => {
    const arrayNull = null;
    const arrayUndefined = undefined;
    expect(getMetadataValues(arrayNull)).toBe(undefined);
    expect(getMetadataValues(arrayUndefined)).toBe(undefined);
  });

  it('returns undefined if metadata value is null or undefined', () => {
    const valueNull: MetadataTag[] = [{ value: null }];
    const valueUndefined: MetadataTag[] = [{ value: undefined }];
    const valueNullAndUndefined: MetadataTag[] = [
      { value: null },
      { value: undefined },
    ];
    expect(getMetadataValues(valueNull)).toBe(undefined);
    expect(getMetadataValues(valueUndefined)).toBe(undefined);
    expect(getMetadataValues(valueNullAndUndefined)).toBe(undefined);
  });
});

describe('getMetadataValuesArray', () => {
  it('should return undefined if "not applicable" is the only selection, ignoring capitalization', () => {
    const notApplicable: MetadataTag[] = [{ value: 'Not applIcabLe' }];
    expect(getMetadataValuesArray(notApplicable)).toBe(undefined);
  });

  it('should remove duplicates from the array returned', () => {
    const userJourney: MetadataTag[] = [
      { value: 'book treatment' },
      { value: 'join alle' },
      { value: 'book treatment' },
    ];
    const notApplicable: MetadataTag[] = [
      { value: 'not applicable' },
      { value: 'Not Applicable' },
    ];
    expect(getMetadataValuesArray(userJourney)).toEqual([
      'book treatment',
      'join alle',
    ]);
    expect(getMetadataValuesArray(notApplicable)).toBe(undefined);
  });

  it('should remove "not applicable" from the array returned if it is NOT the only selection', () => {
    const userJourney: MetadataTag[] = [
      { value: 'book treatment' },
      { value: 'join alle' },
      { value: 'book treatment' },
      { value: 'not applicable' },
    ];
    expect(getMetadataValuesArray(userJourney)).toEqual([
      'book treatment',
      'join alle',
    ]);
  });

  it('returns undefined if array is null or undefined', () => {
    const arrayNull = null;
    const arrayUndefined = undefined;
    expect(getMetadataValues(arrayNull)).toBe(undefined);
    expect(getMetadataValues(arrayUndefined)).toBe(undefined);
  });

  it('returns undefined if metadata value is null or undefined', () => {
    const valueNull: MetadataTag[] = [{ value: null }];
    const valueUndefined: MetadataTag[] = [{ value: undefined }];
    const valueNullAndUndefined: MetadataTag[] = [
      { value: null },
      { value: undefined },
    ];
    expect(getMetadataValues(valueNull)).toBe(undefined);
    expect(getMetadataValues(valueUndefined)).toBe(undefined);
    expect(getMetadataValues(valueNullAndUndefined)).toBe(undefined);
  });
});
