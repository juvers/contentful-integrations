const { pageTypeOptions } = require('../constants/validation');

module.exports = function (migration) {
  const lp = migration.editContentType('landingPage');

  lp.editField('pageType').validations([pageTypeOptions.landingPage]);

  lp.changeFieldControl('pageType', 'builtin', 'dropdown', {
    helpText:
      'This field is only used to define if the page will show at /lp, /sweeps, or a tentpole url',
  });
};
