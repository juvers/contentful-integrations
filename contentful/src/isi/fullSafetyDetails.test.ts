import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import {
  getCodeIds,
  filterBrandsByShortName,
  filterFullBrandNamesByName,
  useContentfulBuilder,
} from './fullSafetyDetails';
import { fullDataMock } from './mockContentfulData';
import { ShortBrandName, CONTENTFUL_BRAND_CODEIDS } from './brandTypes';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe('contentful isi builder', function () {
  describe('getCodeIds', function () {
    it('should return botox only', function () {
      const expected = getCodeIds([ShortBrandName.Botox]);

      expect(expected).toHaveProperty('state', 'botoxOnly');
      expect(expected).toHaveProperty(['codeIds', 0], 'BotoxOnly');
    });

    it('should return importantSafetyInformationOnly', function () {
      const expected = getCodeIds(['NotBotoxOrKybella']);
      expect(expected).toHaveProperty(
        'state',
        'importantSafetyInformationOnly'
      );
      expect(expected).toHaveProperty(
        ['codeIds', 0],
        'ImportantSafetyInformationOnly'
      );
    });

    it('should return singleSafetyAndPrescribingInfo', function () {
      expect(getCodeIds([ShortBrandName.Kybella])).toHaveProperty(
        'state',
        'singleSafetyAndPrescribingInfo'
      );
      expect(getCodeIds([ShortBrandName.Kybella])).toHaveProperty(
        ['codeIds', 0],
        'SingleSafetyAndPrescribingInfo'
      );

      expect(getCodeIds([ShortBrandName.Latisse])).toHaveProperty(
        'state',
        'singleSafetyAndPrescribingInfo'
      );
      expect(getCodeIds([ShortBrandName.Latisse])).toHaveProperty(
        ['codeIds', 0],
        'SingleSafetyAndPrescribingInfo'
      );
    });

    it('should return botoxOnlyImportantSafetyInformationOnly', function () {
      expect(
        getCodeIds([ShortBrandName.Botox, 'NotLatisseOrKybella'])
      ).toHaveProperty('state', 'botoxOnlyImportantSafetyInformationOnly');

      expect(
        getCodeIds([ShortBrandName.Botox, 'NotLatisseOrKybella'])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');
      expect(
        getCodeIds([ShortBrandName.Botox, 'NotLatisseOrKybella'])
      ).toHaveProperty(['codeIds', 1], 'ImportantSafetyInformationOnly');
    });

    it('should return botoxSafetyAndPrescribingInfo', function () {
      expect(
        getCodeIds([ShortBrandName.Botox, ShortBrandName.Kybella])
      ).toHaveProperty('state', 'botoxSafetyAndPrescribingInfo');

      expect(
        getCodeIds([ShortBrandName.Botox, ShortBrandName.Kybella])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

      expect(
        getCodeIds([ShortBrandName.Botox, ShortBrandName.Kybella])
      ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');

      expect(
        getCodeIds([ShortBrandName.Botox, ShortBrandName.Latisse])
      ).toHaveProperty('state', 'botoxSafetyAndPrescribingInfo');

      expect(
        getCodeIds([ShortBrandName.Botox, ShortBrandName.Latisse])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

      expect(
        getCodeIds([ShortBrandName.Botox, ShortBrandName.Latisse])
      ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');
    });
  });

  it('should return natrelle only', function () {
    const expected = getCodeIds([ShortBrandName.Natrelle]);

    expect(expected).toHaveProperty('state', 'natrelleOnly');
    expect(expected).toHaveProperty(['codeIds', 0], 'NatrelleOnly');
  });

  it('should return natrelleOnlyImportantSafetyInformationOnly', function () {
    expect(
      getCodeIds([ShortBrandName.Natrelle, 'NotLatisseOrKybella'])
    ).toHaveProperty('state', 'natrelleOnlyImportantSafetyInformationOnly');

    expect(
      getCodeIds([ShortBrandName.Natrelle, 'NotLatisseOrKybella'])
    ).toHaveProperty(['codeIds', 0], 'NatrelleOnly');
    expect(
      getCodeIds([ShortBrandName.Natrelle, 'NotLatisseOrKybella'])
    ).toHaveProperty(['codeIds', 1], 'ImportantSafetyInformationOnly');
  });

  it('should return natrelleSafetyAndPrescribingInfo', function () {
    expect(
      getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Kybella])
    ).toHaveProperty('state', 'natrelleSafetyAndPrescribingInfo');

    expect(
      getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Kybella])
    ).toHaveProperty(['codeIds', 0], 'NatrelleOnly');

    expect(
      getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Kybella])
    ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');

    expect(
      getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Latisse])
    ).toHaveProperty('state', 'natrelleSafetyAndPrescribingInfo');

    expect(
      getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Latisse])
    ).toHaveProperty(['codeIds', 0], 'NatrelleOnly');

    expect(
      getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Latisse])
    ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');
  });

  it('should return botox and natrelle', function () {
    const expected = getCodeIds([
      ShortBrandName.Botox,
      ShortBrandName.Natrelle,
    ]);

    expect(expected).toHaveProperty('state', 'botoxAndNatrelle');
    expect(expected).toHaveProperty(['codeIds', 0], 'BotoxOnly');
    expect(expected).toHaveProperty(['codeIds', 1], 'NatrelleOnly');
  });

  it('should return botoxAndNatrelleImportantSafetyInformationOnly', function () {
    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        'NotLatisseOrKybella',
      ])
    ).toHaveProperty('state', 'botoxAndNatrelleImportantSafetyInformationOnly');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        'NotLatisseOrKybella',
      ])
    ).toHaveProperty(['codeIds', 0], 'BotoxOnly');
    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        'NotLatisseOrKybella',
      ])
    ).toHaveProperty(['codeIds', 1], 'NatrelleOnly');
    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        'NotLatisseOrKybella',
      ])
    ).toHaveProperty(['codeIds', 2], 'ImportantSafetyInformationOnly');
  });

  it('should return botoxAndNatrelleSafetyAndPrescribingInfo', function () {
    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Kybella,
      ])
    ).toHaveProperty('state', 'botoxAndNatrelleSafetyAndPrescribingInfo');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Kybella,
      ])
    ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Kybella,
      ])
    ).toHaveProperty(['codeIds', 1], 'NatrelleOnly');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Kybella,
      ])
    ).toHaveProperty(['codeIds', 2], 'SafetyAndPrescribingInfo');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Latisse,
      ])
    ).toHaveProperty('state', 'botoxAndNatrelleSafetyAndPrescribingInfo');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Latisse,
      ])
    ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Latisse,
      ])
    ).toHaveProperty(['codeIds', 1], 'NatrelleOnly');

    expect(
      getCodeIds([
        ShortBrandName.Botox,
        ShortBrandName.Natrelle,
        ShortBrandName.Latisse,
      ])
    ).toHaveProperty(['codeIds', 2], 'SafetyAndPrescribingInfo');
  });

  describe('filterBrandsByShortName', function () {
    it('should filter out unneeded brands', () => {
      const shortNames = ['test1', 'test2'];
      const brands = [{ shortBrandName: 'test1' }];
      const expected = filterBrandsByShortName(shortNames, brands);
      expect(expected).toHaveLength(1);
    });
  });

  describe('filterFullBrandNamesByName', () => {
    it('should filter out unneeded full brand names', () => {
      const brandFullNames = [
        { fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)' },
        { fullBrandName: 'Kybella® (deoxycholic acid)' },
        { fullBrandName: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%' },
      ];

      const expected = filterFullBrandNamesByName(
        [ShortBrandName.Botox],
        brandFullNames
      );

      expect(expected).toHaveLength(1);
      expect(expected[0]).toBe('BOTOX® Cosmetic (onabotulinumtoxinA)');
    });
  });

  describe('useContentfulBuilder', () => {
    it('should call Contentful ISI', async () => {
      (useQuery as jest.Mock).mockReturnValue({
        loading: false,
        error: undefined,
        data: fullDataMock,
      });
      const {
        result: {
          current: { data },
        },
      } = renderHook(() => useContentfulBuilder());

      expect(
        data.importantSafetyInformation?.longBrandNamesCollection?.items[0]
          ?.shortBrandName
      ).toEqual('BOTOX®');
      expect(
        data.importantSafetyInformation?.shortBrandNameCollection?.items[0]
          ?.shortBrandName
      ).toEqual('Natrelle®');
      expect(
        data.importantSafetyInformation?.templatesCollection?.items[0]?.codeId
      ).toEqual('BotoxOnly');
    });
  });
});

