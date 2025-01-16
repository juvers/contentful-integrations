module.exports = function (migration) {
  const blockVideo = migration.editContentType('blockVideo');

  blockVideo.editField('video').validations([
    {
      linkContentType: ['video'],
    },
  ]);
};
