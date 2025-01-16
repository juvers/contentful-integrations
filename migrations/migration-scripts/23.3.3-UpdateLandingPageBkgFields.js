const { hexColor } = require('../constants/helpText');
const { solidColor } = require('../constants/validation');

module.exports = function (migration) {
  // Creating Block Video Theme
  const blockVideoTheme = migration
    .createContentType('themeBlockVideo')
    .name('Theme > Block Video')
    .description('Theme for Block > Video')
    .displayField('internalName');

  blockVideoTheme
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([]);
  // Adding field to Block Video Theme
  blockVideoTheme
    .createField('blockBackgroundColor')
    .name('Block Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);

  blockVideoTheme.changeFieldControl(
    'blockBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  // Adding new theme to block video element
  const blockVideo = migration.editContentType('blockVideo');
  blockVideo
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeBlockVideo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockVideo.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });

  // Adding Background Color to Full Image Theme Desktop Group
  const themeFullImage = migration.editContentType('themeFullImage');

  // Adding new field
  themeFullImage
    .createField('desktopBlockBackgroundColor')
    .name('Desktop Block Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([solidColor])
    .disabled(false)
    .omitted(false);
};
