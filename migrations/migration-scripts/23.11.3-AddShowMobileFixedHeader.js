module.exports = function (migration) {
  const blockLogoHeader = migration.editContentType('blockLogoHeader');

  // Adding new field
  blockLogoHeader
    .createField('showMobileFixedHeader')
    .name('Show Mobile Fixed Header')
    .type('Boolean')
    .defaultValue({
      'en-US': true,
    })
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // populate existing entries' required field
  migration.transformEntries({
    contentType: 'blockLogoHeader',
    from: [],
    to: ['showMobileFixedHeader'],
    transformEntryForLocale: async function () {
      return { showMobileFixedHeader: true };
    },
  });
};
