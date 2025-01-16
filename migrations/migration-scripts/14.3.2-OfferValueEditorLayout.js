module.exports = function (migration) {
  const editorLayout = migration
    .editContentType('optInOfferLandingPage')
    .editEditorLayout();
  editorLayout.moveField('offerValue').beforeField('offerAmount');

  const editorLayoutv2 = migration
    .editContentType('composeOptInOfferLandingPage')
    .editEditorLayout();
  editorLayoutv2.editFieldGroup('offerConfiguration');
  editorLayoutv2.moveField('offerValue').beforeField('offerAmount');
};
