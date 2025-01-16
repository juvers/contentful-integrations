module.exports = function (migration) {
  const footer = migration.editContentType('blockFooter');
  footer.deleteField('copy');
};
