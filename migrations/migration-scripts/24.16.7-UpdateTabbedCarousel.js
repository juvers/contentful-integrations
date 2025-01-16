const validation = require('../constants/validation');

module.exports = function (migration) {
  const tabbedCarousel = migration.editContentType('carouselTabbedCarousel');

  tabbedCarousel.editField('title').validations([
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
    validation.richTextBoldUnderlineItalicSuperscript,
  ]);
};
