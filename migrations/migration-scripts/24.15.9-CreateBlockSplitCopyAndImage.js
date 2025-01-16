const {
  richTextBoldUnderlineItalicSuperscript,
  showTo,
  solidColor,
} = require('../constants/validation');

module.exports = function (migration) {
  const theme = migration
    .createContentType('splitCopyAndImageTheme')
    .name('Theme > Split Copy And Image ')
    .description('Theme for Block > Split Copy And Image')
    .displayField('internalName');

  theme
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  theme
    .createField('blockBackgroundColor')
    .name('Block Background Color')
    .type('Symbol')
    .localized(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);

  const block = migration
    .createContentType('splitCopyAndImage')
    .name('Block > Split Copy And Image ')
    .description('Displays copy and image, split into two')
    .displayField('internalName');

  block
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  block
    .createField('showTo')
    .name('Show To Users')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.default,
      },
    ]);

  block
    .createField('showToScreens')
    .name('Show To Screens')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.screens,
      },
    ]);

  block
    .createField('headline')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
          'hyperlink',
          'entry-hyperlink',
          'embedded-entry-block',
        ],
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
          'embedded-entry-block': [
            {
              linkContentType: ['image'],
              message: null,
            },
          ],
        },
      },
    ]);

  block
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: [
          'hyperlink',
          'entry-hyperlink',
          'embedded-entry-block',
        ],
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
          'embedded-entry-block': [
            {
              linkContentType: ['imageAndText'],
              message: null,
            },
          ],
        },
      },
    ]);

  block
    .createField('mobileImage')
    .name('Mobile Image')
    .type('Link')
    .localized(false)
    .required(true)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['imageWithDisclaimer'],
      },
    ]);

  block.changeFieldControl('mobileImage', 'builtin', 'entryLinkEditor', {
    helpText:
      'This will be the default image used for all screen sizes unless an option is chosen for larger screen size.',
  });

  block
    .createField('desktopImage')
    .name('Desktop Image')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['imageWithDisclaimer'],
      },
    ]);

  block
    .createField('desktopLayout')
    .name('Desktop Layout')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'Image Right' })
    .validations([
      {
        in: ['Image Right', 'Image Left'],
      },
    ]);

  block.changeFieldControl('desktopLayout', 'builtin', 'dropdown', {
    helpText: 'Mobile layout will always have the image appear on top.',
  });

  block
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      { enabledNodeTypes: [] },
    ]);

  block
    .createField('isiDisclaimer')
    .name('ISI Disclaimer')
    .type('Array')
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['brand'],
        },
      ],
    });

  block.changeFieldControl('isiDisclaimer', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  block
    .createField('cta')
    .name('CTA')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['ctaButton', 'buttonWithIcon', 'staticCode'],
      },
    ]);

  block.changeFieldControl('isiDisclaimer', 'builtin', 'entryLinksEditor', {
    helpText: 'Supports Static Code with codeId: downloadAlleAppButtons',
  });

  block
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['splitCopyAndImageTheme'],
      },
    ]);
};
