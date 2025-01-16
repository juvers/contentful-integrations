const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );

  blockHeroWithBackgroundVideo.changeFieldControl(
    'showControls',
    'builtin',
    'boolean',
    {
      helpText: helpText.videoControl.showControls,
    }
  );

  blockHeroWithBackgroundVideo.changeFieldControl(
    'playAudio',
    'builtin',
    'boolean',
    {
      helpText: helpText.videoControl.playAudio,
    }
  );
};
