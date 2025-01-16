module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const offerTemplatePage = migration.editContentType('templateOptInOffer');
  const searchLandingPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  // Adding new field
  landingPage
    .createField('showStickyIsi')
    .name('Show Sticky ISI')
    .type('Boolean')
    .defaultValue({
      'en-US': true,
    })
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  offerTemplatePage
    .createField('showStickyIsi')
    .name('Show Sticky ISI')
    .type('Boolean')
    .defaultValue({
      'en-US': true,
    })
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  searchLandingPage
    .createField('showStickyIsi')
    .name('Show Sticky ISI')
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
    contentType: 'landingPage',
    from: [],
    to: ['showStickyIsi'],
    transformEntryForLocale: async function () {
      return { showStickyIsi: true };
    },
  });

  migration.transformEntries({
    contentType: 'templateOptInOffer',
    from: [],
    to: ['showStickyIsi'],
    transformEntryForLocale: async function () {
      return { showStickyIsi: true };
    },
  });

  migration.transformEntries({
    contentType: 'providerSearchLandingPage',
    from: [],
    to: ['showStickyIsi'],
    transformEntryForLocale: async function () {
      return { showStickyIsi: true };
    },
  });
};
