module.exports = function (migration) {
  let link = migration.editContentType('link');

  link
    .createField('url')
    .name('Url')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern:
            '^((https|http):\\/\\/((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3})))(\\:\\d+)?(\\/[-a-z\\d%_.~+*]*)*|^(http(s){0,1}:\\/\\/localhost\\/[-a-z\\d%_.~+*]*)|^\\/[-a-z\\d%_.~+*]*',
          flags: null,
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  migration.transformEntries({
    contentType: 'link',
    from: ['externalUri'],
    to: ['url'],
    transformEntryForLocale: async function (fromFields, currentLocale) {
      if (currentLocale === 'de-DE') return;

      return { url: fromFields.externalUri['en-US'] };
    },
  });

  link = migration.editContentType('link');
  link.editField('externalUri').required(false);
};