describe('contentful isi builder updates: using Contentful Brand codeIds', () => {
  describe(getCodeIds, function () {
    it('should return botox only', function () {
      const expected = getCodeIds([CONTENTFUL_BRAND_CODEIDS.botox]);

      expect(expected).toHaveProperty('state', 'botoxOnly');
      expect(expected).toHaveProperty(['codeIds', 0], 'BotoxOnly');
    });

    it('should return importantSafetyInformationOnly', function () {
      const expected = getCodeIds(['NotBotoxOrKybella']);
      expect(expected).toHaveProperty(
        'state',
        'importantSafetyInformationOnly'
      );
      expect(expected).toHaveProperty(
        ['codeIds', 0],
        'ImportantSafetyInformationOnly'
      );
    });

    it('should return singleSafetyAndPrescribingInfo', function () {
      expect(getCodeIds([CONTENTFUL_BRAND_CODEIDS.kybella])).toHaveProperty(
        'state',
        'singleSafetyAndPrescribingInfo'
      );
      expect(getCodeIds([CONTENTFUL_BRAND_CODEIDS.kybella])).toHaveProperty(
        ['codeIds', 0],
        'SingleSafetyAndPrescribingInfo'
      );

      expect(getCodeIds([CONTENTFUL_BRAND_CODEIDS.latisse])).toHaveProperty(
        'state',
        'singleSafetyAndPrescribingInfo'
      );
      expect(getCodeIds([CONTENTFUL_BRAND_CODEIDS.latisse])).toHaveProperty(
        ['codeIds', 0],
        'SingleSafetyAndPrescribingInfo'
      );
    });

    it('should return botoxOnlyImportantSafetyInformationOnly', function () {
      expect(
        getCodeIds([CONTENTFUL_BRAND_CODEIDS.botox, 'NotLatisseOrKybella'])
      ).toHaveProperty('state', 'botoxOnlyImportantSafetyInformationOnly');

      expect(
        getCodeIds([CONTENTFUL_BRAND_CODEIDS.botox, 'NotLatisseOrKybella'])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');
      expect(
        getCodeIds([CONTENTFUL_BRAND_CODEIDS.botox, 'NotLatisseOrKybella'])
      ).toHaveProperty(['codeIds', 1], 'ImportantSafetyInformationOnly');
    });

    it('should return botoxSafetyAndPrescribingInfo', function () {
      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty('state', 'botoxSafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty('state', 'botoxSafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');
    });

    it('should return natrelle only', function () {
      const expected = getCodeIds([CONTENTFUL_BRAND_CODEIDS.natrelle]);

      expect(expected).toHaveProperty('state', 'natrelleOnly');
      expect(expected).toHaveProperty(['codeIds', 0], 'NatrelleOnly');
    });

    it('should return natrelleOnlyImportantSafetyInformationOnly', function () {
      expect(
        getCodeIds([CONTENTFUL_BRAND_CODEIDS.natrelle, 'NotLatisseOrKybella'])
      ).toHaveProperty('state', 'natrelleOnlyImportantSafetyInformationOnly');

      expect(
        getCodeIds([CONTENTFUL_BRAND_CODEIDS.natrelle, 'NotLatisseOrKybella'])
      ).toHaveProperty(['codeIds', 0], 'NatrelleOnly');
      expect(
        getCodeIds([CONTENTFUL_BRAND_CODEIDS.natrelle, 'NotLatisseOrKybella'])
      ).toHaveProperty(['codeIds', 1], 'ImportantSafetyInformationOnly');
    });

    it('should return natrelleSafetyAndPrescribingInfo', function () {
      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty('state', 'natrelleSafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 0], 'NatrelleOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty('state', 'natrelleSafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty(['codeIds', 0], 'NatrelleOnly');

      expect(
        getCodeIds([ShortBrandName.Natrelle, ShortBrandName.Latisse])
      ).toHaveProperty(['codeIds', 1], 'SafetyAndPrescribingInfo');
    });

    it('should return botox and natrelle', function () {
      const expected = getCodeIds([
        CONTENTFUL_BRAND_CODEIDS.botox,
        CONTENTFUL_BRAND_CODEIDS.natrelle,
      ]);

      expect(expected).toHaveProperty('state', 'botoxAndNatrelle');
      expect(expected).toHaveProperty(['codeIds', 0], 'BotoxOnly');
      expect(expected).toHaveProperty(['codeIds', 1], 'NatrelleOnly');
    });

    it('should return botoxAndNatrelleImportantSafetyInformationOnly', function () {
      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          'NotLatisseOrKybella',
        ])
      ).toHaveProperty(
        'state',
        'botoxAndNatrelleImportantSafetyInformationOnly'
      );

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          'NotLatisseOrKybella',
        ])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');
      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          'NotLatisseOrKybella',
        ])
      ).toHaveProperty(['codeIds', 1], 'NatrelleOnly');
      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          'NotLatisseOrKybella',
        ])
      ).toHaveProperty(['codeIds', 2], 'ImportantSafetyInformationOnly');
    });

    it('should return botoxAndNatrelleSafetyAndPrescribingInfo', function () {
      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty('state', 'botoxAndNatrelleSafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 1], 'NatrelleOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.kybella,
        ])
      ).toHaveProperty(['codeIds', 2], 'SafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty('state', 'botoxAndNatrelleSafetyAndPrescribingInfo');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty(['codeIds', 0], 'BotoxOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty(['codeIds', 1], 'NatrelleOnly');

      expect(
        getCodeIds([
          CONTENTFUL_BRAND_CODEIDS.botox,
          CONTENTFUL_BRAND_CODEIDS.natrelle,
          CONTENTFUL_BRAND_CODEIDS.latisse,
        ])
      ).toHaveProperty(['codeIds', 2], 'SafetyAndPrescribingInfo');
    });
  });
});
