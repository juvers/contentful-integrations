module.exports = function (migration) {
  const offerValueHelpText =
    'This value in Compose > Opt-In Offer Landing Page supports {{offerValue}}';

  migration
    .editContentType('blockCopy')
    .changeFieldControl('copy', 'builtin', 'richTextEditor', {
      helpText: `${offerValueHelpText} and {{offerExpirationDays}}`,
    });
  migration
    .editContentType('blockFullImage')
    .changeFieldControl('copy', 'builtin', 'richTextEditor', {
      helpText: offerValueHelpText,
    });
  migration
    .editContentType('blockImageAndBanner')
    .changeFieldControl('copy', 'builtin', 'richTextEditor', {
      helpText: offerValueHelpText,
    });
  migration
    .editContentType('offerCTAButton')
    .changeFieldControl('buttonCopy', 'builtin', 'singleLine', {
      helpText: offerValueHelpText,
    });
  migration
    .editContentType('blockClaimConfiguration')
    .changeFieldControl('claimSuccessHeadline', 'builtin', 'singleLine', {
      helpText: offerValueHelpText,
    });
  migration
    .editContentType('composeOptInOfferLandingPage')
    .changeFieldControl('offerValue', 'builtin', 'singleLine', {
      helpText: 'Offer value with currency symbol (Ex: $75)',
    });
};
