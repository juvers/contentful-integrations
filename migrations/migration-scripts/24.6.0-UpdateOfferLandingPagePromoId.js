module.exports = function (migration) {
  const lp = migration.editContentType('composeOptInOfferLandingPage');

  lp.editField('promotionId').validations([
    {
      unique: false,
    },
  ]);
};
