module.exports = function (migration) {
  const blockLogoHeader = migration.editContentType('blockLogoHeader');

  blockLogoHeader.moveField('showMobileFixedHeader').afterField('fixedLogo');
};
