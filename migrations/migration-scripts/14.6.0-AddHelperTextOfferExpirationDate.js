module.exports = function (migration) {
  migration
    .editContentType('blockClaimConfiguration')
    .changeFieldControl('claimSuccessMessage', 'builtin', 'richTextEditor', {
      helpText:
        'This value in Compose > Opt-In Offer Landing Page supports {{offerExpirationDate}}',
    });
};
