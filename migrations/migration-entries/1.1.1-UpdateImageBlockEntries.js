module.exports = function (migration) {
  migration.transformEntries({
    contentType: 'blockImage',
    from: [],
    to: ['showTo', 'showToScreens'],
    transformEntryForLocale: async function () {
      return {
        showTo: 'All',
        showToScreens: 'All',
      };
    },
  });
};
