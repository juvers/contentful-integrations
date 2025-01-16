const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage
    .editField('copy')
    .validations([
      validation.richTextBoldUnderlineItalicSuperscript,
      validation.richTextHeadersLinksLists,
      validation.entryHyperlinkTypeLink,
    ]);
};
