const helpText = require('../constants/helpText');

/**
 *
 * @param {import('contentful-migration').default} migration Migration Object
 * @param {import('contentful-migration').MigrationContext} context Context Object
 */
module.exports = function (migration) {
  const themeFullImage = migration.editContentType('themeFullImage');
  const editorLayout = themeFullImage.editEditorLayout();

  themeFullImage.changeFieldControl(
    'desktopHeadlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  themeFullImage.changeFieldControl(
    'mobileHeadlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  editorLayout.editFieldGroup('desktop');
  editorLayout.moveField('desktopHeadlineTextColor').afterField('textColor');

  editorLayout.editFieldGroup('mobile');
  editorLayout
    .moveField('mobileHeadlineTextColor')
    .afterField('mobileTextColor');
};
