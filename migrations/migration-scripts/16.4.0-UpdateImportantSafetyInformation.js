module.exports = function (migration) {
  const isi = migration.editContentType('importantSafetyInformation');

  isi
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
          flags: null,
        },
        message: 'Must be camelCased',
      },
    ])
    .disabled(false)
    .omitted(false);

  isi.moveField('codeId').afterField('internalName');
};
