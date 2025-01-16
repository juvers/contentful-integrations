module.exports = function (migration) {
  const lp = migration.editContentType('video');

  lp.deleteField('showControls');
  lp.deleteField('playAudio');
};
