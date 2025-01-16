module.exports = function (migration) {
  const composeProviderSearchLandingPage = migration
    .createContentType('providerSearchLandingPage')
    .name('Compose > Provider Search Landing Page')
    .description('Compose Provider Search Landing Page')
    .displayField('name');

  composeProviderSearchLandingPage
    .createField('name')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProviderSearchLandingPage
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: '^(?:[a-z0-9]+(_|-))*[a-z0-9]+$',
          flags: null,
        },
        message:
          'Slug must only contain alpha numeric characters separated by hyphen(-) or underscore(_)',
      },
    ])
    .disabled(false)
    .omitted(false);

  composeProviderSearchLandingPage
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

  composeProviderSearchLandingPage
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

  composeProviderSearchLandingPage
    .createField('termsAndConditions')
    .name('Terms and Conditions')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockCopy'],
      },
    ]);

  composeProviderSearchLandingPage
    .createField('blocks')
    .name('Block(s)')
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
          linkContentType: [
            'bannerWithCopy',
            'blockFullImage',
            'blockImageAndBanner',
            'blockBeforeAndAfter',
          ],
        },
      ],
      linkType: 'Entry',
    });

  composeProviderSearchLandingPage
    .createField('brand')
    .name('Brand')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['brand'],
      },
    ]);

  composeProviderSearchLandingPage.changeFieldControl(
    'brand',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: false,
    }
  );

  // Metadata fields
  composeProviderSearchLandingPage
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProviderSearchLandingPage
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProviderSearchLandingPage
    .createField('metaConcernArea')
    .name('Concern Area(s)')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['concernArea'],
        },
      ],
    });

  composeProviderSearchLandingPage.changeFieldControl(
    'metaConcernArea',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeProviderSearchLandingPage
    .createField('metaProduct')
    .name('Product(s)')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['product'],
        },
      ],
    });
  composeProviderSearchLandingPage.changeFieldControl(
    'metaProduct',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeProviderSearchLandingPage
    .createField('metaUserJourney')
    .name('User Journey(s)')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['userJourney'],
        },
      ],
    });

  composeProviderSearchLandingPage.changeFieldControl(
    'metaUserJourney',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeProviderSearchLandingPage
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProviderSearchLandingPage
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // MLRC fields
  composeProviderSearchLandingPage
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  composeProviderSearchLandingPage
    .createField('approvedDate')
    .name('Approval Date')
    .type('Date')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeProviderSearchLandingPage.changeFieldControl(
    'approvedDate',
    'builtin',
    'datePicker',
    {
      format: 'dateonly',
    }
  );

  composeProviderSearchLandingPage
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProviderSearchLandingPage.changeFieldControl(
    'contentId',
    'builtin',
    'singleLine',
    {
      helpText: 'Use the PRT/Veeva number as Content Id',
    }
  );

  const editorLayout = composeProviderSearchLandingPage.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');
  editorLayout.createFieldGroup('mlrc').name('MLRC');

  // Page Content
  editorLayout.moveField('name').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('name');
  editorLayout.moveField('header').afterField('slug');
  editorLayout.moveField('blocks').afterField('header');
  editorLayout.moveField('termsAndConditions').afterField('blocks');
  editorLayout.moveField('brand').afterField('termsAndConditions');
  editorLayout.moveField('footer').afterField('brand');

  // Metadata
  metadataTab.createFieldGroup('segment').name('Segment Tracking');
  editorLayout.moveField('campaignId').toTheTopOfFieldGroup('segment');
  editorLayout.moveField('campaignName').afterField('campaignId');
  editorLayout.moveField('metaConcernArea').afterField('campaignName');
  editorLayout.moveField('metaProduct').afterField('metaConcernArea');
  editorLayout.moveField('metaUserJourney').afterField('metaProduct');
  metadataTab.createFieldGroup('seo').name('SEO');
  editorLayout.moveField('metaDescription').toTheTopOfFieldGroup('seo');
  editorLayout.moveField('metaTitle').afterField('metaDescription');

  // MLRC
  editorLayout
    .moveField('approvedForDistribution')
    .toTheTopOfFieldGroup('mlrc');
  editorLayout.moveField('approvedDate').afterField('approvedForDistribution');
  editorLayout.moveField('contentId').afterField('approvedDate');

  //Make it a Compose page
  composeProviderSearchLandingPage.setAnnotations(['Contentful:AggregateRoot']);
};
