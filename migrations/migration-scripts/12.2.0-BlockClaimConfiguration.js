module.exports = function (migration) {
  const themeClaimConfiguration = migration
    .createContentType('themeClaimConfiguration')
    .name('Theme > Claim Configuration')
    .description('Styles to support Theme > Claim Configuration')
    .displayField('internalName');

  themeClaimConfiguration
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  themeClaimConfiguration
    .createField('bannerColor')
    .name('Banner Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeClaimConfiguration
    .createField('spinnerBackgroundColor')
    .name('Spinner Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeClaimConfiguration
    .createField('spinnerColor')
    .name('Spinner Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  const blockClaimConfiguration = migration
    .createContentType('blockClaimConfiguration')
    .name('Block > Claim Configuration')
    .description('Block Claim Configuration')
    .displayField('internalName');

  blockClaimConfiguration
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockClaimConfiguration
    .createField('claimSuccessHeadline')
    .name('Claim Success Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockClaimConfiguration
    .createField('claimSuccessMessage')
    .name('Claim Success Message')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyperlink and link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockClaimConfiguration
    .createField('claimSuccessButton')
    .name('Claim Success Button')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['ctaButton'],
      },
    ]);

  blockClaimConfiguration
    .createField('claimNotEligibleButton')
    .name('Claim Not Eligible Button')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['ctaButton'],
        },
      ],
      linkType: 'Entry',
    });

  blockClaimConfiguration
    .createField('claimNotEligibleHeadline')
    .name('Claim Not Eligible Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockClaimConfiguration
    .createField('claimNotEligibleMessage')
    .name('Claim Not Eligible Message')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyberlink and link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockClaimConfiguration
    .createField('alreadyRedeemedButton')
    .name('Already Redeemed Button')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['ctaButton'],
        },
      ],
      linkType: 'Entry',
    });

  blockClaimConfiguration
    .createField('alreadyRedeemedHeadline')
    .name('Already Redeemed Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockClaimConfiguration
    .createField('alreadyRedeemedMessage')
    .name('Already Redeemed Message')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyberlink and link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockClaimConfiguration
    .createField('alreadyClaimedButton')
    .name('Already Claimed Button')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['ctaButton'],
      },
    ]);

  blockClaimConfiguration
    .createField('alreadyClaimedHeadline')
    .name('Already Claimed Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockClaimConfiguration
    .createField('alreadyClaimedMessage')
    .name('Already Claimed Message')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyberlink and link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockClaimConfiguration
    .createField('claimFlowLogo')
    .name('Claim Flow Logo')
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

  blockClaimConfiguration
    .createField('claimFlowTheme')
    .name('Claim Flow Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeClaimConfiguration'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  const landingPageOptInOffer = migration.editContentType(
    'optInOfferLandingPage'
  );

  landingPageOptInOffer
    .createField('offerClaim')
    .name('Offer Claim')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['blockClaimConfiguration'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  const editorLayout = blockClaimConfiguration.createEditorLayout();
  editorLayout.createFieldGroup('overview').name('Overview');
  editorLayout.createFieldGroup('claimNotEligible').name('Claim Not Eligible');
  editorLayout.createFieldGroup('claimSuccess').name('Claim Success');
  editorLayout.createFieldGroup('alreadyClaimed').name('Already Claimed');
  editorLayout.createFieldGroup('alreadyRedeemed').name('Already Redeemed');

  // Overview
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('overview');
  editorLayout.moveField('claimFlowLogo').afterField('internalName');
  editorLayout.moveField('claimFlowTheme').afterField('claimFlowLogo');

  // Claim Not Eligible
  editorLayout
    .moveField('claimNotEligibleHeadline')
    .toTheTopOfFieldGroup('claimNotEligible');
  editorLayout
    .moveField('claimNotEligibleMessage')
    .afterField('claimNotEligibleHeadline');
  editorLayout
    .moveField('claimNotEligibleButton')
    .afterField('claimNotEligibleMessage');

  // Claim Success
  editorLayout
    .moveField('claimSuccessHeadline')
    .toTheTopOfFieldGroup('claimSuccess');
  editorLayout
    .moveField('claimSuccessMessage')
    .afterField('claimSuccessHeadline');
  editorLayout
    .moveField('claimSuccessButton')
    .afterField('claimSuccessMessage');

  // Already Claimed
  editorLayout
    .moveField('alreadyClaimedHeadline')
    .toTheTopOfFieldGroup('alreadyClaimed');
  editorLayout
    .moveField('alreadyClaimedMessage')
    .afterField('alreadyClaimedHeadline');
  editorLayout
    .moveField('alreadyClaimedButton')
    .afterField('alreadyClaimedMessage');

  // Already Redeemed
  editorLayout
    .moveField('alreadyRedeemedHeadline')
    .toTheTopOfFieldGroup('alreadyRedeemed');
  editorLayout
    .moveField('alreadyRedeemedMessage')
    .afterField('alreadyRedeemedHeadline');
  editorLayout
    .moveField('alreadyRedeemedButton')
    .afterField('alreadyRedeemedMessage');
};
