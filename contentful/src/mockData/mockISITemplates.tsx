import { ContentfulISITemplatesTypes } from '../isi/useContentfulISITemplates';

/**
 * This mock is an example of what useContentfulISITemplates returns.
 */
export const mockContentfulISITemplates: ContentfulISITemplatesTypes = {
  brands: [
    {
      codeId: 'diamondglow',
      consumerImportantSafetyInformation: {
        json: {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Uses',
                  marks: [{ type: 'bold' }],
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
            },
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Important Safety Information',
                  marks: [{ type: 'bold' }],
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
            },
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'SkinMedica® Pro-Infusion Serums Disclaimer',
                  marks: [{ type: 'bold' }],
                  data: {},
                },
                {
                  nodeType: 'text',
                  value:
                    '\nSkinMedica® Pro-Infusion Serums are intended to meet the FDA’s definition of a cosmetic product, an article applied to the human body to cleanse, beautify, promote attractiveness, and alter appearances. These products are not intended to be drugs that diagnose, treat, cure, or prevent any disease or condition. These products have not been approved by the FDA and the statements have not been evaluated by the FDA. \n\nPlease talk to your provider for additional information.',
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
        links: {
          resources: { block: [], inline: [], hyperlink: [] },
          entries: {
            hyperlink: [],
            inline: [],
            block: [],
            __typename: 'BrandConsumerImportantSafetyInformationEntries',
          },
          assets: {
            hyperlink: [],
            block: [],
          },
          __typename: 'BrandConsumerImportantSafetyInformationLinks',
        },
        __typename: 'BrandConsumerImportantSafetyInformation',
      },
      fullBrandName: 'DiamondGlow®',
      shortBrandName: 'DiamondGlow®',
    },
    {
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
                  value: 'Tell your doctor about all your medical conditions,',
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
                  value: 'Tell your doctor about all the medicines you take,',
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
          assets: {
            block: [],
            hyperlink: [],
          },
          entries: {
            block: [],
            hyperlink: [
              {
                sys: {
                  id: '3gkVeZTTwYKVFlQKRkz0Ab',
                  spaceId: '3gkVeZTTwYKVFlQKRkz0Ab',
                  environmentId: '3gkVeZTTwYKVFlQKRkz0Ab',
                  __typename: 'Sys',
                },
                // @ts-ignore - type ContentfulISITemplatesTypesBrand needs to be updated to allow url value
                url: 'https://media.allergan.com/actavis/actavis/media/allergan-pdf-documents/product-prescribing/20190620_BTX-and-BTX-C-Med-Guide-v2-0MG1145.pdf',
                __typename: 'Link',
                contentfulMetadata: {
                  tags: [],
                  concepts: [],
                },
              },
              {
                sys: {
                  id: '3Y8ZMX40uzBQIotQWQvjZ0',
                  spaceId: '3Y8ZMX40uzBQIotQWQvjZ0',
                  environmentId: '3Y8ZMX40uzBQIotQWQvjZ0',
                  __typename: 'Sys',
                },
                // @ts-ignore  - type ContentfulISITemplatesTypesBrand needs to be updated to allow url value
                url: 'https://media.allergan.com/actavis/actavis/media/allergan-pdf-documents/product-prescribing/20190626-BOTOX-Cosmetic-Insert-72715US10-Med-Guide-v2-0MG1145.pdf',
                __typename: 'Link',
                contentfulMetadata: {
                  tags: [],
                  concepts: [],
                },
              },
            ],
            inline: [],
          },
        },
        __typename: 'BrandConsumerImportantSafetyInformation',
      },
    },
  ],
  isiHeaderTemplate: [
    {
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
          hyperlink: [],
          inline: [],
          block: [],
          __typename:
            'ImportantSafetyInformationTemplateIsiHeaderTemplateEntries',
        },
        assets: {
          hyperlink: [],
          block: [],
        },
        __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplateLinks',
      },
      __typename: 'ImportantSafetyInformationTemplateIsiHeaderTemplate',
    },
  ],
  isiLinkTemplates: [
    {
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
          hyperlink: [],
          block: [],
        },
        __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplateLinks',
      },
      __typename: 'ImportantSafetyInformationTemplateIsiLinkTemplate',
    },
  ],
};
