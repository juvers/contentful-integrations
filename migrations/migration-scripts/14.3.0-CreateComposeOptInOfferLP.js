module.exports = function (migration) {
  // Template > Opt-In Offer
  const templateOptInOffer = migration
    .createContentType('templateOptInOffer')
    .name('Template > Opt-In Offer')
    .description('Template for Opt-In Offer Page Content')
    .displayField('internalName');

  templateOptInOffer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  templateOptInOffer
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

  templateOptInOffer
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

  templateOptInOffer
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

  templateOptInOffer
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

  templateOptInOffer.changeFieldControl('brand', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });

  templateOptInOffer
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

  // Compose > Opt-In Offer Landing Page
  const composeOptInOffer = migration
    .createContentType('composeOptInOfferLandingPage')
    .name('Compose > Opt-In Offer Landing Page')
    .description('Compose Opt-In Offer Landing Page')
    .displayField('internalName');

  composeOptInOffer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
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

  composeOptInOffer
    .createField('pageContent')
    .name('Page Content')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['templateOptInOffer'],
      },
    ]);

  // Metadata
  composeOptInOffer
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
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

  composeOptInOffer.changeFieldControl(
    'metaConcernArea',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeOptInOffer
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

  composeOptInOffer.changeFieldControl(
    'metaProduct',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeOptInOffer
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
  composeOptInOffer.changeFieldControl(
    'metaUserJourney',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeOptInOffer
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // MLRC
  composeOptInOffer
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  composeOptInOffer
    .createField('approvedDate')
    .name('Approved Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeOptInOffer.changeFieldControl(
    'approvedDate',
    'builtin',
    'datePicker',
    {
      format: 'dateonly',
    }
  );

  composeOptInOffer
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer.changeFieldControl('contentId', 'builtin', 'singleLine', {
    helpText: 'Use the PRT/Veeva number as Content Id',
  });

  // Offer Configuration
  composeOptInOffer
    .createField('offerId')
    .name('Offer Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
    .createField('promotionId')
    .name('Promotion Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
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

  composeOptInOffer
    .createField('offerAmount')
    .name('Offer Amount')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeOptInOffer
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

  composeOptInOffer
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

  composeOptInOffer
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
  composeOptInOffer.setAnnotations(['Contentful:AggregateRoot']);

  // grouping
  const editorLayout = composeOptInOffer.createEditorLayout();

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
