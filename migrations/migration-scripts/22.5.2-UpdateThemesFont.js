const helpText = require('../constants/helpText');
module.exports = function (migration) {
  const themeBeforeAndAfter = migration.editContentType('themeBeforeAndAfter');
  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  const themeFullImage = migration.editContentType('themeFullImage');
  const themeValueProposition = migration.editContentType(
    'valuePropositionTheme'
  );
  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  const themeLogos = migration.editContentType('themeLogos');
  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');

  themeBeforeAndAfter.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  themeBannerWithCopy.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  themeValueProposition.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  themeImageAndBanner.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  themeHeroWithBackgroundVideo.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  themeFullImage.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.default,
  });

  themeLogos.changeFieldControl('brandHeaderFont', 'builtin', 'singleLine', {
    helpText: helpText.fonts.default,
  });
};
