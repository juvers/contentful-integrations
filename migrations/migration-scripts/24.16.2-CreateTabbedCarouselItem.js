module.exports = function (migration) {
  const element = migration
    .createContentType('elementTabbedCarouselItem')
    .name('Element > Tabbed Carousel Item')
    .description('Tabbed Carousel Item')
    .displayField('internalName');

  element
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('label')
    .name('Label')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('block')
    .name('Block')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockBackgroundImageWithCopy'],
      },
    ]);
};
