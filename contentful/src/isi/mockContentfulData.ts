/**
 * @deprecated use mockImportantSafetyInformation which has TS type associated
 * @see @allergan-data-labs/contentful-graphql/src/mockData/mockImportantSafetyInformation.tsx
 */
const mockContentfulData = {
  templatesCollection: {
    items: [
      {
        internalName: 'Botox Only',
        codeId: 'BotoxOnly',
        isiHeaderTemplate: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'Use(s), Important Safety Info, and Prescribing Info',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
          __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
        },
        isiLinkTemplate: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'See BOTOX® Cosmetic (onabotulinumtoxinA) Uses, ',
                    nodeType: 'text',
                  },
                  {
                    data: {
                      target: {
                        sys: {
                          id: '3gkVeZTTwYKVFlQKRkz0Ab',
                          type: 'Link',
                          linkType: 'Entry',
                        },
                      },
                    },
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Important Safety Info',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'entry-hyperlink',
                  },
                  {
                    data: {},
                    marks: [],
                    value: ', and ',
                    nodeType: 'text',
                  },
                  {
                    data: {
                      target: {
                        sys: {
                          id: '3Y8ZMX40uzBQIotQWQvjZ0',
                          type: 'Link',
                          linkType: 'Entry',
                        },
                      },
                    },
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Prescribing Info',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'entry-hyperlink',
                  },
                  {
                    data: {},
                    marks: [],
                    value:
                      ' including Boxed Warning. The effects of BOTOX® Cosmetic may spread hours to weeks after injection causing serious symptoms.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          links: {
            entries: {
              hyperlink: [
                {
                  sys: {
                    id: '3Y8ZMX40uzBQIotQWQvjZ0',
                    __typename: 'Sys',
                  },
                  url: 'https://media.allergan.com/actavis/actavis/media/allergan-pdf-documents/product-prescribing/20190626-BOTOX-Cosmetic-Insert-72715US10-Med-Guide-v2-0MG1145.pdf',
                  __typename: 'Link',
                },
                {
                  sys: {
                    id: '3gkVeZTTwYKVFlQKRkz0Ab',
                    __typename: 'Sys',
                  },
                  url: 'https://media.allergan.com/actavis/actavis/media/allergan-pdf-documents/product-prescribing/20190620_BTX-and-BTX-C-Med-Guide-v2-0MG1145.pdf',
                  __typename: 'Link',
                },
              ],
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
            },
            __typename:
              'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
          },
          __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
        },
        __typename: 'ImportantSafetyInformationTemplate',
      },
      {
        internalName: 'Safety And Prescribing Information',
        codeId: 'SafetyAndPrescribingInfo',
        isiHeaderTemplate: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'Use(s), Important Safety Info, and Prescribing Info',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
          __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
        },
        isiLinkTemplate: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      'See Use(s), Important Safety Info, and applicable Prescribing Info for {{LONG_BRAND_NAMES}} {{SHORT_BRAND_NAMES}}.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          links: {
            entries: {
              hyperlink: [],
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
            },
            __typename:
              'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
          },
          __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
        },
        __typename: 'ImportantSafetyInformationTemplate',
      },
      {
        internalName: 'Important Safety Information Only',
        codeId: 'ImportantSafetyInformationOnly',
        isiHeaderTemplate: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Use(s) and Important Safety Info',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
          __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
        },
        isiLinkTemplate: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      'See Use(s) and Important Safety Info for {{SHORT_BRAND_NAMES}}.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          links: {
            entries: {
              hyperlink: [],
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
            },
            __typename:
              'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
          },
          __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
        },
        __typename: 'ImportantSafetyInformationTemplate',
      },
      {
        internalName: 'Single Safety And Prescribing Information',
        codeId: 'SingleSafetyAndPrescribingInfo',
        isiHeaderTemplate: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      'Use(s), Important Safety Info, and Prescribing Info',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
        },
        isiLinkTemplate: {
          json: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      'See Use(s), Important Safety Info, and Prescribing Info for {{LONG_BRAND_NAMES}}.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          links: {
            entries: {
              hyperlink: [],
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
            },
            __typename:
              'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
          },
          __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
        },
        __typename: 'ImportantSafetyInformationTemplate',
      },
    ],
    __typename: 'ImportantSafetyInformationTemplatesCollection',
  },
  longBrandNamesCollection: {
    items: [
      {
        fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'Kybella® (deoxycholic acid)',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%',
        __typename: 'Brand',
      },
    ],
    __typename: 'ImportantSafetyInformationLongBrandNamesCollection',
  },
  shortBrandNameCollection: {
    items: [
      {
        fullBrandName: 'JUVÉDERM® Collection of Fillers',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'CoolTone®',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'CoolSculpting® and CoolSculpting® Elite',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'SkinMedica®',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'DiamondGlow®',
        __typename: 'Brand',
      },
      {
        fullBrandName: 'SKINVIVE by JUVÉDERM®',
        __typename: 'Brand',
      },
    ],
    __typename: 'ImportantSafetyInformationShortBrandNameCollection',
  },
  __typename: 'ImportantSafetyInformation',
};

