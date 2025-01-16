module.exports = function (migration) {
  const articleComposePage = migration.editContentType('articlePage');
  // Add new fields
  articleComposePage
    .createField('mobileHero')
    .name('Mobile Hero')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['blockImage', 'blockVideo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  articleComposePage
    .createField('cardSummary')
    .name('Card Summary')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  articleComposePage
    .createField('redirectTo')
    .name('Redirect To')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern:
            '^((https):\\/\\/((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3})))(\\:\\d+)?(\\/[-a-z\\d%_.~+*]*)*|^\\/[-a-z\\d%_.~+]*',
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);
  articleComposePage
    .createField('redirectNotification')
    .name('Redirect Notification')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // grouping
  const editorLayout = articleComposePage.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  editorLayout.createFieldGroup('redirect').name('Redirect');

  // Page Content
  editorLayout.moveField('name').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('name');
  editorLayout.moveField('breadcrumb').afterField('slug');
  editorLayout.moveField('headline').afterField('breadcrumb');
  editorLayout.moveField('cardSummary').afterField('headline');
  editorLayout.moveField('hero').afterField('cardSummary');
  editorLayout.moveField('mobileHero').afterField('hero');
  editorLayout.moveField('blocks').afterField('mobileHero');
  editorLayout.moveField('brands').afterField('blocks');

  // Redirect
  editorLayout.moveField('redirectTo').toTheTopOfFieldGroup('redirect');
  editorLayout.moveField('redirectNotification').afterField('redirectTo');

  // Delete old version of MLRC handling
  articleComposePage.deleteField('mlrc');
};
