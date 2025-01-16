const { richTextBoldUnderlineItalicSuperscript } = require('../constants/validation');

module.exports = function (migration) {
  const element = migration
    .createContentType('blockBackgroundImageWithCopy')
    .name('Block > Background Image and Copy')
    .description('Background Image and Copy')
    .displayField('internalName');

  element
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('mobileImage')
    .name('Mobile Image')
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

  element
    .createField('desktopImage')
    .name('Desktop Image')
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

  element
    .createField('description')
    .name('Description')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
        ],
        message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5 or heading 6 are allowed',
      },
    ]);

  element
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript
    ]);

  element
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

  element
    .createField('cta')
    .name('CTA')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['ctaButton', 'buttonWithIcon'],
      },
    ]);
};
