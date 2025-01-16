module.exports = function (migration) {
  const ctaButton = migration.editContentType('ctaButton');

  ctaButton.deleteField('externalUrl');
  ctaButton
    .createField('externalUrl')
    .name('External Url')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
