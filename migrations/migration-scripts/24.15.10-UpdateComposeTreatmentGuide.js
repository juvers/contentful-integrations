module.exports = function (migration) {
  const treatmentGuide = migration.editContentType('treatmentGuide');

  treatmentGuide.editField('blocks').items({
    type: 'Link',
    linkType: 'Entry',
    validations: [
      {
        linkContentType: [
          'blockBeforeAndAfter',
          'blockFAQ',
          'splitCopyAndImage',
        ],
      },
    ],
  });

  treatmentGuide
    .createField('hero')
    .name('Hero')
    .type('Array')
    .localized(false)
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
      validations: [{ linkContentType: ['splitCopyAndImage'] }],
    });

  treatmentGuide.moveField('hero').beforeField('blocks');
};
