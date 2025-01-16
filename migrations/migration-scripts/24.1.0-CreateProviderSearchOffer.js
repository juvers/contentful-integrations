const {
  richTextListsTablesLinksHeadingsStyles,
  showTo,
  slug,
} = require('../constants/validation');

module.exports = function (migration) {
  const providerSearchOffer = migration
    .createContentType('blockProviderSearchOffer')
    .name('Block > Provider Search Offer')
    .description('Search Offer')
    .displayField('internalName');

  providerSearchOffer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      slug,
    ])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('offerName')
    .name('Offer Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('offerId')
    .name('Offer Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('offerPromotionId')
    .name('Offer Promotion Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('offerValue')
    .name('Offer Value')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('offerExpiration')
    .name('Offer Expiration')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer.changeFieldControl(
    'offerExpiration',
    'builtin',
    'datePicker',
    {
      format: 'dateonly',
    }
  );

  providerSearchOffer
    .createField('offerStatus')
    .name('Offer Status')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: showTo.offerStatus,
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'Not Active' });

  providerSearchOffer
    .createField('eligibleUsers')
    .name('Eligible Users')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['All', 'New', 'Existing'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' });

  providerSearchOffer
    .createField('offerTerms')
    .name('Offer Terms')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([richTextListsTablesLinksHeadingsStyles]);

  providerSearchOffer
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('campaignSource')
    .name('Campaign Source')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('preheading')
    .name('CTA preheading')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false);

  providerSearchOffer
    .createField('ctaHeading')
    .name('CTA Heading')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false);
};
