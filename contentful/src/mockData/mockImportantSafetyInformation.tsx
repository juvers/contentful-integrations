import { Entry, ImportantSafetyInformation } from '../types';

/**
 * All values, including nested values, within type are optional
 */
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/**
 * This mock is an example of what useContentfulBuilder returns.
 */
export const mockImportantSafetyInformation: DeepPartial<ImportantSafetyInformation> =
  {
    sys: {
      id: 'someId',
      spaceId: 'space',
      environmentId: 'env',
    },
    contentfulMetadata: { tags: [] },
    templatesCollection: {
      items: [
        {
          contentfulMetadata: { tags: [] },
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          internalName: 'Botox Only',
          codeId: 'BotoxOnly',
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
            links: {
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
              },
              assets: {
                hyperlink: [],
                block: [],
              },
              resources: { block: [], inline: [], hyperlink: [] },
            },
            __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
          },
          isiLinkTemplate: {
            json: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'See BOTOX® Cosmetic (onabotulinumtoxinA) ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Uses, Important Safety Info',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '6vF1QGeqKp11kSyoogRO9U',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: ', and ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Prescribing Info',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '3Y8ZMX40uzBQIotQWQvjZ0',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' including Boxed Warning. The effects of BOTOX® Cosmetic may spread hours to weeks after injection causing serious symptoms.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                hyperlink: [
                  {
                    sys: {
                      id: '6vF1QGeqKp11kSyoogRO9U',
                      __typename: 'Sys',
                      spaceId: 'space',
                      environmentId: 'environment',
                    },
                    url: '/treatment-guide/botox?isi=open#isi',
                    contentfulMetadata: { tags: [] },
                    __typename: 'Link',
                  } as unknown as Entry, // actual data is type Link, but MockImportantaSafetyInformation type only has isiLinktemplate.links.entries.hyperlink as Entry[]
                  {
                    sys: {
                      id: '3Y8ZMX40uzBQIotQWQvjZ0',
                      __typename: 'Sys',

                      spaceId: 'space',
                      environmentId: 'environment',
                    },
                    contentfulMetadata: { tags: [] },
                    url: 'https://media.allergan.com/actavis/actavis/media/allergan-pdf-documents/product-prescribing/20190620_BTX-and-BTX-C-Med-Guide-v2-0MG1145.pdf',
                    __typename: 'Link',
                  } as unknown as Entry, // actual data is type Link, but MockImportantaSafetyInformation type only has isiLinktemplate.links.entries.hyperlink as Entry[]
                ],
                inline: [],
                block: [],
                __typename:
                  'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
              },
              assets: {
                hyperlink: [],
                block: [],
              },
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
            },
            __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
          },
          __typename: 'ImportantSafetyInformationTemplate',
        },
        {
          contentfulMetadata: { tags: [] },
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
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
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
              },
              assets: {
                hyperlink: [],
                block: [],
              },
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
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                hyperlink: [],
                inline: [],
                block: [],
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
          contentfulMetadata: { tags: [] },
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
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
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
              },
              assets: {
                hyperlink: [],
                block: [],
              },
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
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                hyperlink: [],
                inline: [],
                block: [],
                __typename:
                  'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
              },
              assets: {
                block: [],
                hyperlink: [],
              },
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
            },
            __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
          },
          __typename: 'ImportantSafetyInformationTemplate',
        },
        {
          contentfulMetadata: { tags: [] },
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
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
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
              },
              assets: {
                hyperlink: [],
                block: [],
              },
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
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
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
          contentfulMetadata: { tags: [] },
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          internalName: 'Natrelle Only',
          codeId: 'NatrelleOnly',
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
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
              },
              assets: {
                hyperlink: [],
                block: [],
              },
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
                      nodeType: 'paragraph',
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'For augmentation only. Excludes saline implants. See Natrelle® Breast Implants ',
                          nodeType: 'text',
                        },
                        {
                          nodeType: 'entry-hyperlink',
                          content: [
                            {
                              nodeType: 'text',
                              value: 'Uses and Important Safety Info',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {
                            target: {
                              sys: {
                                id: '21sVrULcr5Sn8cy8l5244V',
                                type: 'Link',
                                linkType: 'Entry',
                              },
                            },
                          },
                        },
                        {
                          nodeType: 'text',
                          value: ' including Boxed Warning',
                          marks: [],
                          data: {},
                        },
                      ],
                    },
                  ],
                },
              ],
              nodeType: 'document',
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                hyperlink: [
                  {
                    sys: {
                      id: '21sVrULcr5Sn8cy8l5244V',
                      __typename: 'Sys',
                      spaceId: 'space',
                      environmentId: 'environment',
                    },
                    url: '/treatment-guide/natrelle?isi=open#isi',
                    contentfulMetadata: { tags: [] },
                    __typename: 'Link',
                  } as unknown as Entry, // actual data is type Link, but MockImportantaSafetyInformation type only has isiLinktemplate.links.entries.hyperlink as Entry[]
                ],
                inline: [],
                block: [],
                __typename:
                  'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
              },
              assets: {
                hyperlink: [],
                block: [],
              },
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
            },
            __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
          },
          __typename: 'ImportantSafetyInformationTemplate',
        },
        {
          contentfulMetadata: { tags: [] },
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          internalName: 'Botox Only Shorten',
          codeId: 'BotoxOnlyShorten',
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
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                inline: [],
                hyperlink: [],
                block: [],
              },
              assets: {
                hyperlink: [],
                block: [],
              },
            },
            __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
          },
          isiLinkTemplate: {
            json: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: 'See BOTOX® Cosmetic (onabotulinumtoxinA) ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Uses, Important Safety Info',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '6vF1QGeqKp11kSyoogRO9U',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: ', and ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Prescribing Info',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '3Y8ZMX40uzBQIotQWQvjZ0',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: ' including Boxed Warning.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              entries: {
                hyperlink: [
                  {
                    sys: {
                      id: '3Y8ZMX40uzBQIotQWQvjZ0',
                      spaceId: 'space',
                      environmentId: 'environment',
                      __typename: 'Sys',
                    },
                    contentfulMetadata: { tags: [] },
                  },
                  {
                    sys: {
                      id: '6vF1QGeqKp11kSyoogRO9U',
                      __typename: 'Sys',

                      spaceId: 'space',
                      environmentId: 'environment',
                    },
                    contentfulMetadata: { tags: [] },
                  },
                ],
                inline: [],
                block: [],
                __typename:
                  'ImportantSafetyInformationTemplateIsiLinkTemplateEntries',
              },
              assets: {
                hyperlink: [],
                block: [],
              },
              __typename:
                'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
            },
            __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
          },
          __typename: 'ImportantSafetyInformationTemplate',
        },
      ],
      total: 1,
      skip: 1,
      limit: 1,
      __typename: 'ImportantSafetyInformationTemplatesCollection',
    },
    longBrandNamesCollection: {
      items: [
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'botox',
          fullBrandName: 'BOTOX® Cosmetic (onabotulinumtoxinA)',
          shortBrandName: 'BOTOX®',
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
                      value: 'Approved Uses',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nBOTOX® Cosmetic is a prescription medicine that is injected into muscles and used to temporarily improve the look of moderate to severe forehead lines, crow’s feet lines, and frown lines between the eyebrows in adults.',
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
                        'IMPORTANT SAFETY INFORMATION\nBOTOX® Cosmetic may cause serious side effects that can be life threatening. Get medical help right away if you have any of these problems any time (hours to weeks) after injection of BOTOX® Cosmetic:',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'unordered-list',
                  content: [
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Problems swallowing, speaking, or breathing, ',
                              marks: [
                                {
                                  type: 'bold',
                                },
                              ],
                              data: {},
                            },
                            {
                              nodeType: 'text',
                              value:
                                'due to weakening of associated muscles, can be severe and result in loss of life. You are at the highest risk if these problems are pre-existing before injection. Swallowing problems may last for several months.',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value: 'Spread of toxin effects. ',
                              marks: [
                                {
                                  type: 'bold',
                                },
                              ],
                              data: {},
                            },
                            {
                              nodeType: 'text',
                              value:
                                'The effect of botulinum toxin may affect areas away from the injection site and cause serious symptoms including: loss of strength and all-over muscle weakness, double vision, blurred vision and drooping eyelids, hoarseness or change or loss of voice, trouble saying words clearly, loss of bladder control, trouble breathing, and trouble swallowing.',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
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
                        'BOTOX® Cosmetic dosing units are not the same as, or comparable to, any other botulinum toxin product.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'There has not been a confirmed serious case of spread of toxin effect when BOTOX® Cosmetic has been used at the recommended dose to treat frown lines, crow’s feet lines, and/or forehead lines.',
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
                        'BOTOX® Cosmetic may cause loss of strength or general muscle weakness, vision problems, or dizziness within hours to weeks of taking BOTOX® Cosmetic. ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        'If this happens, do not drive a car, operate machinery, or do other dangerous activities.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'Serious and/or immediate allergic reactions have been reported.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' They include: itching, rash, red itchy welts, wheezing, asthma symptoms, or dizziness or feeling faint. Get medical help right away if you are wheezing or have asthma symptoms, or if you become dizzy or faint.',
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
                      value: 'Do not receive BOTOX® Cosmetic if you:',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' are allergic to any of the ingredients in BOTOX® Cosmetic (see Medication Guide for ingredients); had an allergic reaction to any other botulinum toxin product such as ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Myobloc',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '® (rimabotulinumtoxinB), ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Dysport',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '® (abobotulinumtoxinA), or ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Xeomin',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® (incobotulinumtoxinA); have a skin infection at the planned injection site.',
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
                        'Tell your doctor about all your muscle or nerve conditions,',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' such as ALS or Lou Gehrig’s disease, myasthenia gravis, or Lambert-Eaton syndrome, as you may be at increased risk of serious side effects including difficulty swallowing and difficulty breathing from typical doses of BOTOX® Cosmetic.',
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
                        'Tell your doctor about all your medical conditions,',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' including: plans to have surgery; had surgery on your face; have trouble raising your eyebrows; drooping eyelids; any other abnormal facial change; are pregnant or plan to become pregnant (it is not known if BOTOX® Cosmetic can harm your unborn baby); are breast-feeding or plan to (it is not known if BOTOX® Cosmetic passes into breast milk).',
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
                        'Tell your doctor about all the medicines you take,',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' including prescription and over-the-counter medicines, vitamins, and herbal supplements. Using BOTOX® Cosmetic with certain other medicines may cause serious side effects. ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        'Do not start any new medicines until you have told your doctor that you have received BOTOX® Cosmetic in the past.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'Tell your doctor if you have received any other botulinum toxin product in the last 4 months; have received injections of botulinum toxin such as ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Myobloc',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '®, ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Dysport',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '®, or ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Xeomin',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® in the past (tell your doctor exactly which product you received); have recently received an antibiotic by injection; take muscle relaxants; take an allergy or cold medicine; take a sleep medicine; take aspirin-like products or blood thinners.',
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
                      value: 'Other side effects of BOTOX® Cosmetic include:',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' dry mouth; discomfort or pain at the injection site; tiredness; headache; neck pain; and eye problems: double vision, blurred vision, decreased eyesight, drooping eyelids and eyebrows, swelling of your eyelids and dry eyes.',
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
                        'For more information refer to the Medication Guide or talk with your doctor.',
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
                        'To report a side effect, please call Allergan at 1-800-678-1605.',
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
                      value: 'Please see BOTOX® Cosmetic full ',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Product Information',
                          marks: [
                            {
                              type: 'bold',
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '3Y8ZMX40uzBQIotQWQvjZ0',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: ' including Boxed Warning and ',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Medication Guide',
                          marks: [
                            {
                              type: 'bold',
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '3gkVeZTTwYKVFlQKRkz0Ab',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: '.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'kybella',
          fullBrandName: 'Kybella® (deoxycholic acid)',
          shortBrandName: 'KYBELLA®',
          consumerImportantSafetyInformation: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'What is KYBELLA®?',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\nKYBELLA® is a prescription medicine used in adults to improve the appearance and profile of moderate to severe fat below the chin (submental fat), also called “double chin.” It is not known if KYBELLA® is safe and effective for the treatment of fat outside of the submental area or in children under 18 years of age.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'Who should not receive KYBELLA®?',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        '\nDo not receive KYBELLA® if you have an infection in the treatment area.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value:
                        'Before receiving KYBELLA®, tell your healthcare provider about all of your medical conditions, including if you:',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' Have had or plan to have surgery on your face, neck, or chin; have had cosmetic treatments on your face, neck, or chin; have had or have medical conditions in or near the neck area; have had or have trouble swallowing; have bleeding problems; are pregnant or plan to become pregnant (it is not known if KYBELLA® will harm your unborn baby); are breastfeeding or plan to breastfeed (it is not known if KYBELLA® passes into your breast milk).',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value:
                        'Tell your healthcare provider about all the medicines you take,',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' including prescription and over-the-counter medicines, vitamins, and herbal supplements. Especially tell your healthcare provider if you take a medicine that prevents the clotting of your blood (antiplatelet or anticoagulant medicine).',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'What are the possible side effects of KYBELLA®?',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: '\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value:
                        'KYBELLA® can cause serious side effects, including',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Nerve injury in the jaw (which can cause an uneven smile or facial muscle weakness)',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Trouble swallowing',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Injection site problems including: a collection of blood under the skin (hematoma) or bruising, damage to an artery or vein if KYBELLA® is inadvertently injected into it, hair loss, open sores (ulcers), damage and tissue cell-death (necrosis) around the injection site. Call your healthcare provider if you: begin to develop weakness in the muscles of your face, or your smile becomes uneven; have difficulty swallowing, or if any of the symptoms that you already have get worse; develop open sores or drainage from the treatment area',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                  ],
                  nodeType: 'unordered-list',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'The most common side effects of KYBELLA® include',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' swelling, pain, numbness, redness, and areas of hardness in the treatment area.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'These are not all of the possible side effects of KYBELLA®. Call your doctor for medical advice about side effects.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: 'Please see KYBELLA® full ',
                      nodeType: 'text',
                    },
                    {
                      data: {
                        target: {
                          sys: {
                            id: '6LLuQtz9uPgesdl92l80aV',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Prescribing Information',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'entry-hyperlink',
                    },
                    {
                      data: {},
                      marks: [],
                      value: '.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'latisse',
          fullBrandName: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%',
          shortBrandName: 'LATISSE®',
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
                      value: 'Approved Use',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '\n',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'LATISSE',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® is an FDA-approved treatment to grow eyelashes for people with inadequate or not enough lashes.',
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
                      value: 'Important Safety Information',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '\nDo not use ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'LATISSE',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® if you are allergic to one of its ingredients. If you use/used prescription products for eye pressure problems, use ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'LATISSE',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® under doctor care. May cause brown darkening of the colored part of the eye which is likely permanent. ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'LATISSE',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® may cause eyelid skin darkening which may be reversible. Only apply at base of upper lashes. DO NOT APPLY to lower lid. Hair may grow outside the treatment area. If you have eye problems/surgery, consult your doctor. Common side effects include itchy and red eyes. If discontinued, lashes gradually return to previous appearance.',
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
                      value: 'These are not all the possible side effects of ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'LATISSE',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '®. For more information, please talk to your doctor.',
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
                      value: 'Please see ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'LATISSE',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '® full ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Product Information',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '4G8Lla0cHCfaIkHwDSljnc',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: '.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
      ],
      total: 3,
      skip: 1,
      limit: 10,
      __typename: 'ImportantSafetyInformationLongBrandNamesCollection',
    },
    shortBrandNameCollection: {
      items: [
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'juvederm',
          fullBrandName: 'JUVÉDERM® Collection of Fillers',
          shortBrandName: 'JUVÉDERM®',
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
                      value: 'Approved Uses',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nJUVÉDERM® VOLUMA® XC injectable gel is for deep injection in the cheek area to correct age-related volume loss and for augmentation of the chin region to improve the chin profile in adults over 21.',
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
                        'JUVÉDERM® VOLLURE® XC, JUVÉDERM® Ultra Plus XC, and JUVÉDERM® Ultra XC injectable gels are for injection into the facial tissue for the correction of moderate to severe facial wrinkles and folds, such as nasolabial folds. JUVÉDERM® VOLLURE® XC injectable gel is for adults over 21.',
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
                        'JUVÉDERM® VOLBELLA® XC injectable gel is for injection into the lips for lip augmentation and for correction of perioral lines in adults over 21.',
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
                        'JUVÉDERM® Ultra XC injectable gel is for injection into the lips and perioral area for lip augmentation in adults over 21.',
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
                      value: 'Important Safety Information',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'Are there any reasons why I should not receive any JUVÉDERM® formulation?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nDo not use these products if you have a history of multiple severe allergies or severe allergic reactions (anaphylaxis), or if you are allergic to lidocaine or the Gram-positive bacterial proteins used in these products.',
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
                        'What precautions should my doctor advise me about?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'unordered-list',
                  content: [
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Minimize strenuous exercise and exposure to extensive sun or heat within the first 24 hours following treatment. Exposure to any of these may cause temporary redness, swelling, and/or itching at the injection site',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Tell your doctor if you are pregnant or breastfeeding. The safety of these products for use during pregnancy or while breastfeeding has not been studied',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'The safety of JUVÉDERM® VOLUMA® XC has not been studied in patients under 35 years or over 65 years for cheek augmentation, or under 22 years and over 80 years for chin augmentation. The safety of JUVÉDERM® VOLLURE® XC and JUVÉDERM® VOLBELLA® XC has not been studied in patients under 22 years, and the safety of JUVÉDERM® Ultra Plus XC and JUVÉDERM® Ultra XC has not been studied in patients under 18 years',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'JUVÉDERM® VOLUMA® XC is intended for use in the chin and cheek areas. JUVÉDERM® VOLLURE® XC, JUVÉDERM® Ultra Plus XC, and JUVÉDERM® Ultra XC are intended for use in facial wrinkles and folds. JUVÉDERM® VOLBELLA® XC and JUVÉDERM® Ultra XC are intended for use in the lips and perioral area. The safety and effectiveness for treatment in other areas have not been established in clinical studies',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Tell your doctor if you have a history of excessive scarring (thick, hard scars) or pigmentation disorders. The safety of JUVÉDERM® products has not been studied in these patients and may result in additional scars or changes in pigmentation',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Tell your doctor if you are on therapy used to decrease the body’s immune response (immunosuppressive therapy). Use may result in an increased risk of infection',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Tell your doctor before treatment if you are using substances that can prolong bleeding, such as aspirin, ibuprofen, or other blood thinners. As with any injection, this may result in increased bruising or bleeding at the injection site',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Patients who experience skin injury near the site of injection may be at a higher risk for adverse events',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'JUVÉDERM® VOLUMA® XC was not studied in patients with significant loose skin of the chin, neck, or jaw',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'The effect of JUVÉDERM® VOLUMA® XC injection into the chin on facial hair growth has not been studied',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
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
                      value: 'What are possible side effects?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' The most commonly reported side effects with JUVÉDERM® injectable gels included redness, swelling, pain, tenderness, firmness, lumps/bumps, bruising, discoloration, and itching. For JUVÉDERM® VOLBELLA® XC, dryness was also reported. For JUVÉDERM® VOLUMA® XC, most side effects resolved within 2 to 4 weeks. For JUVÉDERM® VOLLURE® XC, JUVÉDERM® Ultra Plus XC, and JUVÉDERM® Ultra XC injectable gels, most resolved within 14 days or less. For JUVÉDERM® VOLBELLA® XC, most resolved within 30 days or less. These side effects are consistent with other facial injection procedures.',
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
                        'Most side effects will resolve with time. Your doctor may choose to treat side effects persisting over 30 days with antibiotics, steroids, or hyaluronidase (an enzyme that breaks down hyaluronic acid).',
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
                        'One of the risks with these products is unintentional injection into a blood vessel. The chances of this happening are very small, but if it does happen, the complications can be serious and may be permanent. These complications, which have been reported for facial injections, can include vision abnormalities, blindness, stroke, temporary scabs, or permanent scarring of the skin.',
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
                        'As with all skin injection procedures, there is a risk of infection.',
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
                      value: 'Visit ',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Juvederm.com',
                          marks: [
                            {
                              type: 'bold',
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '4jpuP0wnWRQ9OTI0nwkhnE',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' or talk to your doctor for more information. To report a side effect with any JUVÉDERM® product, please call Allergan at 1-800-433-8871.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'Products in the JUVÉDERM® Collection are available only by a licensed physician or properly licensed practitioner.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'cooltone',
          fullBrandName: 'CoolTone®',
          shortBrandName: 'CoolTone®',
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
                      value: 'Uses',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nThe CoolTone® device is FDA-cleared for improvement of abdominal tone, strengthening of the abdominal muscles, and development for firmer abdomen. CoolTone® is also FDA-cleared for strengthening, toning, and firming of buttocks and thighs.',
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
                      value: 'Important Safety Information',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nThe CoolTone® procedure is not for everyone. You should not have the CoolTone® treatment in areas with metal, electrical, or electronic implants/devices like cardiac pacemakers, implanted hearing devices, implanted defibrillators, implanted neurostimulators, drug pumps, or hearing aids.',
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
                        'Tell your doctor if you have any medical conditions as CoolTone® should not be used over a menstruating uterus, over areas of the skin that lack normal sensation, in patients with fever, malignant tumor, hemorrhagic conditions, epilepsy, recent surgical procedure, pulmonary insufficiency, or pregnancy.',
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
                        'CoolTone® should be used with caution in patients with Graves’ disease (an autoimmune disorder that causes overactive thyroid), active bleeding disorders, or seizure disorders.',
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
                        'Women who are close to menstruation may find that it comes sooner, or cramping is increased or intensified with CoolTone® treatments, therefore, it is recommended to not undergo treatment during this time of the month.',
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
                        'CoolTone® should not be used in the heart or head areas, areas of new bone growth, over the carotid sinus nerves, or over the neck or mouth. CoolTone® should not be applied over swollen, infected, inflamed areas or skin eruptions. Caution should be used for patients with suspected or diagnosed heart problems.',
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
                        'Common side effects may include, but may not be limited to, muscular pain, temporary muscle spasm, temporary joint or tendon pain, and redness at or near the treatment site.',
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
                        'Ask your Healthcare Provider if CoolTone® is right for you.',
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
                      value: 'Please see full ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'Important Safety Information',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '7bngU5cNguaZH836cYF07T',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value:
                        ' for additional information at coolsculpting.com/cooltone.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'coolsculpting',
          fullBrandName: 'CoolSculpting® and CoolSculpting® Elite',
          shortBrandName: 'CoolSculpting® and CoolSculpting® Elite',
          consumerImportantSafetyInformation: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'Uses',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: '\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting®',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' and',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: ' CoolSculpting® Elite',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' are FDA-cleared for the treatment of visible fat bulges in the submental (under the chin) and submandibular (under the jawline) areas, thigh, abdomen, and flank, along with bra fat, back fat, underneath the buttocks (also known as banana roll), and upper arm. It is also FDA-cleared to affect the appearance of lax tissue with submental area treatments. ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting®',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' and ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting® Elite',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' are not treatments for weight loss.\n\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'Important Safety Information\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'These procedures are not for everyone. You should not be treated with ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting®',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' or ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting® Elite',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        ' if you suffer from cryoglobulinemia, cold agglutinin disease, or paroxysmal cold hemoglobinuria. \n\nTell your doctor if you have any medical conditions including recent surgery, pre-existing hernia, and any known sensitivities or allergies. \n\nDuring the procedure you may experience sensations of pulling, tugging, mild pinching, intense cold, tingling, stinging, aching, and cramping at the treatment site. These sensations lessen as the area becomes numb. Following the procedure, typical side effects include temporary redness, swelling, blanching, bruising, firmness, tingling, stinging, tenderness, cramping, aching, itching, or skin sensitivity, and sensation of fullness in the back of the throat after submental or submandibular area treatment. \n\nRare side effects may happen in 1 to 10 out of 10,000 ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting®',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' and ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      value: 'CoolSculpting® Elite ',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'treatments (between 0.01% to 0.1%). One such rare side effect is a visible enlargement in the treated area, which may develop 2 to 5 months after treatment and requires surgical intervention for correction.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Please see full Important Safety Information for ',
                      nodeType: 'text',
                    },
                    {
                      data: {
                        target: {
                          sys: {
                            id: '4Hl5jnmIZ0vZn5nTD2GuK0',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'CoolSculpting®',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'entry-hyperlink',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' and ',
                      nodeType: 'text',
                    },
                    {
                      data: {
                        target: {
                          sys: {
                            id: '5LEytHr8iFKAAjRbkx6iH1',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'CoolSculpting® Elite',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'entry-hyperlink',
                    },
                    {
                      data: {},
                      marks: [],
                      value: ' on CoolSculpting.com.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'skinmedica',
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
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'skinvive',
          fullBrandName: 'SKINVIVE by JUVÉDERM®',
          shortBrandName: 'SKINVIVE',
          consumerImportantSafetyInformation: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [{ type: 'bold' }],
                      value: 'Approved Uses\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'SKINVIVE by JUVÉDERM® injectable gel is an injection to improve skin smoothness of the cheeks in adults over the age of 21.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [{ type: 'bold' }],
                      value:
                        'Important Safety Information\nAre there any reasons why I should not receive SKINVIVE by JUVÉDERM® treatment?\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'Do not use this product if you have a history of multiple severe allergies or severe allergic reactions (anaphylaxis), if you are allergic to lidocaine or the Gram-positive bacterial proteins used in this product, or if you have had previous allergic reactions to hyaluronic acid fillers.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [{ type: 'bold' }],
                      value:
                        'What Warnings should my specialist advise me about?',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'One of the risks with using SKINVIVE by JUVÉDERM® is the unintentional injection into a blood vessel. The chances of this happening are very small, but if it does happen, the complications can be serious and may be permanent. These complications, which have been reported for facial injections, can include vision abnormalities, blindness, stroke, temporary scabs, or permanent scarring of the skin',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'The use of this product where skin sores, pimples, rashes, hives, cysts, or infections are present should be postponed, as this may delay healing or make skin problems worse',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'The effectiveness of removal of any dermal filler has not been studied',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                  ],
                  nodeType: 'unordered-list',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [{ type: 'bold' }],
                      value:
                        'What Precautions should my specialist advise me about?',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Minimize strenuous exercise, exposure to extensive sun or heat, and alcoholic beverages within the first 24 hours following treatment. Exposure to any of these may cause temporary redness, swelling, and/or itching at the injection site',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tell your specialist if you are using any medication that can prolong bleeding, such as aspirin, ibuprofen, or other blood thinners, as this may increase bruising or bleeding at the injection site',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tell your specialist if you are planning laser treatment, chemical peeling, or any other procedure after SKINVIVE by JUVÉDERM®. There is a possible risk of an inflammatory reaction at the treatment site',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'This product is intended for improving skin smoothness of the cheeks. The safety and effectiveness for treatment in other areas of the body have not been established',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                "Tell your specialist if you are on therapy used to decrease the body's immune response, as treatment may result in an increased risk of infection",
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tell your specialist if you are pregnant or breastfeeding. The safety for use during pregnancy, or in women who are breastfeeding, has not been studied',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tell your specialist if you have a history of excessive scarring (thick, hard scars). The safety of this product in patients with a history of excessive scarring has not been studied and may result in additional scars',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Tell your specialist if you have a history of pigmentation disorders, as use of this product in patients with a history of pigmentation disorders has not been studied and may result in changes in pigmentation',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                  ],
                  nodeType: 'unordered-list',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [{ type: 'bold' }],
                      value:
                        'What are the possible side effects of treatment?\n',
                      nodeType: 'text',
                    },
                    {
                      data: {},
                      marks: [],
                      value:
                        'The most commonly reported side effects were redness, lumps/bumps, swelling, bruising, pain, tenderness, firmness, discoloration and itching. Most side effects will resolve within 7 days. If they persist longer, your physician may choose to treat them with medications, such as antibiotics, steroids, or hyaluronidase. Additionally, there have been reports of inflammation, nodules, unsatisfactory result, loss or lack of improvement, allergic reaction, anxiety, blood vessel blockage, infection, dry skin, increase or decrease in sensation, and abscess. Delayed-onset inflammation near the site of dermal filler injections is one of the known adverse events associated with dermal fillers. As with all skin injection procedures, there is a risk of infection.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [{ type: 'bold' }],
                      value:
                        'To report a side effect, please call the Allergan® Product Support Department at 1-877-345-5372. Please also visit SKINVIVE.com or talk to your specialist for more information.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'SKINVIVE by JUVÉDERM® is available only by a licensed physician or properly licensed practitioner.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
            links: {
              __typename: 'BrandConsumerImportantSafetyInformationLinks',
              entries: {
                __typename: 'BrandConsumerImportantSafetyInformationEntries',
                hyperlink: [],
                inline: [],
                block: [],
              },
              assets: {
                __typename: undefined,
                hyperlink: [],
                block: [],
              },
              resources: {
                __typename: undefined,
                block: [],
                inline: [],
                hyperlink: [],
              },
            },
          },
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'diamondglow',
          fullBrandName: 'DiamondGlow®',
          shortBrandName: 'DiamondGlow®',
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
                      value: 'Uses',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nThe DiamondGlow® device is a general dermabrasion device that gently removes the top layer of skin and delivers topical cosmetic serums onto the skin.',
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
                      value: 'Important Safety Information',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nThe DiamondGlow® treatment is not for everyone. You should not have a DiamondGlow® treatment if you have compromised skin quality. Tell your provider if you are pregnant or lactating, or if you have any medical conditions, including allergies, and if you are using topical medications on the area to be treated. Typical side effects include a scratchy, stinging sensation during the treatment and temporary tightness, redness or slight swelling after the treatment. Rare serious side effects may also occur and include severe skin irritation and allergic reactions.',
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
                      value: 'SkinMedica® Pro-Infusion Serums Disclaimer',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nSkinMedica® Pro-Infusion Serums are intended to meet the FDA’s definition of a cosmetic product, an article applied to the human body to cleanse, beautify, promote attractiveness, and alter appearances. These products are not intended to be drugs that diagnose, treat, cure, or prevent any disease or condition. These products have not been approved by the FDA and the statements have not been evaluated by the FDA. Please talk to your provider for additional information.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
        {
          sys: {
            id: 'someId',
            spaceId: 'space',
            environmentId: 'env',
          },
          contentfulMetadata: { tags: [] },
          codeId: 'natrelle',
          fullBrandName: 'Natrelle® Breast Implants',
          shortBrandName: 'Natrelle®',
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
                        'Breast implants are not considered lifetime devices. The longer people have them, the greater the chances are that they will develop complications, some of which will require more surgery.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'Breast implants have been associated with the development of a cancer of the immune system called breast implant–associated anaplastic large cell lymphoma (BIA-ALCL). This cancer occurs more commonly in patients with textured breast implants than smooth implants, although rates are not well defined. Some patients have died from BIA-ALCL.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                        'Patients receiving breast implants have reported a variety of systemic symptoms, such as joint pain, muscle aches, confusion, chronic fatigue, autoimmune diseases, and others. Individual patient risk for developing these symptoms has not been well established. Some patients report complete resolution of symptoms when the implants are removed without replacement.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                      value: 'Who can get breast implants?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: '\n',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Natrelle',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® Breast Implants are approved for the following:',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'unordered-list',
                  content: [
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Breast augmentation for women at least 22 years old for silicone-filled implants and for women at least 18 years old for saline-filled implants. ',
                              marks: [
                                {
                                  type: 'bold',
                                },
                              ],
                              data: {},
                            },
                            {
                              nodeType: 'text',
                              value:
                                'Breast augmentation includes primary breast augmentation to increase the breast size and revision surgery to correct or improve the result of a primary breast augmentation',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value: 'Breast reconstruction. ',
                              marks: [
                                {
                                  type: 'bold',
                                },
                              ],
                              data: {},
                            },
                            {
                              nodeType: 'text',
                              value:
                                'This includes primary breast reconstruction to replace breast tissue that has been removed due to cancer or trauma or that has failed to develop properly due to a severe breast abnormality. This also includes revision surgery to correct or improve the result of a primary breast reconstruction ',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
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
                      value: 'Who should NOT get breast implants?\n',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        'Breast implant surgery should NOT be performed in:',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'unordered-list',
                  content: [
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Women with active infection anywhere in their body',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Women with existing cancer or precancer of their breast who have not received adequate treatment for those conditions',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Women who are currently pregnant or nursing',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
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
                      value: 'What should I tell my doctor?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nTell your doctor if you have any of the following conditions, as the risks of breast implant surgery may be higher:',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'unordered-list',
                  content: [
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Autoimmune diseases (eg, lupus and scleroderma)',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'A weakened immune system (eg, taking medications to decrease the body’s immune response)',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Planned chemotherapy or radiation therapy following breast implant placement',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Conditions or medications that interfere with wound healing and blood clotting',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value: 'Reduced blood supply to breast tissue',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Clinical diagnosis of depression or other mental health disorders, including body dysmorphic disorder and eating disorders',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Those with a diagnosis of depression or other mental health disorders should wait for resolution or stabilization of these conditions prior to undergoing breast implantation surgery',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
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
                      value: 'What else should I consider?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                  ],
                  data: {},
                },
                {
                  nodeType: 'unordered-list',
                  content: [
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'There is a Boxed Warning for breast implants. Please see bold text at beginning',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Many changes to your breasts following implantation are irreversible. If you later choose to have your implants removed and not replaced, you may experience dimpling, puckering, wrinkling, or other cosmetic changes, which may be permanent',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Breast implantation is likely not a one-time surgery. The longer implants are in place, the greater the potential risk for complications. You will likely need additional surgeries on your breasts due to complications or unacceptable cosmetic results. Thus, you should also consider the complication rates for later (revision) surgery since you may experience these risks in the future',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Cancer treatments and surgery will affect the outcome and timing of breast reconstruction',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Breast implants may affect your ability to breastfeed, either by reducing or eliminating milk production',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Rupture of a silicone-filled breast implant is most often silent. Even if you have no symptoms, you should have your first ultrasound or MRI at 5 to 6 years after your initial implant surgery and then every 2 to 3 years thereafter regardless of whether your implants are for augmentation or reconstruction. If you have symptoms of or uncertain ultrasound results for breast implant rupture, an MRI is recommended. Additional imaging may be required depending on your medical history and status. The health consequences of a ruptured silicone gel–filled breast implant have not been fully established',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'list-item',
                      content: [
                        {
                          nodeType: 'paragraph',
                          content: [
                            {
                              nodeType: 'text',
                              value:
                                'Routine screening mammography for breast cancer will be more difficult, and implants may rupture during the procedure. Perform self-examination every month for cancer screening and ask your surgeon to help you distinguish the implant from your breast tissue. Lumps, persistent pain, swelling, hardening, or changes in implant shape should be reported to your surgeon and possibly evaluated with imaging',
                              marks: [],
                              data: {},
                            },
                          ],
                          data: {},
                        },
                      ],
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
                      value: 'What are key complications with breast implants?',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '\nKey complications include reoperation, implant removal with or without replacement, implant rupture with silicone-filled implants, implant deflation with saline-filled implants, and capsular contracture (severe scar tissue around the implant). Other complications include breast pain, swelling, asymmetry, wrinkling/rippling, implant malposition nipple complications, hypertrophic scarring, and implant palpability/visibility.',
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
                      value: 'Talk to your doctor about other complications.',
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
                        'For more information see the patient brochures at ',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'entry-hyperlink',
                      content: [
                        {
                          nodeType: 'text',
                          value: 'www.allergan.com/products',
                          marks: [
                            {
                              type: 'bold',
                            },
                          ],
                          data: {},
                        },
                      ],
                      data: {
                        target: {
                          sys: {
                            id: '1OE7YvssHUaLbJwAhu6jlQ',
                            type: 'Link',
                            linkType: 'Entry',
                          },
                        },
                      },
                    },
                    {
                      nodeType: 'text',
                      value: '. ',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                      value: 'To report a problem with ',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Natrelle',
                      marks: [
                        {
                          type: 'italic',
                        },
                        {
                          type: 'bold',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® Breast Implants, please call Allergan at 1-800-624-4261.',
                      marks: [
                        {
                          type: 'bold',
                        },
                      ],
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
                      value: 'The sale and distribution of ',
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value: 'Natrelle',
                      marks: [
                        {
                          type: 'italic',
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: 'text',
                      value:
                        '® Breast Implants is restricted to licensed physicians who provide information to patients about the risks and benefits of breast implant surgery.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            links: {
              resources: { block: [], inline: [], hyperlink: [] },
              assets: {
                block: [],
                hyperlink: [],
              },
              entries: {
                block: [],
                hyperlink: [],
                inline: [],
              },
            },
            __typename: 'BrandConsumerImportantSafetyInformation',
          },
          __typename: 'Brand',
        },
      ],
      total: 6,
      skip: 1,
      limit: 10,
      __typename: 'ImportantSafetyInformationShortBrandNameCollection',
    },
    __typename: 'ImportantSafetyInformation',
  };
