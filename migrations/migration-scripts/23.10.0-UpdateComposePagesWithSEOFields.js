module.exports = function (migration) {
  const articlePage = migration.editContentType('articlePage');
  const landingPage = migration.editContentType('landingPage');
  const offerLandingPage = migration.editContentType(
    'composeOptInOfferLandingPage'
  );

  // Adding new Article fields
  articlePage
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  articlePage
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  articlePage
    .createField('ogImage')
    .name('OG Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  articlePage
    .createField('keywords')
    .name('Keywords')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Adding new Landing Page fields
  landingPage
    .createField('ogImage')
    .name('OG Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  landingPage
    .createField('keywords')
    .name('Keywords')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Adding new Offer Landing Pages fields
  offerLandingPage
    .createField('ogImage')
    .name('OG Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  offerLandingPage
    .createField('keywords')
    .name('Keywords')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
};
