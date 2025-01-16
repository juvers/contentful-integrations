const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );

  blockHeroWithBackgroundVideo
    .editField('copy')
    .validations([
      validation.richTextBoldUnderlineItalicSuperscript,
      validation.richTextHeadersLinksLists,
      validation.entryHyperlinkTypeLink,
    ]);
};
