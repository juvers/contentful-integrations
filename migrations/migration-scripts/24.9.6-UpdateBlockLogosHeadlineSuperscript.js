const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockLogos = migration.editContentType('blockLogos');

  blockLogos
    .editField('headline')
    .validations([
      {
        enabledMarks: ['superscript'],
        message: 'Only superscript marks are allowed',
      },
      validation.richTextHeadersAndLinks,
      validation.entryHyperlinkTypeLink,
    ]);
};
