module.exports = function (migration) {
  const landingPageMetadata = migration
    .createContentType('landingPageMetadata')
    .name('Landing Page Metadata')
    .description('')
    .displayField('campaignName');

  landingPageMetadata
    .createField('campaignId')
    .name('Campaign ID')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPageMetadata
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPageMetadata
    .createField('fieldConcernArea')
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
  landingPageMetadata.changeFieldControl(
    'fieldConcernArea',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  landingPageMetadata
    .createField('fieldUserJourney')
    .name('User Journey')
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
  landingPageMetadata.changeFieldControl(
    'fieldUserJourney',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  landingPageMetadata
    .createField('fieldProduct')
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
  landingPageMetadata.changeFieldControl(
    'fieldProduct',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  //landing page
  const landingPage = migration.editContentType('landingPage');
  landingPage
    .createField('metadata')
    .name('Metadata')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['landingPageMetadata'],
      },
    ]);

  landingPage.changeFieldControl('metadata', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });
};
