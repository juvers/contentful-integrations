const helpText = require('../constants/helpText');
const validation = require('../constants/validation');

module.exports = function (migration) {
  const sweepsTheme = migration.editContentType('themeSweepstakesForm');

  sweepsTheme
    .createField('errorTextColor')
    .name('Error Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .disabled(false)
    .omitted(false);
  sweepsTheme.changeFieldControl('errorTextColor', 'builtin', 'singleLine', {
    helpText: helpText.hexColor.sixDigit,
  });

  // move field
  sweepsTheme.moveField('errorTextColor').afterField('textColor');
};
