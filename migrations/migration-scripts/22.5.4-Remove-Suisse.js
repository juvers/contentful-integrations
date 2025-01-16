const validation = require('../constants/validation');
const helpText = require('../constants/helpText');
module.exports = function (migration) {
  const themeBeforeAndAfter = migration.editContentType('themeBeforeAndAfter');

  themeBeforeAndAfter.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeBeforeAndAfter.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  themeBannerWithCopy.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeBannerWithCopy.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');
  themeImageAndBanner.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeImageAndBanner.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  const themeFullImage = migration.editContentType('themeFullImage');
  themeFullImage.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeFullImage.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.default,
  });

  const themeValueProposition = migration.editContentType(
    'valuePropositionTheme'
  );
  themeValueProposition.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeValueProposition.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  themeHeroWithBackgroundVideo.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeHeroWithBackgroundVideo.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  const themeLogos = migration.editContentType('themeLogos');
  themeLogos.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeLogos.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.default,
  });
};
