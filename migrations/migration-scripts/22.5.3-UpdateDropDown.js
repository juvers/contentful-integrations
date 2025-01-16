const helpText = require('../constants/helpText');
module.exports = function (migration) {
  const themeLogos = migration.editContentType('themeLogos');

  themeLogos.changeFieldControl('brandHeaderFont', 'builtin', 'dropdown', {
    helpText: helpText.fonts.default,
  });
};
