const { solidColor } = require('../constants/validation');
const { hexColor } = require('../constants/helpText');
const helpText = require('../constants/helpText');
const validation = require('../constants/validation');

module.exports = function (migration) {
  const theme = migration
    .createContentType('themeLogos')
    .name('Theme > Logos')
    .description('Styles to support Block > Logos')
    .displayField('internalName');

  theme
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  theme
    .createField('backgroundColor')
    .name('Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .defaultValue({ 'en-US': '#FFFFFF' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('backgroundColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('textColor')
    .name('Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('textColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('ctaBackgroundColor')
    .name('CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('ctaBackgroundColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('ctaTextColor')
    .name('CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .defaultValue({ 'en-US': '#FFFFFF' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('logoTextColor')
    .name('Logo Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('logoTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  const elementImageWithCopy = migration
    .createContentType('elementImageWithCopy')
    .name('Element > Image with Copy')
    .description('Image with Copy')
    .displayField('internalName');

  elementImageWithCopy
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  elementImageWithCopy
    .createField('image')
    .name('Image')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  elementImageWithCopy
    .createField('imageCopy')
    .name('Image Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, italics, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyperlink and link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);
  elementImageWithCopy.changeFieldControl(
    'imageCopy',
    'builtin',
    'richTextEditor',
    {
      helpText: helpText.imageCopyBrandLogos.default,
    }
  );

  elementImageWithCopy
    .createField('url')
    .name('URL')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.customUrl])
    .disabled(false)
    .omitted(false);

  elementImageWithCopy.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });

  const blockLogos = migration
    .createContentType('blockLogos')
    .name('Block > Logos')
    .description('Brand Logos')
    .displayField('internalName');

  blockLogos
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockLogos
    .createField('headline')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: [],
        message: 'No marks available',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'entry-hyperlink',
          'hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, link to url, and link to entry link are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockLogos
    .createField('logos')
    .name('Logo(s)')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['elementImageWithCopy'],
        },
      ],
    });

  blockLogos
    .createField('otherElements')
    .name('Other Element(s)')
    .type('Array')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'blockCopy',
            'blockFootnote',
            'offerCTAButton',
            'ctaButton',
            'elementFindASpecialist',
            'elementRegistrationCTA',
          ],
        },
      ],
    });

  blockLogos
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeLogos'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockLogos.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });

  const composeLandingPage = migration.editContentType('landingPage');
  composeLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
          'valuePropositionBlock',
          'blockHeroWithBackgroundVideo',
          'blockLogos',
        ],
      },
    ],
    linkType: 'Entry',
  });

  const providerLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  providerLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
          'valuePropositionBlock',
          'blockHeroWithBackgroundVideo',
          'blockLogos',
        ],
      },
    ],
    linkType: 'Entry',
  });

  const templatOptInOffer = migration.editContentType('templateOptInOffer');
  templatOptInOffer.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
          'valuePropositionBlock',
          'blockHeroWithBackgroundVideo',
          'blockLogos',
        ],
      },
    ],
    linkType: 'Entry',
  });

  const composeArticle = migration.editContentType('articlePage');
  composeArticle.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockFootnote',
          'blockCopy',
          'blockVideo',
          'blockImage',
          'blockBeforeAndAfter',
          'joinBanner',
          'blockFAQ',
          'blockLogos',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
