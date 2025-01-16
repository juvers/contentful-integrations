module.exports = function (migration) {
  migration
    .editContentType('blockClaimConfiguration')
    .editField('claimNotEligibleButton')
    .name('Claim Not Eligible CTA(s)');

  migration
    .editContentType('blockClaimConfiguration')
    .changeFieldControl(
      'claimNotEligibleButton',
      'builtin',
      'entryLinksEditor',
      {
        helpText: 'Enter either 1 or 2 Claim Not Eligible CTA(s).',
      }
    );

  migration
    .editContentType('blockClaimConfiguration')
    .editField('alreadyRedeemedButton')
    .name('Already Redeemed CTA(s)');

  migration
    .editContentType('blockClaimConfiguration')
    .changeFieldControl(
      'alreadyRedeemedButton',
      'builtin',
      'entryLinksEditor',
      {
        helpText: 'Enter either 1 or 2 Already Redeemed CTA(s).',
      }
    );

  migration
    .editContentType('blockClaimConfiguration')
    .editField('claimSuccessButton')
    .name('Claim Success CTA')
    .required(false);

  migration
    .editContentType('blockClaimConfiguration')
    .changeFieldControl('claimSuccessButton', 'builtin', 'entryLinkEditor', {
      helpText:
        '"Go to wallet" CTA will be added by default. One additional CTA may be added below.',
    });

  migration
    .editContentType('blockClaimConfiguration')
    .editField('alreadyClaimedButton')
    .name('Already Claimed CTA')
    .required(false);

  migration
    .editContentType('blockClaimConfiguration')
    .changeFieldControl('alreadyClaimedButton', 'builtin', 'entryLinkEditor', {
      helpText:
        '"View offer in wallet" CTA will be added by default. One additional CTA may be added below.',
    });
};
