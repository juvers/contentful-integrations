module.exports = function (migration) {
  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage.changeFieldControl('cta', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });
};
