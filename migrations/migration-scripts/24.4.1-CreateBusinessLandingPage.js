const validation = require('../constants/validation');

module.exports = function (migration) {
  const landingPage = migration
    .createContentType('businessLandingPage')
    .name('Compose > Alle For Business Landing Page')
    .description('Alle for Business welcome landing page')
    .displayField('internalName');

  // Page Content
  landingPage
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        unique: true,
      },
      validation.slug,
    ]);

  landingPage
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

  landingPage
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
            'blockImageAndBanner',
            'valuePropositionBlock',
            'blockHeroWithBackgroundVideo',
          ],
        },
      ],
      linkType: 'Entry',
    });

  landingPage
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
  landingPage.changeFieldControl('footer', 'builtin', 'entryLinkEditor', {
    helpText:
      'The PRT number associated with this landing page will automatically be added to the footer copy.',
  });

  // Metadata
  landingPage
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage
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
  landingPage.changeFieldControl('metaProduct', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  landingPage
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
  landingPage.changeFieldControl(
    'metaUserJourney',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  // MLRC
  landingPage
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  landingPage
    .createField('approvedDate')
    .name('Approved Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  landingPage.changeFieldControl('approvedDate', 'builtin', 'datePicker', {
    format: 'dateonly',
  });

  landingPage
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Making content type a Compose page
  landingPage.setAnnotations(['Contentful:AggregateRoot']);

  const editorLayout = landingPage.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');
  editorLayout.createFieldGroup('mlrc').name('MLRC');

  // Page Content
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('internalName');
  editorLayout.moveField('header').afterField('slug');
  editorLayout.moveField('blocks').afterField('header');
  editorLayout.moveField('footer').afterField('blocks');

  // Metadata
  metadataTab.createFieldGroup('segment').name('Segment Tracking');
  editorLayout.moveField('campaignId').toTheTopOfFieldGroup('segment');
  editorLayout.moveField('campaignName').afterField('campaignId');
  editorLayout.moveField('metaProduct').afterField('campaignName');
  editorLayout.moveField('metaUserJourney').afterField('metaProduct');

  // MLRC
  editorLayout
    .moveField('approvedForDistribution')
    .toTheTopOfFieldGroup('mlrc');
  editorLayout.moveField('approvedDate').afterField('approvedForDistribution');
  editorLayout.moveField('contentId').afterField('approvedDate');
};
