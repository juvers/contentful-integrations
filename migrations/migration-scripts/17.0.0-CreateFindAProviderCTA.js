module.exports = function (migration) {
  const blockBannerWithCopy = migration.editContentType('bannerWithCopy');
  const fullImage = migration.editContentType('blockFullImage');
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');

  const elementFindAProvider = migration
    .createContentType('elementFindAProvider')
    .name('Element > Find A Provider (CTA)')
    .description('Find A Provider CTA')
    .displayField('internalName');

  elementFindAProvider
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementFindAProvider
    .createField('buttonCopy')
    .name('Button Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'FIND A SPECIALIST' })
    .validations([])
    .disabled(false)
    .omitted(false);

  elementFindAProvider
    .createField('url')
    .name('URL')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': '/search' })
    .validations([])
    .disabled(false)
    .omitted(false);

  blockBannerWithCopy.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton', 'elementFindAProvider'],
    },
  ]);

  fullImage.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton', 'elementFindAProvider'],
    },
  ]);

  blockImageAndBanner.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton', 'elementFindAProvider'],
    },
  ]);
};
