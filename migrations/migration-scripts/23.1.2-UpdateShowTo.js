const validation = require('../constants/validation');

module.exports = function (migration) {
  const bannerWithCopy = migration.editContentType('bannerWithCopy');
  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');
  const blockFullImage = migration.editContentType('blockFullImage');
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  const blockLogos = migration.editContentType('blockLogos');
  const valuePropositionBlock = migration.editContentType(
    'valuePropositionBlock'
  );

  const blockImageAndBannerLayout = blockImageAndBanner.editEditorLayout();
  blockImageAndBannerLayout.moveField('showTo').afterField('internalName');

  bannerWithCopy.editField('showTo').required(false);

  blockBeforeAndAfter.editField('showTo').required(false);

  blockFullImage.editField('showTo').required(false);

  blockHeroWithBackgroundVideo.editField('showTo').required(false);

  blockImageAndBanner.editField('showTo').required(false);

  blockLogos.editField('showTo').required(false);

  valuePropositionBlock.editField('showTo').required(false);
};
