const {
  richTextBoldUnderlineItalicSuperscript,
  solidColor,
} = require('../constants/validation');

module.exports = function (migration) {
  const element = migration
    .createContentType('imageWithDisclaimer')
    .name('Element > Image With Disclaimer ')
    .description('Image with optionl disclaimer')
    .displayField('internalName');

  element
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('cloudinaryImage')
    .name('Cloudinary Image')
    .type('Object')
    .localized(false)
    .required(true);

  element.changeFieldControl('cloudinaryImage', 'app', 'zjcnWgBknf9zB7IM9HZjE');

  element
    .createField('alt')
    .name('Alt Text')
    .type('Symbol')
    .localized(false)
    .required(true);

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
    .createField('disclaimerTextColor')
    .name('Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .validations([solidColor]);
};
