module.exports = function (migration) {
  migration
    .editContentType('composeOptInOfferLandingPage')
    .deleteField('offerAmount');
};
