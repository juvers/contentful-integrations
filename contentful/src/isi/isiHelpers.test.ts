import {
  pluckBrandNames,
  normalizeNames,
  mapToContentful,
  getContentfulBrands,
  includesContentfulBrandNamePlaceholderTypes,
  replaceContentfulBrandNamePlaceholderText,
  replaceISILinkTemplatePlaceholderText,
} from './isiHelpers';

describe('isi helper functions', function () {
  it('should return the brand name', function () {
    expect(pluckBrandNames([{ slug: 'consumer_juvederm' }])[0]).toBe(
      'juvederm'
    );
  });

  it('should return undefined', function () {
    expect(pluckBrandNames()).toStrictEqual([]);
    expect(pluckBrandNames([{ slug: null }])[0]).toBeUndefined();
    expect(pluckBrandNames([{ slug: undefined }])[0]).toBeUndefined();
    expect(pluckBrandNames([])).toHaveLength(0);
  });

  describe('normalizeNames', () => {
    it("should remove 'consumer_'", function () {
      const actual = normalizeNames('consumer_foobar');
      expect(actual).toBe('foobar');
    });

    it("should remove return undefined'", function () {
      expect(normalizeNames(null)).toBe(undefined);
      expect(normalizeNames(undefined)).toBe(undefined);
    });
  });

  describe('mapToContentful', function () {
    it('should return an empty array', function () {
      expect(mapToContentful()).toHaveLength(0);
    });

    it('should return the correct value', function () {
      expect(mapToContentful(['botox'])?.[0]).toBe('BOTOX®');
    });
  });

  describe('getContentFulBrands', () => {
    it('should filter out unneeded brands', () => {
      const brands = [{ slug: 'test1' }];
      const shortBrandNames = [{ shortBrandName: 'test1' }];
      const expected = getContentfulBrands(brands, shortBrandNames);
      expect(expected).toBeFalsy();
    });

    it('should filter out unneeded brands and return matched brands', () => {
      const brands = [{ slug: 'juvederm' }];
      const shortBrandNames = [{ shortBrandName: 'JUVÉDERM®' }];
      const expected = getContentfulBrands(brands, shortBrandNames);
      expect(expected).toHaveLength(1);
    });
  });

  describe('replaceContentfulBrandNamePlaceholderText', () => {
    it('should replace brand name placeholder text with values', () => {
      const placeholders = '{{SHORT_BRAND_NAMES}}';
      const values = ['value 1'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1');
    });

    it('should replace brand name placeholder text with values', () => {
      const placeholders = '{{SHORT_BRAND_NAMES}}';
      const values = ['value 1'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1');
    });

    it('should replace brand name placeholder with 2 values connected with conjunction and', () => {
      const placeholders = '{{SHORT_BRAND_NAMES}}';
      const values = ['value 1', 'value 2'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1 and value 2');
    });

    it('should replace brand name placeholder with 3 values separated by commas and connected with conjunction and', () => {
      const placeholders = '{{SHORT_BRAND_NAMES}}';
      const values = ['value 1', 'value 2', 'value 3'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1, value 2, and value 3');
    });

    it('should replace long brand name placeholder text with values', () => {
      const placeholders = '{{LONG_BRAND_NAMES}}';
      const values = ['value 1'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1');
    });

    it('should replace long brand name placeholder with 2 values connected with conjunction and', () => {
      const placeholders = '{{LONG_BRAND_NAMES}}';
      const values = ['value 1', 'value 2'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1 and value 2');
    });

    it('should replace long brand name placeholder with 3 values separated by commas and connected with conjunction and', () => {
      const placeholders = '{{LONG_BRAND_NAMES}}';
      const values = ['value 1', 'value 2', 'value 3'];

      const expected = replaceContentfulBrandNamePlaceholderText(
        values,
        placeholders
      );

      expect(expected).toBeDefined();
      expect(expected).toBe('value 1, value 2, and value 3');
    });
  });

  describe('includesContentfulBrandNamePlaceholderTypes', () => {
    it('should return false', () => {
      const template = 'no placeholder';

      const expected = includesContentfulBrandNamePlaceholderTypes(template);

      expect(expected).toBeFalsy();
    });

    it('should return true for {{SHORT_BRAND_NAMES}} placeholder', () => {
      const template = 'with {{SHORT_BRAND_NAMES}} placeholder';

      const expected = includesContentfulBrandNamePlaceholderTypes(template);

      expect(expected).toBeTruthy();
    });

    it('should return true for {{LONG_BRAND_NAMES}} placeholder', () => {
      const template = '...{{LONG_BRAND_NAMES}}...';

      const expected = includesContentfulBrandNamePlaceholderTypes(template);

      expect(expected).toBeTruthy();
    });
  });

  describe('replaceISILinkTemplatePlaceholderText', () => {
    it('should replace short brand names template string placeholder', () => {
      const brands = [{ fullBrandName: 'CoolTone®' }];
      const isis = [{ slug: 'consumer_cool_tone' }];
      const template = '{{SHORT_BRAND_NAMES}}';

      const expected = replaceISILinkTemplatePlaceholderText(
        brands,
        isis,
        template
      );

      expect(expected).toBe('CoolTone®');
    });

    it('should replace long brand names template string placeholder', () => {
      const brands = [
        { fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)' },
      ];
      const isis = [{ slug: 'consumer_botox' }];
      const template = '{{LONG_BRAND_NAMES}}';

      const expected = replaceISILinkTemplatePlaceholderText(
        brands,
        isis,
        template
      );

      expect(expected).toBe('BOTOX® Cosmetic (onabotulinumtoxinA)');
    });

    it('should replace long and short brand name template string placeholders', () => {
      const brands = [
        { fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)' },
        { fullBrandName: 'CoolTone®' },
      ];
      const isis = [{ slug: 'consumer_botox' }, { slug: 'consumer_cool_tone' }];
      const template = '{{LONG_BRAND_NAMES}} {{SHORT_BRAND_NAMES}}';

      const expected = replaceISILinkTemplatePlaceholderText(
        brands,
        isis,
        template
      );

      expect(expected).toBe('CoolTone®');
    });

    it('should replace long and short brand name template string placeholders', () => {
      const brands = [
        { fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)' },
        { fullBrandName: 'Kybella® (deoxycholic acid)' },
        { fullBrandName: 'JUVÉDERM® Collection of Fillers' },
      ];
      const isis = [
        { slug: 'consumer_botox' },
        { slug: 'consumer_juvederm' },
        { slug: 'consumer_kybella' },
      ];
      const template = '{{LONG_BRAND_NAMES}} {{SHORT_BRAND_NAMES}}';

      const expected = replaceISILinkTemplatePlaceholderText(
        brands,
        isis,
        template
      );

      expect(expected).toBe(
        'Kybella® (deoxycholic acid) and JUVÉDERM® Collection of Fillers'
      );
    });
  });
});
