module.exports = function (migration) {
  const blockImage = migration.editContentType('blockImage');
  blockImage.deleteField('disclaimerShortText');
  blockImage.deleteField('disclaimerLongText');

  const video = migration.editContentType('video');
  video.editField('poster').required(true);
};
