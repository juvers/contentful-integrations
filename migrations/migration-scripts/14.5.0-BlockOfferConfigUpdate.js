module.exports = function (migration) {
  migration
    .editContentType('blockClaimConfiguration')
    .editField('claimNotEligibleHeadline')
    .defaultValue({ 'en-US': 'Oops! Sorry about that.' });

  migration
    .editContentType('blockClaimConfiguration')
    .editField('alreadyClaimedHeadline')
    .defaultValue({ 'en-US': 'Offer already claimed.' });

  migration
    .editContentType('blockClaimConfiguration')
    .editField('alreadyRedeemedHeadline')
    .defaultValue({ 'en-US': 'Offer already redeemed.' });
};
