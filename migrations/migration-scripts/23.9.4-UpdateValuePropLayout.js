module.exports = function (migration) {
  const block = migration.editContentType('valuePropositionBlock');

  // Updating helper text
  block.changeFieldControl('boxImageAspectRatio', 'builtin', 'dropdown', {
    helpText:
      'Default image aspect ratio is 1:1 (width:height). It will be used to the image/icon on all boxes',
  });

  // Moving new field
  block.moveField('boxImageAspectRatio').afterField('subhead');

  const editorLayout = block.editEditorLayout();
  editorLayout.moveField('boxImageAspectRatio').afterField('subhead');
};
