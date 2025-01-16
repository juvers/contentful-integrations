module.exports = function (migration) {
  const treatmentGuide = migration
    .createContentType('treatmentGuide')
    .name('Compose > Treatment Guide')
    .description('Brand Treatment Guide')
    .displayField('internalName');

  treatmentGuide
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .required(true);

  treatmentGuide
    .createField('brand')
    .name('Brand')
    .type('Array')
    .required(true)
    .validations([
      {
        size: {
          max: 1,
        },
      },
    ])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['brand'],
        },
      ],
    });

  treatmentGuide.changeFieldControl('brand', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  treatmentGuide
    .createField('blocks')
    .name('Block(s)')
    .type('Array')
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['blockBeforeAndAfter', 'blockFAQ'],
        },
      ],
    });

  // Making content type a Compose page
  treatmentGuide.setAnnotations(['Contentful:AggregateRoot']);
};
