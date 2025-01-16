module.exports = function (migration) {
  const lp = migration.editContentType('landingPage');
  const composeLayout = lp.editEditorLayout();
  composeLayout.editFieldGroup('pageContent');
  composeLayout.moveField('pageType').afterField('name');
};
