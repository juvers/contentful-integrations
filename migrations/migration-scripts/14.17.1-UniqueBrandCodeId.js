module.exports = function (migration) {
  const brand = migration.editContentType('brand');
  brand.editField('codeId').validations([
    {
      unique: true,
    },
  ]);
};