const fullDataMock = {
  importantSafetyInformation: {
    templatesCollection: {
      items: [
        {
          internalName: 'Botox Only',
          codeId: 'BotoxOnly',
        },
        {
          internalName: 'Natrelle Only',
          codeId: 'NatrelleOnly',
        },
        {
          internalName: 'Safety And Prescribing Information',
          codeId: 'SafetyAndPrescribingInfo',
        },
        {
          internalName: 'Important Safety Information Only',
          codeId: 'ImportantSafetyInformationOnly',
        },
        {
          internalName: 'Single Safety And Prescribing Information',
          codeId: 'SingleSafetyAndPrescribingInfo',
        },
      ],
    },
    longBrandNamesCollection: {
      items: [
        {
          fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)',
          shortBrandName: 'BOTOX®',
        },
        {
          fullBrandName: 'Kybella® (deoxycholic acid) injection 10 mg/mL',
          shortBrandName: 'KYBELLA®',
        },
        {
          fullBrandName: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%',
          shortBrandName: 'LATISSE®',
        },
      ],
    },
    shortBrandNameCollection: {
      items: [
        {
          fullBrandName: 'Natrelle® Breast Implants',
          shortBrandName: 'Natrelle®',
        },
        {
          fullBrandName: 'JUVÉDERM® Collection of Fillers',
          shortBrandName: 'JUVÉDERM®',
        },
        {
          fullBrandName: 'CoolTone®',
          shortBrandName: 'CoolTone®',
        },
        {
          fullBrandName: 'CoolSculpting® and CoolSculpting® Elite',
          shortBrandName: 'CoolSculpting® and CoolSculpting® Elite',
        },
        {
          fullBrandName: 'SkinMedica®',
          shortBrandName: 'SkinMedica®',
        },
        {
          fullBrandName: 'DiamondGlow®',
          shortBrandName: 'DiamondGlow®',
        },
        {
          fullBrandName: 'SKINVIVE by JUVÉDERM®',
          shortBrandName: 'SKINVIVE',
        },
      ],
    },
  },
};

const brandQueryResult = {
  brandCollection: {
    items: [
      {
        sys: {
          id: '788pGrmmksWM0fu91vY6Ef',
        },
        fullBrandName: 'SkinMedica®',
        shortBrandName: 'SkinMedica®',
        consumerImportantSafetyInformation: {
          json: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'CAUTION: Do not use Retinol Complex if you are pregnant, lactating, or planning to become pregnant. Mild redness, peeling, and irritation are expected when using this product. Use a sunscreen and limit sun exposure while using this product and for a week following discontinuation.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'Sunburn alert: AHA/BHA Exfoliating Cleanser, AHA/BHA Cream, and Rejuvenative Toner contain an alpha-hydroxy acid (AHA) that may increase your skin’s sensitivity to the sun and particularly the possibility of sunburn. Use a sunscreen, wear protective clothing, and limit sun exposure while using these products and for a week following discontinuation.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'Important! Sunscreen is required to optimize and maintain the results of using Lytera® 2.0 Pigment Correcting Serum.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'Most SkinMedica® products are intended to meet the FDA’s definition of a cosmetic product, an article applied to the human body to cleanse, beautify, promote attractiveness, and alter appearances. These SkinMedica® products are not intended to be drug products that diagnose, treat, cure, or prevent any disease or condition. These products have not been approved by the FDA and the statements have not been evaluated by the FDA.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'SkinMedica® Total Defense + Repair Broad Spectrum Sunscreens (SPF 34, SPF 34 Tinted, and SPF 50+) and Essential Defense Broad Spectrum Sunscreens (Everyday Clear SPF 47, Mineral Shield Tinted SPF 32, and Mineral Shield SPF 35) are over-the-counter drug products which are formulated and marketed pursuant to FDA’s governing regulations set forth at 21 CFR Part 352.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'The PA rating system is used in Japan to classify UVA protection and is not an FDA requirement on sunscreens sold in the U.S.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'SkinMedica® Purifying Foaming Wash is an over-the-counter drug product which is formulated and marketed pursuant to the FDA’s governing regulations set forth at 21 CFR Part 333 Subpart D.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      'Not all products are available in Canada. Subject to change at any time without prior notice.',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
          links: {
            entries: {
              hyperlink: [],
            },
          },
        },
      },
    ],
  },
};

export { mockContentfulData, fullDataMock, brandQueryResult };
