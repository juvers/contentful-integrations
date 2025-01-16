// @ts-check
module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const editorLayout = landingPage.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');
  editorLayout.createFieldGroup('mlrc').name('MLRC');

  // Page Content
  editorLayout.moveField('name').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('name');
  editorLayout.moveField('header').afterField('slug');
  editorLayout.moveField('blocks').afterField('header');
  editorLayout.moveField('termsAndConditions').afterField('blocks');
  editorLayout.moveField('brand').afterField('termsAndConditions');
  editorLayout.moveField('footer').afterField('brand');

  // Metadata
  metadataTab.createFieldGroup('segment').name('Segment Tracking');
  editorLayout.moveField('campaignId').toTheTopOfFieldGroup('segment');
  editorLayout.moveField('campaignName').afterField('campaignId');
  editorLayout.moveField('metaConcernArea').afterField('campaignName');
  editorLayout.moveField('metaProduct').afterField('metaConcernArea');
  editorLayout.moveField('metaUserJourney').afterField('metaProduct');
  metadataTab.createFieldGroup('seo').name('SEO');
  editorLayout.moveField('metaDescription').toTheTopOfFieldGroup('seo');
  editorLayout.moveField('metaTitle').afterField('metaDescription');

  // MLRC
  editorLayout
    .moveField('approvedForDistribution')
    .toTheTopOfFieldGroup('mlrc');
  editorLayout.moveField('approvedDate').afterField('approvedForDistribution');
  editorLayout.moveField('contentId').afterField('approvedDate');
};
