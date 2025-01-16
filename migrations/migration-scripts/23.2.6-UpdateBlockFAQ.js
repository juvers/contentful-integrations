const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockFAQ = migration.editContentType('blockFAQ');

  blockFAQ
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

  blockFAQ.moveField('codeId').afterField('internalName');

  blockFAQ
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  blockFAQ.moveField('showTo').afterField('codeId');
};
