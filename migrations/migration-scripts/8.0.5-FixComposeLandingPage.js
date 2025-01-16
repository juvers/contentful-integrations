module.exports = function (migration) {
  const composeLandingPage = migration.editContentType('pageLandingPage');

  composeLandingPage.deleteField('offerConfig');
  composeLandingPage.deleteField('mlrc');
  composeLandingPage.deleteField('segmentMetadata');
};
