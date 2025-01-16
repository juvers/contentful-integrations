const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');

  blockImageAndBanner
    .editField('copy')
    .validations([
      validation.richTextBoldUnderlineItalicSuperscript,
      validation.richTextHeadersLinksLists,
      validation.entryHyperlinkTypeLink,
    ]);
};
