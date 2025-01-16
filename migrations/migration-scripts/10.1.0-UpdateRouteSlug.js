module.exports = function (migration) {
  const route = migration.editContentType('route');
  route.editField('slug').name('Slug');
};
