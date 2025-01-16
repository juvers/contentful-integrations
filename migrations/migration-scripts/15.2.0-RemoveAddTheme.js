module.exports = function (migration) {
  migration
    .editContentType('blockImageAndBanner')
    .changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
      showCreateEntityAction: false,
    });
};
