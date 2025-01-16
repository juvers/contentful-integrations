module.exports = function (migration) {
  const composeProviderSearchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  composeProviderSearchLandingPage
    .createField('isSubdomain')
    .name('Is Subdomain')
    .type('Boolean')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });
};
