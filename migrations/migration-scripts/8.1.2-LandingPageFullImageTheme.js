module.exports = function (migration) {
  const themeFullImage = migration
    .createContentType('themeFullImage')
    .name('Theme > Full Image')
    .description('Styles to support Block > Full Image')
    .displayField('internalName');

  themeFullImage
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('textColor')
    .name('Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('textBackgroundColor')
    .name('Text Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('disclaimerTextColor')
    .name('Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('ctaBackgroundColor')
    .name('CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('ctaTextColor')
    .name('CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['themeFullImage'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockFullImage.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });
};
