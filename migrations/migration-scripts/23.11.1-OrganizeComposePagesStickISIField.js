module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const offerTemplatePage = migration.editContentType('templateOptInOffer');
  const searchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  //Move Provider Search Landing Page fields on web app
  searchLandingPage.moveField('showStickyIsi').beforeField('brand');

  //Move Landing Page fields on web app
  landingPage.moveField('showStickyIsi').beforeField('brand');

  //Move Offer Landing Page fields on web app
  offerTemplatePage.moveField('showStickyIsi').beforeField('brand');

  //Move Provider Search Landing Page fields in Compose
  const searchLandingPageLayout = searchLandingPage.editEditorLayout();
  searchLandingPageLayout.moveField('showStickyIsi').beforeField('brand');

  //Move Landing Page fields in Compose
  const landingPageLayout = landingPage.editEditorLayout();
  landingPageLayout.moveField('showStickyIsi').beforeField('brand');

  //Move Offer Landing Page fields in Compose
  const offerTemplatePageLayout = offerTemplatePage.editEditorLayout();
  offerTemplatePageLayout.moveField('showStickyIsi').beforeField('brand');
};
