module.exports = function (migration) {
  const article = migration.editContentType('articlePage');

  article
    .createField('brands')
    .name('Brands')
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
          linkContentType: ['brand'],
        },
      ],
      linkType: 'Entry',
    });
  article.changeFieldControl('brands', 'builtin', 'entryLinksEditor', {
    bulkEditing: true,
    showCreateEntityAction: false,
  });

  article.moveField('brands').beforeField('sections');

  const articleBrands = migration.deleteContentType('articleBrands');
};
