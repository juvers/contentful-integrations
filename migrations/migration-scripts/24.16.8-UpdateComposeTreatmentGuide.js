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
          'carouselTabbedCarousel',
        ],
      },
    ],
  });
};
