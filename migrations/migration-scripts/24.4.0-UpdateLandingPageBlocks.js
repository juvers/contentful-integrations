const validation = require('../constants/validation');

module.exports = function (migration) {
  const bannerWithCopy = migration.editContentType('bannerWithCopy');
  bannerWithCopy.editField('cta').validations([validation.landingPageButtons]);

  const fullImage = migration.editContentType('blockFullImage');
  fullImage
    .editField('cta')
    .validations([validation.landingPageButtonsWithSweeps]);

  const imageAndBanner = migration.editContentType('blockImageAndBanner');
  imageAndBanner
    .editField('cta')
    .validations([validation.landingPageButtonsWithSweeps]);

  const heroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );
  heroWithBackgroundVideo.editField('cta').items({
    type: 'Link',
    validations: [validation.landingPageButtons],
    linkType: 'Entry',
  });

  const valueProposition = migration.editContentType('valuePropositionBlock');
  valueProposition.editField('otherElements').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockCopy',
          'blockFootnote',
          'buttonWithIcon',
          'ctaButton',
          'elementFindASpecialist',
          'elementRegistrationCTA',
          'offerCTAButton',
        ],
      },
    ],
    linkType: 'Entry',
  });

  const logos = migration.editContentType('blockLogos');
  logos.editField('otherElements').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockCopy',
          'blockFootnote',
          'buttonWithIcon',
          'ctaButton',
          'elementFindASpecialist',
          'elementRegistrationCTA',
          'offerCTAButton',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
