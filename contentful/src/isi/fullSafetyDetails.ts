import React, { useReducer, useRef, useState } from 'react';
import ApolloClient, { ApolloError } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { createMachine, assign } from 'xstate';

import {
  ISI_TEMPLATES_QUERY,
  LONG_BRAND_NAMES_QUERY,
  SHORT_BRAND_NAMES_QUERY,
} from '../queries/contentfulISI.query';
import { contentfulClient } from '../contentfulClient';
import {
  ImportantSafetyInformation,
  ImportantSafetyInformationLongBrandNamesCollection,
  ImportantSafetyInformationShortBrandNameCollection,
  ImportantSafetyInformationTemplatesCollection,
  Maybe,
} from '../types';
import {
  CONTENTFUL_BRAND_CODEIDS,
  BrandCodeId,
  CONTENTFUL_ISI_TEMPLATE_CODEIDS,
} from './brandTypes';
import {
  defaultTemplateConfig,
  ISITemplateConfiguration,
} from './useContentfulISITemplates';

interface Context {
  brands: Array<String>;
  codeIds: Array<String | undefined>;
  templateConfig: ISITemplateConfiguration;
}

/**
 * @deprecated
 * Use type BrandCodeId
 */
const brandNames = {
  botox: 'BOTOX®',
  juvederm: 'JUVÉDERM®',
  cool_sculpting: 'CoolSculpting® and CoolSculpting® Elite',
  cool_tone: 'CoolTone®',
  diamond_glow: 'DiamondGlow®',
  kybella: 'KYBELLA®',
  latisse: 'LATISSE®',
  natrelle: 'Natrelle®',
  skin_medica: 'SkinMedica®',
  skinvive_by_juvederm: 'SKINVIVE',
} as const;

