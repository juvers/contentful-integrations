module.exports = function (migration) {
  const fullImage = migration
    .createContentType('blockFullImage')
    .name('Block > Full Image')
    .description('A full width image that can have copy and an optional CTA')
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

  fullImage.changeFieldControl('copy', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });

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
    .createField('mobileImage')
    .name('MobileImage')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  fullImage.changeFieldControl('mobileImage', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });

  fullImage
    .createField('disclaimer')
    .name('Disclaimer')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false);

  fullImage
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

  fullImage.changeFieldControl('cta', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });
};
