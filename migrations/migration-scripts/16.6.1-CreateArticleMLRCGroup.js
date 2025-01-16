module.exports = function (migration) {
  const article = migration.editContentType('articlePage');

  article.changeFieldControl('approvedDate', 'builtin', 'datePicker', {
    format: 'dateonly',
  });
  article.changeFieldControl('contentId', 'builtin', 'singleLine', {
    helpText: 'Use the PRT/Veeva number as Content Id',
  });

  const editorLayout = article.editEditorLayout();
  editorLayout.createFieldGroup('mlrc').name('MLRC');
  editorLayout
    .moveField('approvedForDistribution')
    .toTheTopOfFieldGroup('mlrc');
  editorLayout.moveField('approvedDate').afterField('approvedForDistribution');
  editorLayout.moveField('contentId').afterField('approvedDate');
};
