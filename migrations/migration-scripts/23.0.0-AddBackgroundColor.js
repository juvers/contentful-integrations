const { solidColor } = require('../constants/validation');
const { hexColor } = require('../constants/helpText');
module.exports = function (migration) {
  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  themeHeroWithBackgroundVideo
    .createField('backgroundColor')
    .name('Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .defaultValue({ 'en-US': '#FFFFFF' })
    .omitted(false)
    .validations([solidColor]);
  themeHeroWithBackgroundVideo.changeFieldControl(
    'backgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );
  blockHeroWithBackgroundVideo.deleteField('backgroundVideo');
  blockHeroWithBackgroundVideo.deleteField('mobileBackgroundVideo');
};
