const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const offerLandingPage = migration.editContentType(
    'composeOptInOfferLandingPage'
  );
  const providerSearchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  landingPage.changeFieldControl('redirectTo', 'builtin', 'singleLine', {
    helpText: `${helpText.urlFormatting.redirect}`,
  });

  offerLandingPage.changeFieldControl('redirectTo', 'builtin', 'singleLine', {
    helpText: `${helpText.urlFormatting.redirect}`,
  });

  providerSearchLandingPage.changeFieldControl(
    'redirectTo',
    'builtin',
    'singleLine',
    {
      helpText: `${helpText.urlFormatting.redirect}`,
    }
  );
};
