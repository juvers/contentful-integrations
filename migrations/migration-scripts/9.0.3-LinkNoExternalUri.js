module.exports = function (migration) {
  const link = migration.editContentType('link');
  link.deleteField('externalUri');
};
