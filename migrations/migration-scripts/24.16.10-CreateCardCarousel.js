const {
  richTextBoldUnderlineItalicSuperscript,
  showTo,
} = require('../constants/validation');

module.exports = function (migration) {
  const carousel = migration
    .createContentType('carouselCardCarousel')
    .name('Carousel > Card Carousel')
    .description('Card Carousel')
    .displayField('internalName');

  carousel
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  carousel
    .createField('showToUser')
    .name('Show To User')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.default,
      },
    ]);

  carousel
    .createField('showToScreens')
    .name('Show To Screens')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.screens,
      },
    ]);

  carousel
    .createField('headline')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: ['heading-1', 'heading-2'],
        message: 'Only heading 1, heading 2',
      },
    ]);

  carousel
    .createField('carousel')
    .name('Carousel')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['elementImageCard'],
        },
      ],
    });

  carousel
    .createField('cta')
    .name('CTA')
    .type('Link')
    .localized(false)
    .required(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['ctaButton', 'buttonWithIcon'],
      },
    ]);
};
