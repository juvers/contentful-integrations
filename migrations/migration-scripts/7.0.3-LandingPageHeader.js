module.exports = function (migration) {
  const themeLogoHeader = migration
    .createContentType('themeLogoHeader')
    .name('Theme > Sticky Logo Header')
    .description('Styles to support Block > Sticky Logo Header')
    .displayField('internalName');
  themeLogoHeader
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  themeLogoHeader
    .createField('backgroundColor')
    .name('Sticky Background Color')
    .type('Symbol')
    .localized(false)
    .validations([
      {
        regexp: {
          pattern: '^[a-fA-F0-9]+$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);
  themeLogoHeader
    .createField('ctaBackgroundColor')
    .name('CTA Background Color')
    .type('Symbol')
    .localized(false)
    .validations([
      {
        regexp: {
          pattern: '^[a-fA-F0-9]+$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);
  themeLogoHeader
    .createField('ctaTextColor')
    .name('CTA Text Color')
    .type('Symbol')
    .localized(false)
    .validations([
      {
        regexp: {
          pattern: '^[a-fA-F0-9]+$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);
  themeLogoHeader
    .createField('linkTextColor')
    .name('Link Text Color')
    .type('Symbol')
    .localized(false)
    .validations([
      {
        regexp: {
          pattern: '^[a-fA-F0-9]+$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  const blockLogoHeader = migration
    .createContentType('blockLogoHeader')
    .name('Block > Sticky Logo Header')
    .description(
      'Page header presented with a logo and optional button and/or link'
    )
    .displayField('internalName');
  blockLogoHeader
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blockLogoHeader
    .createField('cloudinaryLogo')
    .name('Cloudinary Logo')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  blockLogoHeader
    .createField('cta')
    .name('CTA')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['ctaButton'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  blockLogoHeader
    .createField('link')
    .name('Link')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['link'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  blockLogoHeader
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeLogoHeader'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockLogoHeader.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });
};
