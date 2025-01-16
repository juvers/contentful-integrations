module.exports = function (migration) {
  const fullImage = migration
    .createContentType('blockImage')
    .name('Block > Image')
    .description('Image with disclaimer text')
    .displayField('internalName');

  fullImage
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  fullImage
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

  fullImage.changeFieldControl('image', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });

  fullImage
    .createField('disclaimerShortText')
    .name('Disclaimer Short Text')
    .type('Symbol')
    .localized(false)
    .disabled(false)
    .omitted(false);

  fullImage
    .createField('disclaimerLongText')
    .name('Disclaimer Long Text')
    .type('Text')
    .localized(false)
    .disabled(false)
    .omitted(false);

  fullImage
    .createField('textColor')
    .name('Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ]);
};
