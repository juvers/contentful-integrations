const {
  richTextListsTablesLinksHeadingsStyles,
  showTo,
  slug,
} = require('../constants/validation');

module.exports = function (migration) {
  migration.deleteContentType('providerOffer');

  const providerConsultationOffer = migration
    .createContentType('providerConsultationOffer')
    .name('Block > Provider Consultation Offer')
    .description('Provider Consultation Offer')
    .displayField('internalName');

  providerConsultationOffer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
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

  providerConsultationOffer
    .createField('offerName')
    .name('Offer Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
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

  providerConsultationOffer
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

  providerConsultationOffer
    .createField('offerValue')
    .name('Offer Value')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([
      {
        range: {
          min: 5,
          max: 100,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
    .createField('offerExpiration')
    .name('Offer Expiration')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer.changeFieldControl(
    'offerExpiration',
    'builtin',
    'datePicker',
    {
      format: 'dateonly',
    }
  );

  providerConsultationOffer
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

  providerConsultationOffer
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

  providerConsultationOffer
    .createField('offerTerms')
    .name('Offer Terms')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([richTextListsTablesLinksHeadingsStyles]);

  providerConsultationOffer
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
    .createField('campaignSource')
    .name('Campaign Source')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
    .createField('ctaHeading')
    .name('CTA Heading')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: [],
        message: 'Marks are not allowed',
      },
      {
        enabledNodeTypes: [],
        message: 'Nodes are not allowed',
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
    .createField('ctaBadge')
    .name('CTA Badge')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false);

  providerConsultationOffer
    .createField('ctaBannerSmall')
    .name('CTA Banner Small')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  providerConsultationOffer
    .createField('ctaBannerLarge')
    .name('CTA Banner Large')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  providerConsultationOffer
    .createField('modalBanner')
    .name('Modal Banner')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);
};
