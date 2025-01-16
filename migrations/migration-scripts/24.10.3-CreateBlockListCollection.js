module.exports = function (migration) {
  const blockList = migration
    .createContentType('blockListCollection')
    .name('Block > List Collection')
    .description('Block List Collection')
    .displayField('internalName');

  blockList
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockList
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockList
    .createField('listItems')
    .name('List Items')
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
          linkContentType: ['iconWithCopy', 'linkWithCopy'],
        },
      ],
      linkType: 'Entry',
    });
};
