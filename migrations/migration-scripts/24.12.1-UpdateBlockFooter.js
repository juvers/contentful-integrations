module.exports = function (migration) {
  const blockFooter = migration.editContentType('blockFooter');

  blockFooter
    .editField('showGlobalIsi')
    .name('Show Global ISI Link DEPRECATED')
    .disabled(true);

  blockFooter
    .editField('showAboutLinks')
    .name('Show About Links DEPRECATED')
    .disabled(true);

  blockFooter.deleteField('links');
};
