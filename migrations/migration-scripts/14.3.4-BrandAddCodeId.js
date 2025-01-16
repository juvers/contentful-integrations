module.exports = function (migration) {
  const brand = migration.editContentType('brand');

  brand
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand.moveField('codeId').afterField('internalName');
};
