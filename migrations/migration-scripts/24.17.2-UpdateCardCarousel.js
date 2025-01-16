module.exports = function (migration) {
  const carousel = migration.editContentType('carouselCardCarousel');

  carousel
    .editField('carousel')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['elementBrandCard'],
        },
      ],
    });
}
