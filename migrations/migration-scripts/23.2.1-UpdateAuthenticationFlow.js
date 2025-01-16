module.exports = function (migration) {
  const composeLandingPage = migration.editContentType('landingPage');
  composeLandingPage.changeFieldControl(
    'authenticationFlow',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: true,
    }
  );
  const editorLayoutLandingPage = composeLandingPage.editEditorLayout();
  editorLayoutLandingPage.editFieldGroup('pageContent');
  editorLayoutLandingPage.moveField('authenticationFlow').afterField('slug');
};
