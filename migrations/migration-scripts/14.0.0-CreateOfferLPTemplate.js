module.exports = function (migration) {
  const blockOptInOfferTemplate = migration
    .createContentType('blockOptInOfferTemplate')
    .name('Block > Opt-In Offer Template')
    .description('Template for Opt-In Offer Page Content')
    .displayField('internalName');

  blockOptInOfferTemplate
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockOptInOfferTemplate
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

  blockOptInOfferTemplate
    .createField('blocks')
    .name('Block(s)')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .type('Array')
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

  blockOptInOfferTemplate
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

  blockOptInOfferTemplate
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

  blockOptInOfferTemplate.changeFieldControl(
    'brand',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: false,
    }
  );

  blockOptInOfferTemplate
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

  const composeOptInOfferTemplate = migration
    .createContentType('composeOptInOfferTemplate')
    .name('Compose > Opt-In Offer Landing Page Template')
    .description('Compose Opt-In Offer Landing Page Template')
    .displayField('internalName');

  composeOptInOfferTemplate
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
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

  composeOptInOfferTemplate
    .createField('offerTemplate')
    .name('Offer Template')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        size: {
          min: 1,
          max: 1,
        },
      },
    ])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['blockOptInOfferTemplate'],
        },
      ],
    });

  // Metadata
  composeOptInOfferTemplate
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('metaConcernArea')
    .name('Concern Area(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['concernArea'],
        },
      ],
    });

  composeOptInOfferTemplate.changeFieldControl(
    'metaConcernArea',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeOptInOfferTemplate
    .createField('metaProduct')
    .name('Product(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['product'],
        },
      ],
    });

  composeOptInOfferTemplate.changeFieldControl(
    'metaProduct',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeOptInOfferTemplate
    .createField('metaUserJourney')
    .name('User Journey(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['userJourney'],
        },
      ],
    });
  composeOptInOfferTemplate.changeFieldControl(
    'metaUserJourney',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeOptInOfferTemplate
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // MLRC
  composeOptInOfferTemplate
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  composeOptInOfferTemplate
    .createField('approvedDate')
    .name('Approved Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeOptInOfferTemplate.changeFieldControl(
    'approvedDate',
    'builtin',
    'datePicker',
    {
      format: 'dateonly',
    }
  );

  composeOptInOfferTemplate
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate.changeFieldControl(
    'contentId',
    'builtin',
    'singleLine',
    {
      helpText: 'Use the PRT/Veeva number as Content Id',
    }
  );

  // Offer Configuration
  composeOptInOfferTemplate
    .createField('offerId')
    .name('Offer Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('promotionId')
    .name('Promotion Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('offerClaim')
    .name('Offer Claim')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['blockClaimConfiguration'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  composeOptInOfferTemplate
    .createField('offerAmount')
    .name('Offer Amount')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('offerExpirationDays')
    .name('Offer Expiration Days')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([
      {
        in: [30, 60, 90],
      },
    ])
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('claimCTADestination')
    .name('Claim CTA Destination')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['Allē Registration', 'Allē Log-in'],
      },
    ])
    .defaultValue({ 'en-US': 'Allē Registration' })
    .disabled(false)
    .omitted(false);

  composeOptInOfferTemplate
    .createField('offerStatus')
    .name('Offer Status')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['Active', 'Not Started', 'Sold Out'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'Not Started' });

  // Making content type a Compose page
  composeOptInOfferTemplate.setAnnotations(['Contentful:AggregateRoot']);

  // grouping
  const editorLayout = composeOptInOfferTemplate.createEditorLayout();

  // Page Content
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('internalName');
  // TODO: add ref to blocks

  // Metadata
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');
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
  editorLayout.createFieldGroup('mlrc').name('MLRC');
  editorLayout
    .moveField('approvedForDistribution')
    .toTheTopOfFieldGroup('mlrc');
  editorLayout.moveField('approvedDate').afterField('approvedForDistribution');
  editorLayout.moveField('contentId').afterField('approvedDate');

  // Offer Configuration
  editorLayout
    .createFieldGroup('offerConfiguration')
    .name('Offer Configuration');
  editorLayout.moveField('offerId').toTheTopOfFieldGroup('offerConfiguration');
  editorLayout.moveField('promotionId').afterField('offerId');
  editorLayout.moveField('offerClaim').afterField('promotionId');
  editorLayout.moveField('offerAmount').afterField('offerClaim');
  editorLayout.moveField('offerExpirationDays').afterField('offerAmount');
  editorLayout
    .moveField('claimCTADestination')
    .afterField('offerExpirationDays');
  editorLayout.moveField('offerStatus').afterField('claimCTADestination');
};
