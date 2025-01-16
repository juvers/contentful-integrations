const validation = require('../constants/validation');
const helpText = require('../constants/helpText');
module.exports = function (migration) {
  const themeBeforeAndAfter = migration.editContentType('themeBeforeAndAfter');
  themeBeforeAndAfter
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeBeforeAndAfter.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.brandedHeader,
    }
  );

  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  themeBannerWithCopy
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeBannerWithCopy.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.brandedHeader,
    }
  );

  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');
  themeImageAndBanner
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeImageAndBanner.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.brandedHeader,
    }
  );

  const themeFullImage = migration.editContentType('themeFullImage');
  themeFullImage
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeFullImage.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.brandedHeader,
  });

  const themeValueProposition = migration.editContentType(
    'valuePropositionTheme'
  );
  themeValueProposition
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeValueProposition.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.brandedHeader,
    }
  );

  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  themeHeroWithBackgroundVideo
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeHeroWithBackgroundVideo.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.brandedHeader,
    }
  );

  const themeLogos = migration.editContentType('themeLogos');
  themeLogos
    .editField('brandHeaderFont')
    .validations([validation.fonts.brandedHeader]);
  themeLogos.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.brandedHeader,
  });
};
