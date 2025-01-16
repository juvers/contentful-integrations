module.exports = function (migration) {
  const blockLogoHeader = migration.editContentType('blockLogoHeader');
  blockLogoHeader.editField('cta').required(false);
};
