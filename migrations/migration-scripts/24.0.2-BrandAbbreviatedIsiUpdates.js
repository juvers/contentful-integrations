module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const articlePage = migration.editContentType('articlePage');
  const optInOfferTemplate = migration.editContentType('templateOptInOffer');
  const providerSearchPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  const pagesWithMultipleBrands = [articlePage];
  const pagesWithSingleBrand = [
    landingPage,
    optInOfferTemplate,
    providerSearchPage,
  ];

  // for the Compose UI, move the field to be before the brand(s) field
  pagesWithMultipleBrands.forEach((page) => {
    page
      .editEditorLayout()
      .moveField('importantSafetyInformationContentType')
      .beforeField('brands');
  });

  pagesWithSingleBrand.forEach((page) => {
    page
      .editEditorLayout()
      .moveField('importantSafetyInformationContentType')
      .beforeField('brand');
  });
};
