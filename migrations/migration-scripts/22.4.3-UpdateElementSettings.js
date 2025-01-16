module.exports = function (migration) {
  const block = migration.editContentType('elementSettings');

  // new field
  block
    .createField('externalId')
    .name('External Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([{ unique: true }]);

  block.moveField('externalId').afterField('codeId');
};
