const {
  richTextBoldUnderlineItalicSuperscript,
} = require('../constants/validation');
const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const element = migration
    .createContentType('elementImageCard')
    .name('Element > Image Card')
    .description('Image Card')
    .displayField('internalName');

  element
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('image')
    .name('Image')
    .type('Link')
    .localized(false)
    .required(true)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('text')
    .name('Text')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledNodeTypes: ['heading-1', 'heading-2'],
        message: 'Only heading 1, heading 2',
      },
    ]);

  element
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: [],
      },
    ]);

  element
    .createField('isiDisclaimer')
    .name('ISI Disclaimer')
    .type('Array')
    .localized(false)
    .required(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['brand'],
        },
      ],
    })
    .disabled(false)
    .omitted(false);

  element
    .createField('url')
    .name('Url')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false);

  element.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });
};
