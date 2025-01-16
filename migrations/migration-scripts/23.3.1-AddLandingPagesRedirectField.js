const validation = require('../constants/validation');

module.exports = function (migration) {
  // landing page
  const landingPage = migration.editContentType('landingPage');

  landingPage
    .createField('redirectTo')
    .name('Redirect To')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.customUrl])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField('redirectNotification')
    .name('Redirect Notification')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // offer landing page
  const offerLandingPage = migration.editContentType(
    'composeOptInOfferLandingPage'
  );

  offerLandingPage
    .createField('redirectTo')
    .name('Redirect To')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.customUrl])
    .disabled(false)
    .omitted(false);

  offerLandingPage
    .createField('redirectNotification')
    .name('Redirect Notification')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // provider search landing page
  const providerSearchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  providerSearchLandingPage
    .createField('redirectTo')
    .name('Redirect To')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.customUrl])
    .disabled(false)
    .omitted(false);

  providerSearchLandingPage
    .createField('redirectNotification')
    .name('Redirect Notification')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
};
