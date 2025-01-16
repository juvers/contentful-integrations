module.exports = function (migration) {
  //Delete deprecated content type
  migration.deleteContentType('landingPageMetadata');

  //Edit Landing Page field
  const landingPage = migration.editContentType('landingPage');
  landingPage.changeFieldControl(
    'metaConcernArea',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );
};
