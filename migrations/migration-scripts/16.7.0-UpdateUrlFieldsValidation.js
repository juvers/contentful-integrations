const validation = require('../constants/validation');
const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const elementButton = migration.editContentType('ctaButton');
  elementButton.editField('url').validations([validation.customUrl]);
  elementButton.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });

  const route = migration.editContentType('route');
  route.editField('to').validations([validation.customUrl]);
  route.changeFieldControl('to', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });

  const link = migration.editContentType('link');
  link.editField('url').validations([validation.customUrl]);
  link.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });

  const articlePage = migration.editContentType('articlePage');
  articlePage.editField('redirectTo').validations([validation.customUrl]);
  articlePage.changeFieldControl('redirectTo', 'builtin', 'singleLine', {
    helpText: helpText.urlFormatting.default,
  });
};
