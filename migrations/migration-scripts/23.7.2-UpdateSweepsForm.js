module.exports = function (migration) {
  const form = migration.editContentType('elementSweepstakesForm');
  form.changeFieldControl('sweepstakeId', 'builtin', 'singleLine', {
    helpText:
      'This ID must be a UUID. You can generate one here: uuidgenerator.net. Copy the UUID at the top of the page and paste here.',
  });
  const editorLayout = form.editEditorLayout();
  editorLayout.moveField('sweepstakeId').afterField('internalName');

  const authFlow = migration.editContentType('blockAuthenticationFlow');
  authFlow.changeFieldControl(
    'authenticationSuccessRedirectUrl',
    'builtin',
    'singleLine',
    {
      helpText:
        'This field will be ignored if there is an Authentication Success Screen.',
    }
  );
};
