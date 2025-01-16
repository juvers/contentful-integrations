module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const offerLandingPage = migration.editContentType('templateOptInOffer');
  const providerSearchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  landingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
          'valuePropositionBlock',
        ],
      },
    ],
    linkType: 'Entry',
  });

  offerLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
          'valuePropositionBlock',
        ],
      },
    ],
    linkType: 'Entry',
  });

  providerSearchLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
          'valuePropositionBlock',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
