const {
  richTextBoldUnderlineItalicSuperscript,
} = require('../constants/validation');

module.exports = function (migration) {
  const element = migration
    .createContentType('imageGrid')
    .name('Element > Image Grid ')
    .description('References up to 6 images to place in a grid')
    .displayField('internalName');

  element
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('image1')
    .name('Image 1')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('image2')
    .name('Image 2')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('image3')
    .name('Image 3')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('image4')
    .name('Image 4')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('image5')
    .name('Image 5')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('image6')
    .name('Image 6')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  element
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      { enabledNodeTypes: [] },
    ]);

  // add as option on Block > Split Copy And Image
  const block = migration.editContentType('splitCopyAndImage');

  block.editField('mobileImage').validations([
    {
      linkContentType: ['imageWithDisclaimer', 'imageGrid'],
    },
  ]);

  block.editField('desktopImage').validations([
    {
      linkContentType: ['imageWithDisclaimer', 'imageGrid'],
    },
  ]);

  block.changeFieldControl('isiDisclaimer', 'builtin', 'entryLinksEditor', {
    helpText: '',
  });

  block.changeFieldControl('cta', 'builtin', 'entryLinkEditor', {
    helpText: 'Supports Static Code with codeId: downloadAlleAppButtons',
  });
};
