module.exports = function (migration) {
  const optInLandingPage = migration.editContentType('optInOfferLandingPage');
  const editorLayoutLandingPage = optInLandingPage.editEditorLayout();

  editorLayoutLandingPage.editFieldGroup('offerConfiguration');
  editorLayoutLandingPage.moveField('offerClaim').afterField('promotionId');
};
