module.exports = function (migration) {
  // Deleting old Article Page Compose page
  const oldArticlePage = migration.deleteContentType('pageArticle');

  // Deleting old Landing Page Compose page
  const oldLandingPage = migration.deleteContentType('pageLandingPage');

  // Update Article Page description
  const articlePage = migration.editContentType('articlePage');
  articlePage.description('Compose Article Page Container');

  // Update Landing Page description
  const landingPage = migration.editContentType('landingPage');
  landingPage.description('Compose Landing Page Container');
};
