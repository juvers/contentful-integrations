module.exports = function (migration) {
  const articlePage = migration.editContentType('articlePage');
  const landingPage = migration.editContentType('landingPage');
  const offerLandingPage = migration.editContentType(
    'composeOptInOfferLandingPage'
  );

  //Move Article fields on web app
  articlePage.moveField('metaTitle').afterField('metaContentVisual');
  articlePage.moveField('metaDescription').afterField('metaTitle');
  articlePage.moveField('ogImage').afterField('metaDescription');
  articlePage.moveField('keywords').afterField('ogImage');

  //Move Landing Page fields on web app
  landingPage.moveField('metaDescription').afterField('metaTitle');
  landingPage.moveField('ogImage').afterField('metaDescription');
  landingPage.moveField('keywords').afterField('ogImage');

  //Move Offer Landing Page fields on web app
  offerLandingPage.moveField('metaDescription').afterField('metaTitle');
  offerLandingPage.moveField('ogImage').afterField('metaDescription');
  offerLandingPage.moveField('keywords').afterField('ogImage');

  //Move Article fields in Compose
  const articleLayout = articlePage.editEditorLayout();
  const articleMetadataTab = articleLayout.editFieldGroup('metadata');
  // Article SEO sub-group
  articleMetadataTab.createFieldGroup('seo').name('SEO');
  articleLayout.moveField('metaTitle').toTheTopOfFieldGroup('seo');
  articleLayout.moveField('metaDescription').afterField('metaTitle');
  articleLayout.moveField('ogImage').afterField('metaDescription');
  articleLayout.moveField('keywords').afterField('ogImage');

  //Move Landing Page fields in Compose
  const landingPageLayout = landingPage.editEditorLayout();
  // Landing Page SEO sub-group
  landingPageLayout.moveField('metaTitle').toTheTopOfFieldGroup('seo');
  landingPageLayout.moveField('metaDescription').afterField('metaTitle');
  landingPageLayout.moveField('ogImage').afterField('metaDescription');
  landingPageLayout.moveField('keywords').afterField('ogImage');

  //Move Offer Landing Page fields in Compose
  const offerLandingPageLayout = offerLandingPage.editEditorLayout();
  // Offer Landing Page SEO sub-group
  offerLandingPageLayout.moveField('metaTitle').toTheTopOfFieldGroup('seo');
  offerLandingPageLayout.moveField('metaDescription').afterField('metaTitle');
  offerLandingPageLayout.moveField('ogImage').afterField('metaDescription');
  offerLandingPageLayout.moveField('keywords').afterField('ogImage');
};
