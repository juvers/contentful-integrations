module.exports = function (migration) {
  const composeLandingPage = migration.editContentType('pageLandingPage');

  composeLandingPage.editField('termsAndConditions').required(false);
};