const ImportantSafetyInformationMachine = createMachine<Context>(
  {
    id: 'isi-builder',
    initial: 'start',
    context: {
      brands: [],
      codeIds: [],
      templateConfig: {},
    },
    states: {
      start: {
        always: [
          {
            target: 'containsBotoxAndNatrelle',
            cond: 'containsBotoxAndNatrelle',
          },
          { target: 'containsBotox', cond: 'containsBotox' },
          { target: 'containsNatrelle', cond: 'containsNatrelle' },
          {
            target: 'singleSafetyAndPrescribingInfo',
            cond: 'hasKybellaOrLatisse',
            actions: 'setSingleSafetyInformationOnly',
          },
          {
            target: 'importantSafetyInformationOnly',
            actions: 'setImportantSafetyInformationOnly',
          },
        ],
      },
      containsBotoxAndNatrelle: {
        always: [
          {
            target: 'botoxAndNatrelle',
            cond: 'hasOnlyTwoConditions',
            actions: ['setBotoxOnly', 'setNatrelleOnly'],
          },
          {
            target: 'botoxAndNatrelleSafetyAndPrescribingInfo',
            cond: 'hasKybellaOrLatisse',
            actions: [
              'setBotoxOnly',
              'setNatrelleOnly',
              'setSafetyAndPrescribingInfo',
            ],
          },
          {
            target: 'botoxAndNatrelleImportantSafetyInformationOnly',
            actions: [
              'setBotoxOnly',
              'setNatrelleOnly',
              'setImportantSafetyInformationOnly',
            ],
          },
        ],
      },
      containsBotox: {
        always: [
          {
            target: 'botoxOnly',
            cond: 'hasOnlyOneCondition',
            actions: 'setBotoxOnly',
          },
          {
            target: 'botoxSafetyAndPrescribingInfo',
            cond: 'hasKybellaOrLatisse',
            actions: ['setBotoxOnly', 'setSafetyAndPrescribingInfo'],
          },
          {
            target: 'botoxOnlyImportantSafetyInformationOnly',
            actions: ['setBotoxOnly', 'setImportantSafetyInformationOnly'],
          },
        ],
      },
      containsNatrelle: {
        always: [
          {
            target: 'natrelleOnly',
            cond: 'hasOnlyOneCondition',
            actions: 'setNatrelleOnly',
          },
          {
            target: 'natrelleSafetyAndPrescribingInfo',
            cond: 'hasKybellaOrLatisse',
            actions: ['setNatrelleOnly', 'setSafetyAndPrescribingInfo'],
          },
          {
            target: 'natrelleOnlyImportantSafetyInformationOnly',
            actions: ['setNatrelleOnly', 'setImportantSafetyInformationOnly'],
          },
        ],
      },
      singleSafetyAndPrescribingInfo: {},
      importantSafetyInformationOnly: {},
      doesNotContainBotox: {},
      doesNotContainNatrelle: {},
      hasOnlyOneCondition: {},
      hasOnlyTwoConditions: {},
      botoxOnly: {},
      botoxSafetyAndPrescribingInfo: {},
      botoxOnlyImportantSafetyInformationOnly: {},
      natrelleOnly: {},
      natrelleSafetyAndPrescribingInfo: {},
      natrelleOnlyImportantSafetyInformationOnly: {},
      botoxAndNatrelle: {},
      botoxAndNatrelleSafetyAndPrescribingInfo: {},
      botoxAndNatrelleImportantSafetyInformationOnly: {},
    },
  },
  {
    actions: {
      setBotoxOnly: assign({
        codeIds: (context) => {
          return [...context.codeIds, context.templateConfig.botoxOnlyId];
        },
      }),
      setNatrelleOnly: assign({
        codeIds: (context) => {
          return [
            ...context.codeIds,
            CONTENTFUL_ISI_TEMPLATE_CODEIDS.natrelleOnly,
          ];
        },
      }),
      setImportantSafetyInformationOnly: assign({
        codeIds: (context) => [
          ...context.codeIds,
          CONTENTFUL_ISI_TEMPLATE_CODEIDS.importantSafetyInformationOnly,
        ],
      }),
      setSingleSafetyInformationOnly: assign({
        codeIds: (context) => [
          ...context.codeIds,
          CONTENTFUL_ISI_TEMPLATE_CODEIDS.singleSafetyAndPrescribingInfo,
        ],
      }),
      setSafetyAndPrescribingInfo: assign({
        codeIds: (context) => {
          return [
            ...context.codeIds,
            CONTENTFUL_ISI_TEMPLATE_CODEIDS.safetyAndPrescribingInfo,
          ];
        },
      }),
    },
    guards: {
      doesNotContainBotox: (context) =>
        !context.brands.some(
          (brand) =>
            brand === brandNames.botox ||
            brand === CONTENTFUL_BRAND_CODEIDS.botox
        ),
      doesNotContainNatrelle: (context) =>
        !context.brands.some(
          (brand) =>
            brand === brandNames.natrelle ||
            brand === CONTENTFUL_BRAND_CODEIDS.natrelle
        ),
      containsBotox: (context) =>
        context.brands.some(
          (brand) =>
            brand === brandNames.botox ||
            brand === CONTENTFUL_BRAND_CODEIDS.botox
        ),
      containsNatrelle: (context) =>
        context.brands.some(
          (brand) =>
            brand === brandNames.natrelle ||
            brand === CONTENTFUL_BRAND_CODEIDS.natrelle
        ),
      containsBotoxAndNatrelle: (context) =>
        (context.brands.includes(brandNames.botox) &&
          context.brands.includes(brandNames.natrelle)) ||
        (context.brands.includes(CONTENTFUL_BRAND_CODEIDS.botox) &&
          context.brands.includes(CONTENTFUL_BRAND_CODEIDS.natrelle)),
      hasOnlyOneCondition: (context) => context.brands.length === 1,
      hasOnlyTwoConditions: (context) => context.brands.length === 2,
      hasKybellaOrLatisse: (context) => {
        return context.brands.some(
          (brand) =>
            brand === brandNames.kybella ||
            brand === brandNames.latisse ||
            brand === CONTENTFUL_BRAND_CODEIDS.kybella ||
            brand === CONTENTFUL_BRAND_CODEIDS.latisse
        );
      },
    },
  }
);

/**
 * Gets Contentful ISI Template codeIds for given brands
 * @param brands list for which Contentful ISI Template codeIds to return. BrandCodeId is preferred
 * @param templateConfig defines which templates we will use, there is default object
 * @returns Contentful ISI Template codeIds
 */
const getCodeIds = (
  brands: Array<string | BrandCodeId>,
  templateConfig: ISITemplateConfiguration = defaultTemplateConfig
): { codeIds: string[]; state: string } => {
  const machine = ImportantSafetyInformationMachine.withContext({
    brands,
    codeIds: [],
    templateConfig,
  });

  // TODO fix this types
  return {
    state: machine.initialState.value as string,
    codeIds: machine.initialState.context.codeIds as string[],
  };
};

export interface Template {
  codeId: String;
}

export type Templates = Array<Template>;

const filterBrandsByShortName = (
  shortNames: Array<string | undefined>,
  brands: Array<{ shortBrandName: string }>
) => {
  return brands.filter((brand) => shortNames.includes(brand.shortBrandName));
};

