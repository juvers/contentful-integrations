module.exports = function (migration) {
  const treatmentGuide = migration.editContentType('contentPage');

  treatmentGuide.editField('contentBlocks').items({
    type: 'Link',
    linkType: 'Entry',
    validations: [
      {
        linkContentType: [
          'blockImageWithHeadline',
          'splitCopyAndImage',
          'carouselCardCarousel',
        ],
      },
    ],
  });
};
