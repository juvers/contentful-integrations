const { externalUrl } = require('../constants/validation');

module.exports = function (migration) {
  const form = migration.editContentType('elementSweepstakesForm');
  form
    .createField('officialRulesUrl')
    .name('Official Rules Url')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([externalUrl]);
};
