module.exports = function (migration) {
  migration
    .editContentType('themeClaimConfiguration')
    .deleteField('spinnerBackgroundColor');
};
