module.exports = function (migration) {
  const blockFooter = migration.editContentType('blockFooter');

  blockFooter
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  blockFooter.moveField('codeId').afterField('internalName');
};
