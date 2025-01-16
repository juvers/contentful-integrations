module.exports = function (migration) {
  const blockBannerWithCopy = migration.editContentType('bannerWithCopy');
  const fullImage = migration.editContentType('blockFullImage');
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  const elementCTA = migration.editContentType('ctaButton');
  const blockLogoHeader = migration.editContentType('blockLogoHeader');

  const offerCTAButton = migration
    .createContentType('offerCTAButton')
    .name('Element > Offer Button (CTA)')
    .description('Element with Offer Button CTA')
    .displayField('internalName');

  offerCTAButton
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  offerCTAButton
    .createField('buttonCopy')
    .name('Button Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockBannerWithCopy.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton'],
    },
  ]);

  fullImage.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton'],
    },
  ]);

  blockImageAndBanner.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton'],
    },
  ]);

  blockLogoHeader.editField('cta').validations([
    {
      linkContentType: ['ctaButton', 'offerCTAButton'],
    },
  ]);

  elementCTA.deleteField('disabledCopy');
};
