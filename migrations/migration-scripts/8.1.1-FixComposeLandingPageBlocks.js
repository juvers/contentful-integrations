module.exports = function (migration) {
  const composeLandingPage = migration.editContentType('pageLandingPage');
  composeLandingPage.deleteField('blocks');

  composeLandingPage
    .createField('blocks')
    .name('Blocks')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['bannerWithCopy', 'blockFullImage'],
        },
        {
          relationshipType: ['Composition'],
        },
      ],
      linkType: 'Entry',
    });

  // Brand must be optional
  composeLandingPage.editField('brand').required(false);

  //Allowing creators to reuse references
  composeLandingPage.changeFieldControl(
    'header',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: true,
    }
  );

  composeLandingPage.changeFieldControl(
    'footer',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: true,
    }
  );

  composeLandingPage.changeFieldControl(
    'termsAndConditions',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: true,
    }
  );
};
