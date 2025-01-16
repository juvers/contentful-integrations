module.exports = function (migration) {
  const elementSettings = migration
    .createContentType('elementSettings')
    .name('Element > Settings')
    .description('Settings')
    .displayField('internalName');

  elementSettings
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementSettings
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([{ unique: true }]);

  elementSettings
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false);

  elementSettings
    .createField('description')
    .name('Description')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, italics, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyperlink and link entry are allowed',
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
    ]);

  const blockSettingsGroup = migration
    .createContentType('blockSettingsGroup')
    .name('Block > Settings Group')
    .description('Settings Group')
    .displayField('internalName');

  blockSettingsGroup
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockSettingsGroup
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([{ unique: true }]);

  blockSettingsGroup
    .createField('description')
    .name('Description')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, italics, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
        message: 'Only hyperlink and link entry are allowed',
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
    ]);

  blockSettingsGroup
    .createField('settings')
    .name('Settings')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .type('Array')
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['elementSettings'],
        },
      ],
      linkType: 'Entry',
    });
};
