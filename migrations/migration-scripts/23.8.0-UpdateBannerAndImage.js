const validation = require('../constants/validation');

module.exports = function (migration) {
  const block = migration.editContentType('blockImageAndBanner');

  block
    .editField('copy')
    .validations([
      validation.richTextBoldUnderlineItalic,
      validation.richTextHeadersLinksLists,
      validation.entryHyperlinkTypeLink,
    ]);
};
