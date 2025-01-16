// @ts-check
module.exports = function (migration) {
  const landingPage = migration.editContentType('landingPage');
  // Metadata fields
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

  landingPage
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  // MLRC fields
  landingPage
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  landingPage
    .createField('approvedDate')
    .name('Approval Date')
    .type('Date')
    .localized(false)
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
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  landingPage.changeFieldControl('contentId', 'builtin', 'singleLine', {
    helpText: 'Use the PRT/Veeva number as Content Id',
  });

  // Delete fields replaced by added fields above
  landingPage.deleteField('metadata');
  landingPage.deleteField('mlrc');
};
