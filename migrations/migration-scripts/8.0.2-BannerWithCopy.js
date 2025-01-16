module.exports = function (migration) {
  const themeBannerWithCopy = migration
    .createContentType('themeBannerWithCopy')
    .name('Theme > Banner With Copy')
    .description('Styles to support Block > Banner With Copy')
    .displayField('internalName');
  themeBannerWithCopy
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  themeBannerWithCopy
    .createField('backgroundColor')
    .name('Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ])
    .disabled(false)
    .omitted(false);
  themeBannerWithCopy
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
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ])
    .disabled(false)
    .omitted(false);
  themeBannerWithCopy
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
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ])
    .disabled(false)
    .omitted(false);
  themeBannerWithCopy
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
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ])
    .disabled(false)
    .omitted(false);

  const blockBannerWithCopy = migration
    .createContentType('bannerWithCopy')
    .name('Block > Banner With Copy')
    .description('Banner with theme and rich text')
    .displayField('internalName');
  blockBannerWithCopy
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blockBannerWithCopy
    .createField('copy')
    .name('Copy')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockCopy'],
      },
    ]);
  blockBannerWithCopy
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
  blockBannerWithCopy
    .createField('cta')
    .name('CTA')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['ctaButton'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  blockBannerWithCopy
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeBannerWithCopy'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockBannerWithCopy.changeFieldControl(
    'theme',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: false,
    }
  );
};
