module.exports = function (migration) {
  // Making Article Page content type a Compose page
  const articlePage = migration.editContentType('articlePage');
  articlePage.setAnnotations(['Contentful:AggregateRoot']);

  // Making Landing Page content type a Compose page
  const landingPage = migration.editContentType('landingPage');
  landingPage.setAnnotations(['Contentful:AggregateRoot']);
};
