module.exports = function (migration) {
  const composeLandingPage = migration
    .createContentType('pageLandingPage')
    .name('Compose > Landing Page')
    .description('Compose Landing Page Container')
    .displayField('name');

  composeLandingPage
    .createField('name')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPage
    .createField('header')
    .name('Header')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockLogoHeader'],
      },
    ]);

  composeLandingPage.changeFieldControl(
    'header',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: false,
    }
  );

  composeLandingPage
    .createField('footer')
    .name('Footer')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockFooter'],
      },
    ]);

  composeLandingPage.changeFieldControl(
    'footer',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: false,
    }
  );

  composeLandingPage
    .createField('termsAndConditions')
    .name('Terms and Conditions')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockCopy'],
      },
    ]);

  composeLandingPage.changeFieldControl(
    'termsAndConditions',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: false,
    }
  );

  composeLandingPage
    .createField('segmentMetadata')
    .name('Segment Metadata')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: [''],
      },
    ]);

  composeLandingPage.changeFieldControl(
    'segmentMetadata',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: false,
    }
  );

  composeLandingPage
    .createField('mlrc')
    .name('MLRC')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: [''],
      },
    ]);

  composeLandingPage.changeFieldControl('mlrc', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });

  composeLandingPage
    .createField('offerConfig')
    .name('Offer Config')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: [''],
      },
    ]);

  composeLandingPage.changeFieldControl(
    'offerConfig',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: false,
    }
  );

  composeLandingPage
    .createField('blocks')
    .name('Blocks')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: [''],
        },
      ],
      linkType: 'Entry',
    });

  composeLandingPage.changeFieldControl(
    'blocks',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: false,
    }
  );

  composeLandingPage
    .createField('brand')
    .name('Brand')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['brand'],
      },
    ]);

  composeLandingPage.changeFieldControl('brand', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });

  // modify the compose content model field content to reference the pageLandingPage content model
  // see contentful documentation https://www.contentful.com/developers/docs/compose/cli-tools/
  const page = migration.editContentType('page');
  page.editField('content').validations([
    // enable the new page type, so it's picked up by Compose
    {
      linkContentType: ['pageLandingPage', 'pageArticle'],
    },
    { relationshipType: ['Composition'] },
  ]);
};
