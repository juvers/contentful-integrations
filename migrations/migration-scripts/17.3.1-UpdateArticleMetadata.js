module.exports = function (migration) {
  const article = migration.editContentType('articlePage');

  const editorLayout = article.editEditorLayout();

  article.changeFieldControl(
    'metaContentVisual',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  article.changeFieldControl('metaConcernArea', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  article.changeFieldControl('metaContentTags', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  article.changeFieldControl('metaUserJourney', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  article.changeFieldControl('metaProduct', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  // Metadata
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');
  metadataTab.createFieldGroup('segment').name('Segment Tracking');
  editorLayout.moveField('campaignId').toTheTopOfFieldGroup('segment');
  editorLayout.moveField('campaignName').afterField('campaignId');
  editorLayout.moveField('metaConcernArea').afterField('campaignName');
  editorLayout.moveField('metaProduct').afterField('metaConcernArea');
  editorLayout.moveField('metaUserJourney').afterField('metaProduct');
  editorLayout.moveField('metaContentTags').afterField('metaUserJourney');
  editorLayout.moveField('metaContentVisual').afterField('metaContentTags');
};
