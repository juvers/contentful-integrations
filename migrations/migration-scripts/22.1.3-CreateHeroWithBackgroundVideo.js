const helpText = require('../constants/helpText');
const { solidColor } = require('../constants/validation');
const { hexColor, videoHeight } = require('../constants/helpText');

const { richTextBoldUnderlineItalic } = require('../constants/validation');
module.exports = function (migration) {
  const video = migration.editContentType('video');
  video
    .createField('showControls')
    .name('Show Controls')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  video
    .createField('playAudio')
    .name('Play Audio')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  const theme = migration
    .createContentType('themeHeroWithBackgroundVideo')
    .name('Theme > Hero With Background Video')
    .description('Styles to support Block > Hero With Background Video')
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
    .required(true)
    .defaultValue({ 'en-US': '#FFFFFF' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  const blockHeroWithBackgroundVideo = migration
    .createContentType('blockHeroWithBackgroundVideo')
    .name('Block > Hero With Background Video')
    .description('Hero With Background Video')
    .displayField('internalName');

  blockHeroWithBackgroundVideo
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  blockHeroWithBackgroundVideo
    .createField('headline')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledNodeTypes: ['heading-1', 'heading-2', 'heading-3'],
        message: 'Only heading 1, heading 2, heading 3 are allowed',
      },
    ]);

  blockHeroWithBackgroundVideo
    .createField('backgroundVideo')
    .name('Background Video')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockVideo'],
      },
    ]);

  blockHeroWithBackgroundVideo.changeFieldControl(
    'backgroundVideo',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: true,
      helpText: helpText.videoSize.default,
    }
  );
  blockHeroWithBackgroundVideo
    .createField('mobileBackgroundVideo')
    .name('Mobile Background Video')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockVideo'],
      },
    ]);

  blockHeroWithBackgroundVideo.changeFieldControl(
    'mobileBackgroundVideo',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: true,
      helpText: helpText.videoSize.default,
    }
  );

  blockHeroWithBackgroundVideo
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
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

  blockHeroWithBackgroundVideo
    .createField('cta')
    .name('CTA')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'ctaButton',
            'elementFindASpecialist',
            'offerCTAButton',
            'elementRegistrationCTA',
          ],
        },
      ],
    });
  blockHeroWithBackgroundVideo
    .createField('footnote')
    .name('Footnote')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['blockFootnote'],
      },
    ])
    .required(false)
    .omitted(false)
    .linkType('Entry');

  blockHeroWithBackgroundVideo
    .createField('centerLogo')
    .name('Center Logo')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockHeroWithBackgroundVideo.changeFieldControl(
    'centerLogo',
    'builtin',
    'entryLinkEditor',
    {
      helpText: helpText.largerLogo.default,
      showCreateEntityAction: true,
    }
  );

  blockHeroWithBackgroundVideo
    .createField('videoSize')
    .name('Video Size')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  blockHeroWithBackgroundVideo.changeFieldControl(
    'videoSize',
    'builtin',
    'boolean',
    {
      trueLabel: 'full height',
      falseLabel: 'half height',
      helpText: videoHeight.default,
    }
  );

  blockHeroWithBackgroundVideo
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeHeroWithBackgroundVideo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockHeroWithBackgroundVideo.changeFieldControl(
    'theme',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: true,
    }
  );

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
        ],
      },
    ],
    linkType: 'Entry',
  });

  const templateOptInOffer = migration.editContentType('templateOptInOffer');
  templateOptInOffer.editField('blocks').items({
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
        ],
      },
    ],
    linkType: 'Entry',
  });
};
