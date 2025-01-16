const { articleBlocks } = require('../constants/validation');

module.exports = function (migration) {
  const staticCode = migration
    .createContentType('staticCode')
    .name('Static Code')
    .description('Entries reference some piece of static code, appearance will depend on where the entry is used')
    .displayField('internalName');

  staticCode
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  staticCode
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  staticCode
    .createField('description')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
