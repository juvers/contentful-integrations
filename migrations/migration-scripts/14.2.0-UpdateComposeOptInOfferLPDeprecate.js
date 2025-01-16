module.exports = function (migration) {
  const optInLandingPage = migration.editContentType('optInOfferLandingPage');
  optInLandingPage
    .name('DEPRECATED Compose > Opt-In Offer Landing Page')
    .description('Deprecated Compose Opt-In Offer Landing Page');
};
