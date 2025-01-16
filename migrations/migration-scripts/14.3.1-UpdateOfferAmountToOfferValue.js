module.exports = function (migration) {
  const composeOptInOffer = migration.editContentType('optInOfferLandingPage');
  composeOptInOffer
    .createField('offerValue')
    .name('Offer Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeOptInOffer
    .editField('offerAmount')
    .name('DEPRECATED Offer Amount')
    .required(false);

  const composeOptInOfferv2 = migration.editContentType(
    'composeOptInOfferLandingPage'
  );
  composeOptInOfferv2
    .createField('offerValue')
    .name('Offer Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeOptInOfferv2
    .editField('offerAmount')
    .name('DEPRECATED Offer Amount')
    .required(false);
};
