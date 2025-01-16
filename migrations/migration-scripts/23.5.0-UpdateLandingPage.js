const { pageTypeOptions } = require('../constants/validation');

module.exports = function (migration) {
  const lp = migration.editContentType('landingPage');

  lp.createField('pageType')
    .name('Type')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([pageTypeOptions.landingPage])
    .defaultValue({ 'en-US': 'Default' });

  lp.moveField('pageType').afterField('name');
};
