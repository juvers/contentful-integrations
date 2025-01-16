module.exports = function (migration) {
  const optInLandingPage = migration.editContentType('optInOfferLandingPage');

  optInLandingPage
    .createField('claimCTADestination')
    .name('Claim CTA Destination')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['Allē Registration', 'Allē Log-in'],
      },
    ])
    .defaultValue({ 'en-US': 'Allē Registration' })
    .disabled(false)
    .omitted(false);
};
