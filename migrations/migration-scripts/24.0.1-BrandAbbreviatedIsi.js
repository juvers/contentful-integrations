const { abbreviatedIsiOptions } = require('../constants/validation');

module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  const articlePage = migration.editContentType('articlePage');
  const optInOfferTemplate = migration.editContentType('templateOptInOffer');
  const providerSearchPage = migration.editContentType(
    'providerSearchLandingPage'
  );

  const brand = migration.editContentType('brand');

  // add abbreviatedIsi richtext field
  brand
    .createField('abbreviatedImportantSafetyInformation')
    .name('Abbreviated ISI')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline'],
        message: 'Only bold, italic, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['ordered-list', 'unordered-list', 'entry-hyperlink'],
        message:
          'Only ordered list, unordered list, link to Url, link to entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  brand
    .moveField('abbreviatedImportantSafetyInformation')
    .afterField('providerImportantSafetyInformation');

  const pagesWithMultipleBrands = [articlePage];

  const pagesWithSingleBrand = [
    landingPage,
    optInOfferTemplate,
    providerSearchPage,
  ];

  // add abbreviatedIsi toggle field to landing pages
  pagesWithMultipleBrands.forEach((page) => {
    page
      .createField('importantSafetyInformationContentType')
      .name('ISI Content Type')
      .type('Symbol')
      .localized(false)
      .required(false)
      .disabled(false)
      .omitted(false)
      .validations([abbreviatedIsiOptions.abbreviatedISIContentTypes])
      .defaultValue({ 'en-US': 'Full' });

    // note the plurality of the brands field
    page
      .moveField('importantSafetyInformationContentType')
      .beforeField('brands');
  });

  // add abbreviatedIsi toggle field to landing pages
  pagesWithSingleBrand.forEach((page) => {
    page
      .createField('importantSafetyInformationContentType')
      .name('ISI Content Type')
      .type('Symbol')
      .localized(false)
      .required(false)
      .disabled(false)
      .omitted(false)
      .validations([abbreviatedIsiOptions.abbreviatedISIContentTypes])
      .defaultValue({ 'en-US': 'Full' });

    // note the singularity of the brands field
    page
      .moveField('importantSafetyInformationContentType')
      .beforeField('brand');
  });
};
