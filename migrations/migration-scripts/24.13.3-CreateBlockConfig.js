module.exports = function (migration) {
  const blockConfig = migration
    .createContentType('blockConfig')
    .name('Block > Config')
    .description('Store a collection of key-value pairs')
    .displayField('internalName');

  blockConfig
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockConfig
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      { unique: true },
      {
        regexp: {
          pattern: '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
          flags: null,
        },
        message: 'Must be camelCased',
      },
    ])
    .disabled(false)
    .omitted(false);

  blockConfig
    .createField('config')
    .name('Config')
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
          linkContentType: ['elementKeyValuePair'],
        },
      ],
      linkType: 'Entry',
    });
};
