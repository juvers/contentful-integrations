const helpText = require('../constants/helpText');
const { videoHeight } = require('../constants/helpText');

module.exports = function (migration) {
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );

  blockHeroWithBackgroundVideo.changeFieldControl(
    'backgroundVideo',
    'builtin',
    'entryLinkEditor',
    {
      helpText: helpText.videoSize.default,
    }
  );

  blockHeroWithBackgroundVideo.changeFieldControl(
    'mobileBackgroundVideo',
    'builtin',
    'entryLinkEditor',
    {
      helpText: helpText.videoSize.default,
    }
  );

  blockHeroWithBackgroundVideo.changeFieldControl(
    'videoHeight',
    'builtin',
    'boolean',
    {
      helpText: videoHeight.default,
    }
  );
};
