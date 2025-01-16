module.exports = function (migration) {
  const elementMLRC = migration
    .createContentType('elementMLRC')
    .name('Element > MLRC')
    .description('General Approvals for MLRC')
    .displayField('internalName');

  elementMLRC
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementMLRC
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  elementMLRC
    .createField('approvedDate')
    .name('Approval Date')
    .type('Date')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementMLRC.changeFieldControl('approvedDate', 'builtin', 'datePicker', {
    format: 'dateonly',
  });

  elementMLRC
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementMLRC.changeFieldControl('contentId', 'builtin', 'singleLine', {
    helpText: 'Use the PRT/Veeva number as Content Id',
  });

  const composeLandingPage = migration.editContentType('pageLandingPage');

  composeLandingPage
    .createField('mlrc')
    .name('MLRC')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['elementMLRC'],
      },
    ]);
};
