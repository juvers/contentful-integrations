const {
  mobileIcon,
  richTextLinks,
  entryHyperlinkTypeLink,
  richTextBoldUnderlineItalicStrikethrough
} = require('../constants/validation');

module.exports = function (migration) {
  const blockFootnote = migration.editContentType('blockFootnote');
  blockFootnote
    .editField('footnote')
    .validations([
      richTextBoldUnderlineItalicStrikethrough,
      richTextLinks,
      entryHyperlinkTypeLink
    ]);

  const linkWithCopy = migration.editContentType('linkWithCopy');
  linkWithCopy
    .createField('linkParams')
    .name('Link Params')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  linkWithCopy.editField('slug').name('DEPRECATED: Slug').required(false).disabled(true);

  const iconWithCopy = migration.editContentType('iconWithCopy');
  iconWithCopy
    .editField('Icon')
    .validations([
      mobileIcon
    ]);

};