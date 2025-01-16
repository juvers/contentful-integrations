module.exports = function (migration) {
  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  themeBannerWithCopy.editField('ctaBackgroundColor').required(false);
  themeBannerWithCopy.editField('ctaTextColor').required(false);

  const themeFullImage = migration.editContentType('themeFullImage');
  themeFullImage.editField('textColor').required(false);
  themeFullImage.editField('textBackgroundColor').required(false);
  themeFullImage.editField('disclaimerTextColor').required(false);
  themeFullImage.editField('ctaBackgroundColor').required(false);
  themeFullImage.editField('ctaTextColor').required(false);

  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');
  themeImageAndBanner.editField('ctaBackgroundColor').required(false);
  themeImageAndBanner.editField('ctaTextColor').required(false);
  themeImageAndBanner.editField('disclaimerTextColor').required(false);

  const themeLogoHeader = migration.editContentType('themeLogoHeader');
  themeLogoHeader.editField('linkTextColor').required(false);
};
