module.exports = function (migration) {
  const form = migration.editContentType('elementSweepstakesForm');
  form.changeFieldControl('officialRulesUrl', 'builtin', 'singleLine', {
    helpText: 'This will be used in the Sweepstakes Confirmation Email',
  });
  form.moveField('officialRulesUrl').afterField('sweepstakeId');

  const editorLayout = form.editEditorLayout();
  editorLayout.moveField('officialRulesUrl').afterField('sweepstakeId');
};
