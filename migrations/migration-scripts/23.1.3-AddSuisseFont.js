const validation = require('../constants/validation');
const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  const themeBeforeAndAfter = migration.editContentType('themeBeforeAndAfter');
  const themeFullImage = migration.editContentType('themeFullImage');
  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');
  const valuePropositionTheme = migration.editContentType(
    'valuePropositionTheme'
  );
  const themeLogos = migration.editContentType('themeLogos');

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

  themeFullImage.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeFullImage.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.default,
  });

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

  valuePropositionTheme.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  valuePropositionTheme.changeFieldControl(
    'brandHeaderFont',
    'builtin',
    'dropdown',
    {
      helpText: helpText.fonts.default,
    }
  );

  themeLogos.editField('brandHeaderFont').validations([
    {
      in: validation.fonts.default,
    },
  ]);

  themeLogos.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.default,
  });
};
