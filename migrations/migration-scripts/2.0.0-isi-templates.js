module.exports = function (migration) {
  // delete two fields
  const importantSafetyInformation = migration.editContentType(
    'importantSafetyInformation'
  );

  importantSafetyInformation.deleteField('singleBrandTitle');
  importantSafetyInformation.deleteField('multipleBrandTitle');

  // Move the fields and rename the ids
  const importantSafetyInformationTemplate = migration.editContentType(
    'importantSafetyInformationTemplate'
  );

  importantSafetyInformationTemplate
    .editField('template')
    .name('ISI Link Template');

  importantSafetyInformationTemplate.changeFieldId(
    'template',
    'isiLinkTemplate'
  );

  importantSafetyInformationTemplate
    .createField('isiHeaderTemplate')
    .name('ISI Header Template')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ['bold', 'underline'],
        message: 'Only bold and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['entry-hyperlink'],
        message: 'Only link to entry nodes are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ])
    .disabled(false)
    .omitted(false);

  importantSafetyInformationTemplate
    .moveField('isiHeaderTemplate')
    .beforeField('isiLinkTemplate');
};
