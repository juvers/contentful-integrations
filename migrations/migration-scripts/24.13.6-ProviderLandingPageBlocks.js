module.exports = function (migration) {
  const businessLandingPage = migration.editContentType('businessLandingPage');

  // add full image & logos blocks
  businessLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockImageAndBanner',
          'valuePropositionBlock',
          'blockHeroWithBackgroundVideo',
          'blockFullImage',
          'blockLogos',
        ],
      },
    ],
    linkType: 'Entry',
  });

  // add terms and conditions block
  businessLandingPage
    .createField('termsAndConditions')
    .name('Terms and Conditions')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockCopy'],
      },
    ]);

  // remove footer field
  businessLandingPage.deleteField('footer');
};
