const validation = require('../constants/validation');

module.exports = function (migration) {
  const bannerWithCopy = migration.editContentType('bannerWithCopy');

  bannerWithCopy
    .editField('copy')
    .validations([
      validation.richTextBoldUnderlineItalicSuperscript,
      validation.richTextHeadersLinksLists,
      validation.entryHyperlinkTypeLink,
    ]);
};
