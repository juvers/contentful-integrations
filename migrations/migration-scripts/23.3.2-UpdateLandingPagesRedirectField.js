const helpText = require('../constants/helpText');

module.exports = function (migration) {
  // landing page
  const landingPage = migration.editContentType('landingPage');

  landingPage.changeFieldControl('redirectTo', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });
  landingPage.moveField('redirectTo').beforeField('approvedForDistribution');
  landingPage.moveField('redirectNotification').afterField('redirectTo');

  const landingPageEditorLayout = landingPage.editEditorLayout();
  landingPageEditorLayout.createFieldGroup('redirect').name('Redirect');

  landingPageEditorLayout
    .moveField('redirectTo')
    .toTheTopOfFieldGroup('redirect');
  landingPageEditorLayout
    .moveField('redirectNotification')
    .afterField('redirectTo');

  // offer landing page
  const offerLandingPage = migration.editContentType(
    'composeOptInOfferLandingPage'
  );
  offerLandingPage.changeFieldControl('redirectTo', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });

  offerLandingPage
    .moveField('redirectTo')
    .beforeField('approvedForDistribution');
  offerLandingPage.moveField('redirectNotification').afterField('redirectTo');

  const offerLandingPageEditorLayout = offerLandingPage.editEditorLayout();
  offerLandingPageEditorLayout.createFieldGroup('redirect').name('Redirect');

  offerLandingPageEditorLayout
    .moveField('redirectTo')
    .toTheTopOfFieldGroup('redirect');
  offerLandingPageEditorLayout
    .moveField('redirectNotification')
    .afterField('redirectTo');

  // provider search landing page
  const providerSearchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );
  providerSearchLandingPage.changeFieldControl(
    'redirectTo',
    'builtin',
    'singleLine',
    {
      helpText: helpText.urlFormatting.default,
    }
  );
  providerSearchLandingPage
    .moveField('redirectTo')
    .beforeField('approvedForDistribution');
  providerSearchLandingPage
    .moveField('redirectNotification')
    .afterField('redirectTo');

  const providerSearchLandingPageEditorLayout =
    providerSearchLandingPage.editEditorLayout();
  providerSearchLandingPageEditorLayout
    .createFieldGroup('redirect')
    .name('Redirect');

  providerSearchLandingPageEditorLayout
    .moveField('redirectTo')
    .toTheTopOfFieldGroup('redirect');
  providerSearchLandingPageEditorLayout
    .moveField('redirectNotification')
    .afterField('redirectTo');
};
