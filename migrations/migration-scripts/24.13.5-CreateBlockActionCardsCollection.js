module.exports = function (migration) {
  const blockActionCardCollection = migration
    .createContentType('blockActionCardCollection')
    .name('Block > Action Cards')
    .description('Block Action Card Collection')
    .displayField('internalName');

  blockActionCardCollection
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockActionCardCollection
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
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

  blockActionCardCollection
    .createField('actionCardListItems')
    .name('Action Card List Items')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['elementActionCard'],
        },
      ],
      linkType: 'Entry',
    });
};
