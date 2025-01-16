module.exports = function (migration) {
  const optInOfferLandingPage = migration.editContentType(
    'composeOptInOfferLandingPage'
  );

  optInOfferLandingPage.editField('promotionId').validations([
    {
      unique: true,
    },
  ]);
};
