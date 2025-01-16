// @ts-check
module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');

  // MLRC fields
  landingPage.editField('approvedForDistribution').required(true);

  landingPage.editField('approvedDate').required(true);

  landingPage.editField('contentId').required(true);
};
