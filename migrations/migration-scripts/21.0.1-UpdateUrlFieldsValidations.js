const validation = require('../constants/validation');
const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const link = migration.editContentType('link');
  link.editField('url').validations([validation.customUrlWithJumpLink]);
  link.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.withJumpLink,
  });
};
