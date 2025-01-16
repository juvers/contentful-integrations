module.exports = function (migration) {
  const footer = migration.editContentType('blockFooter');

  footer.changeFieldControl('copy', 'builtin', 'multipleLine');
};
