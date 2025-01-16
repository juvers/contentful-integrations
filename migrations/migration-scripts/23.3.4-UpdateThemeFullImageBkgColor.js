const { hexColor } = require('../constants/helpText');

module.exports = function (migration) {
  // Move into desktop group
  const themeFullImage = migration.editContentType('themeFullImage');
  const editorLayout = themeFullImage.editEditorLayout();

  themeFullImage.changeFieldControl(
    'desktopBlockBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  editorLayout.editFieldGroup('desktop');
  editorLayout
    .moveField('desktopBlockBackgroundColor')
    .afterField('internalName');
};
