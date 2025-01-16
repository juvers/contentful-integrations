const { showTo } = require('../constants/validation');

module.exports = function (migration) {
  const element = migration
    .createContentType('carouselTabbedCarousel')
    .name('Carousel > Tabbed Carousel')
    .description('Tabbed Carousel')
    .displayField('internalName');

  element
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  element
    .createField('showToUser')
    .name('Show To User')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.default,
      },
    ]);

  element
    .createField('title')
    .name('Title')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
        ],
        message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5 or heading 6 are allowed',
      },
    ]);

  element
    .createField('carousel')
    .name('Carousel')
    .type('Array')
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['elementTabbedCarouselItem'],
        },
      ],
    });
};