const filterFullBrandNamesByName = (
  names: Array<string | undefined>,
  brands: Array<{ fullBrandName: string }>
) => {
  return brands
    .filter(
      (brand) =>
        // @ts-ignore
        !!names.find((name) => {
          if (
            name &&
            brand.fullBrandName.toLowerCase().includes(name.toLowerCase())
          ) {
            return brand.fullBrandName;
          }
          return undefined;
        })
    )
    .map((name: { fullBrandName: string }) => {
      return name.fullBrandName;
    });
};

export interface ContentfulISIDataState {
  templatesCollection?: Maybe<ImportantSafetyInformationTemplatesCollection>;
  longBrandNamesCollection?: Maybe<ImportantSafetyInformationLongBrandNamesCollection>;
  shortBrandNameCollection?: Maybe<ImportantSafetyInformationShortBrandNameCollection>;
}

const reducer = (
  prevState: ContentfulISIDataState,
  value: Partial<ContentfulISIDataState>
): ContentfulISIDataState => ({
  ...prevState,
  ...value,
});

/**
 * Hook to fetch all Contentful ISI data for all brands (Botox, Juvederm, etc)
 * Uses Contentful content types of Brand, ISI, and ISI Templates
 * @param shouldQueryContentful escape hatch to bypass data fetch
 * @param client optional custom Apollo client
 */
const useContentfulBuilder = (
  shouldQueryContentful: boolean = true,
  client?: ApolloClient<any>
): {
  data: {
    importantSafetyInformation: Maybe<ImportantSafetyInformation>;
  };
  loading?: boolean;
  error?: ApolloError;
} => {
  const [contentfulISIDataState, dispatch] = useReducer(reducer, {
    templatesCollection: undefined,
    longBrandNamesCollection: undefined,
    shortBrandNameCollection: undefined,
  });
  const [contentfulISILoading, setContentfulISILoading] = useState<boolean>();
  const [contentfulISIError, setContentfulISIError] = useState<ApolloError>();
  const errorType = useRef('undetermined');

  const {
    data: isiTemplateData,
    loading: isiTemplateLoading,
    error: isiTemplateError,
  } = useQuery(ISI_TEMPLATES_QUERY, {
    client: client ? client : contentfulClient,
    skip: !shouldQueryContentful,
  });

  const {
    data: longBrandNameData,
    loading: longBrandNameLoading,
    error: longBrandNameError,
  } = useQuery(LONG_BRAND_NAMES_QUERY, {
    client: client ? client : contentfulClient,
    skip: !shouldQueryContentful,
  });

  const {
    data: shortBrandNameData,
    loading: shortBrandNameLoading,
    error: shortBrandNameError,
  } = useQuery(SHORT_BRAND_NAMES_QUERY, {
    client: client ? client : contentfulClient,
    skip: !shouldQueryContentful,
  });

  React.useEffect(() => {
    if (isiTemplateLoading || longBrandNameLoading || shortBrandNameLoading) {
      setContentfulISILoading(true);
    } else {
      setContentfulISILoading(false);
    }

    if (isiTemplateError) {
      setContentfulISIError(isiTemplateError);
      errorType.current = 'isiTemplate';
    } else if (longBrandNameError) {
      setContentfulISIError(longBrandNameError);
      errorType.current = 'longBrandName';
    } else if (shortBrandNameError) {
      setContentfulISIError(shortBrandNameError);
      errorType.current = 'shortBrandName';
    }

    if (isiTemplateData) {
      dispatch({
        templatesCollection:
          isiTemplateData.importantSafetyInformation.templatesCollection,
      });
    }

    if (longBrandNameData) {
      dispatch({
        longBrandNamesCollection:
          longBrandNameData.importantSafetyInformation.longBrandNamesCollection,
      });
    }

    if (shortBrandNameData) {
      dispatch({
        shortBrandNameCollection:
          shortBrandNameData.importantSafetyInformation
            .shortBrandNameCollection,
      });
    }
  }, [
    shortBrandNameData,
    longBrandNameData,
    isiTemplateData,
    shortBrandNameLoading,
    longBrandNameLoading,
    isiTemplateLoading,
    shortBrandNameError,
    longBrandNameError,
    isiTemplateError,
    shouldQueryContentful,
  ]);

  if (contentfulISIError) {
    console.error(
      `useContentfulBuilder__${errorType.current}--error`,
      contentfulISIError
    );
  }
  return {
    data: {
      importantSafetyInformation:
        contentfulISIDataState as Maybe<ImportantSafetyInformation>,
    },
    loading: contentfulISILoading,
    error: contentfulISIError,
  };
};

export {
  useContentfulBuilder,
  getCodeIds,
  filterBrandsByShortName,
  filterFullBrandNamesByName,
};
