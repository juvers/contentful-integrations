module.exports = function (migration) {
  const articlePage = migration.editContentType('articlePage');

  articlePage.changeFieldControl('hero', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });
};
