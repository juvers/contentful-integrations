const {
  richTextBoldUnderlineItalicSuperscript,
} = require('../constants/validation');

module.exports = function (migration) {
  const element = migration
    .createContentType('imageAndText')
    .name('Element > Image And Text')
    .description('Displays image and rich text')
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
    .required(true)
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      { enabledNodeTypes: [] },
    ]);
};
