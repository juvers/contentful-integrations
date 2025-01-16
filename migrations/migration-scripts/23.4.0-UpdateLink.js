const helpText = require('../constants/helpText');

module.exports = function (migration) {
  // edit Link
  const link = migration.editContentType('link');
  link.deleteField('externalUri');
  link
    .createField('forceOpenSameTab')
    .name('Force Open Same Tab')
    .type('Boolean')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .defaultValue({ 'en-US': false });

  link.changeFieldControl('forceOpenSameTab', 'builtin', 'boolean', {
    helpText:
      'This field is used to determine whether to allow the external URL (non-Alle URL) to open in the same tab.',
  });

  // edit Element > Button (CTA)
  const cta = migration.editContentType('ctaButton');
  cta
    .createField('forceOpenSameTab')
    .name('Force Open Same Tab')
    .type('Boolean')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .defaultValue({ 'en-US': false });

  cta.changeFieldControl('forceOpenSameTab', 'builtin', 'boolean', {
    helpText:
      'This field is used to determine whether to allow the external URL (non-Alle URL) to open in the same tab.',
  });

  // edit Compose > Article
  const article = migration.editContentType('articlePage');
  article.changeFieldControl('redirectTo', 'builtin', 'singleLine', {
    helpText: `${helpText.urlFormatting.redirect} When clicking an article card, it will redirect users to this URL within the same tab.`,
  });
};
