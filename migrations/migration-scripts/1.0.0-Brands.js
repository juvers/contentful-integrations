module.exports = function (migration) {
  const brand = migration
    .createContentType('brand')
    .name('Brand')
    .description('')
    .displayField('internalName');
  brand
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand
    .createField('fullBrandName')
    .name('Full Brand Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  brand
    .createField('shortBrandName')
    .name('Short Brand Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('consumerImportantSafetyInformation')
    .name('Consumer Important Safety Information')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline'],
        message: 'Only bold, italic, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['ordered-list', 'unordered-list', 'entry-hyperlink'],
        message:
          'Only ordered list, unordered list, link to Url, link to entry are allowed',
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

  brand
    .createField('providerImportantSafetyInformation')
    .name('Provider Important Safety Information')
    .type('RichText')
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline'],
        message: 'Only bold, italic, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['entry-hyperlink', 'unordered-list', 'ordered-list'],
        message:
          'Link to entry, unordered list, and ordered list nodes are allowed',
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

  brand
    .createField('medicalGuide')
    .name('Medical Guide')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['link'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  brand
    .createField('prescribingInformation')
    .name('Prescribing Information')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['link'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  brand.changeFieldControl('internalName', 'builtin', 'singleLine', {});
  brand.changeFieldControl('fullBrandName', 'builtin', 'singleLine', {});
  brand.changeFieldControl('shortBrandName', 'builtin', 'singleLine', {});
  brand.changeFieldControl(
    'consumerImportantSafetyInformation',
    'builtin',
    'richTextEditor',
    {}
  );

  brand.changeFieldControl(
    'providerImportantSafetyInformation',
    'builtin',
    'richTextEditor',
    {
      helpText: "Template Strings: '{{BOX_WARNING}}'",
    }
  );

  brand.changeFieldControl('medicalGuide', 'builtin', 'entryLinkEditor', {});
  brand.changeFieldControl(
    'prescribingInformation',
    'builtin',
    'entryLinkEditor',
    {}
  );
};
