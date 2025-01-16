const validation = require('../constants/validation');

module.exports = function (migration) {
  const imageBlock = migration.editContentType('blockImage');

  imageBlock
    .createField('showTo')
    .name('Show To Users')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  imageBlock
    .createField('showToScreens')
    .name('Show To Screens')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.screens,
      },
    ]);

  imageBlock.moveField('showTo').afterField('internalName');
  imageBlock.moveField('showToScreens').afterField('showTo');
};
