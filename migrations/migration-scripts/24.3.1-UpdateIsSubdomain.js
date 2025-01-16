module.exports = function (migration) {
  const composeProviderSearchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  composeProviderSearchLandingPage.changeFieldControl(
    'isSubdomain',
    'builtin',
    'boolean',
    {
      helpText:
        'If true, the landing page in consumer web will redirect to the new subdomain based landing page app. The value of the Slug property will be the subdomain.',
    }
  );

  composeProviderSearchLandingPage.moveField('isSubdomain').afterField('slug');

  const editorLayout = composeProviderSearchLandingPage.editEditorLayout();

  editorLayout.moveField('isSubdomain').afterField('slug');
};
