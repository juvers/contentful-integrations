module.exports = function (migration) {
  const element = migration.editContentType('beforeAndAfterImages');

  element.editField('beforeImage').validations([
    {
      linkContentType: ['imageWithDisclaimer'],
    },
  ]);

  element.editField('afterImage').validations([
    {
      linkContentType: ['imageWithDisclaimer'],
    },
  ]);
};
