module.exports = function (migration) {
  const composeLandingPageOptInOffer = migration
    .createContentType('optInOfferLandingPage')
    .name('Compose > Opt-In Offer Landing Page')
    .description('Compose Opt-In Offer Landing Page')
    .displayField('internalName');

  composeLandingPageOptInOffer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer.changeFieldControl(
    'brand',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeLandingPageOptInOffer
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer.changeFieldControl(
    'metaConcernArea',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer.changeFieldControl(
    'metaProduct',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeLandingPageOptInOffer
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
  composeLandingPageOptInOffer.changeFieldControl(
    'metaUserJourney',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeLandingPageOptInOffer
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // MLRC fields
  composeLandingPageOptInOffer
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  composeLandingPageOptInOffer
    .createField('approvedDate')
    .name('Approved Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeLandingPageOptInOffer.changeFieldControl(
    'approvedDate',
    'builtin',
    'datePicker',
    {
      format: 'dateonly',
    }
  );

  composeLandingPageOptInOffer
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer.changeFieldControl(
    'contentId',
    'builtin',
    'singleLine',
    {
      helpText: 'Use the PRT/Veeva number as Content Id',
    }
  );

  composeLandingPageOptInOffer
    .createField('promotionId')
    .name('Promotion Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
    .createField('offerId')
    .name('Offer Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
    .createField('offerAmount')
    .name('Offer Amount')
    .type('Integer')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLandingPageOptInOffer
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

  composeLandingPageOptInOffer
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

  // Making Landing Page content type a Compose page
  composeLandingPageOptInOffer.setAnnotations(['Contentful:AggregateRoot']);

  const editorLayout = composeLandingPageOptInOffer.createEditorLayout();
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

  // Opt-In Offer
  editorLayout
    .createFieldGroup('offerConfiguration')
    .name('Offer Configuration');
  editorLayout.moveField('offerId').toTheTopOfFieldGroup('offerConfiguration');
  editorLayout.moveField('promotionId').afterField('offerId');
  editorLayout.moveField('offerAmount').afterField('promotionId');
  editorLayout.moveField('offerExpirationDays').afterField('offerAmount');
  editorLayout.moveField('offerStatus').afterField('offerExpirationDays');
};
