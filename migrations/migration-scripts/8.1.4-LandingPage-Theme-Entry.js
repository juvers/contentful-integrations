module.exports = function (migration) {
  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });
};
