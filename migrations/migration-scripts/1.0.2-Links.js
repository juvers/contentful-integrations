module.exports = function (migration) {
  const link = migration
    .createContentType('link')
    .name('Link')
    .description('')
    .displayField('internalName');
  link
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  link
    .createField('displayName')
    .name('Display Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  link
    .createField('externalUri')
    .name('External URI')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
