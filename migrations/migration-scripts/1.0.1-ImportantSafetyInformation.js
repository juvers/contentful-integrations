module.exports = function (migration) {
  const importantSafetyInformation = migration
    .createContentType('importantSafetyInformation')
    .name('Important Safety Information')
    .description('')
    .displayField('internalName');
  importantSafetyInformation
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  importantSafetyInformation
    .createField('singleBrandTitle')
    .name('Single Brand Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  importantSafetyInformation
    .createField('multipleBrandTitle')
    .name('Multiple Brand Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  importantSafetyInformation
    .createField('templates')
    .name('Templates')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: ['importantSafetyInformationTemplate'],
        },
      ],

      linkType: 'Entry',
    });

  importantSafetyInformation
    .createField('longBrandNames')
    .name('Long Brand Names')
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
          linkContentType: ['brand'],
        },
      ],

      linkType: 'Entry',
    });

  importantSafetyInformation
    .createField('shortBrandName')
    .name('Short Brand Name')
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
          linkContentType: ['brand'],
        },
      ],

      linkType: 'Entry',
    });

  importantSafetyInformation.changeFieldControl(
    'internalName',
    'builtin',
    'singleLine',
    {}
  );
  importantSafetyInformation.changeFieldControl(
    'singleBrandTitle',
    'builtin',
    'singleLine',
    {}
  );
  importantSafetyInformation.changeFieldControl(
    'multipleBrandTitle',
    'builtin',
    'singleLine',
    {}
  );
  importantSafetyInformation.changeFieldControl(
    'templates',
    'builtin',
    'entryLinksEditor',
    {}
  );
  importantSafetyInformation.changeFieldControl(
    'longBrandNames',
    'builtin',
    'entryLinksEditor',
    {}
  );
  importantSafetyInformation.changeFieldControl(
    'shortBrandName',
    'builtin',
    'entryLinksEditor',
    {}
  );
  const importantSafetyInformationTemplate = migration
    .createContentType('importantSafetyInformationTemplate')
    .name('Important Safety Information Template')
    .description('')
    .displayField('internalName');
  importantSafetyInformationTemplate
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  importantSafetyInformationTemplate
    .createField('template')
    .name('Template')
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
    .createField('codeId')
    .name('CodeID')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  importantSafetyInformationTemplate.changeFieldControl(
    'internalName',
    'builtin',
    'singleLine',
    {}
  );

  importantSafetyInformationTemplate.changeFieldControl(
    'template',
    'builtin',
    'richTextEditor',
    {
      helpText: 'Keywords: {{LONG_BRAND_NAMES}} {{SHORT_BRAND_NAMES}}',
    }
  );

  importantSafetyInformationTemplate.changeFieldControl(
    'codeId',
    'builtin',
    'singleLine',
    {
      helpText: 'This field will be provided by the developers',
    }
  );
};
