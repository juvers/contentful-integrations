module.exports = function (migration) {
  migration
    .editContentType('themeClaimConfiguration')
    .editField('bannerColor')
    .name('Logo Background Color');

  migration
    .editContentType('themeClaimConfiguration')
    .changeFieldControl('bannerColor', 'builtin', 'singleLine', {
      helpText:
        'This value is shown on Registration, Login, and Eligibility Check screens',
    });

  migration
    .editContentType('themeClaimConfiguration')
    .editField('spinnerBackgroundColor')
    .name('DEPRECATED Spinner Background Color');
};
