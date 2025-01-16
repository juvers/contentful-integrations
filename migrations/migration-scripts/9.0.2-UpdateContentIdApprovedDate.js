module.exports = function (migration) {
  const elementMLRC = migration.editContentType('elementMLRC');

  elementMLRC.editField('approvedDate').required(true);
  elementMLRC.editField('contentId').required(true);

  const composeLandingPage = migration.editContentType('pageLandingPage');
  composeLandingPage.editField('mlrc').required(true);
};
