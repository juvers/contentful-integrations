const {
  entryHyperlinkTypeLink,
  richTextBoldUnderlineItalic,
  richTextLinks,
  showTo,
  slug,
} = require('../constants/validation');

module.exports = function (migration) {
  const providerOffer = migration
    .createContentType('providerOffer')
    .name('Block > Provider Offer')
    .description('Provider Offer')
    .displayField('internalName');

  providerOffer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerOffer
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

  providerOffer
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

  providerOffer
    .createField('promotionId')
    .name('Promotion Id')
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

  providerOffer
    .createField('offerValue')
    .name('Offer Value')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerOffer
    .createField('offerExpiration')
    .name('Offer Expiration')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  providerOffer
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

  providerOffer
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

  providerOffer
    .createField('image')
    .name('Image')
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

  providerOffer
    .createField('heading')
    .name('Heading')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false);

  providerOffer
    .createField('text')
    .name('Text')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);
};
