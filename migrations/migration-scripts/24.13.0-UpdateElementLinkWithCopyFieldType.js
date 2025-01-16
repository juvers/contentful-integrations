const { richTextBoldUnderlineItalicStrikethrough } = require('../constants/validation');

module.exports = function (migration) {
  // Making copy field a text with rich text editor
  const linkWithCopy = migration.editContentType('linkWithCopy');

  linkWithCopy.editField('copy').name('DEPRECATED: Copy').required(false).disabled(true);

  linkWithCopy.changeFieldControl(
    'copy',
    'builtin',
    'singleLine',
    {
      helpText:
        'Do not use this field. Use the "Copy" field instead.',
    }
  )

  linkWithCopy.createField('richCopy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([richTextBoldUnderlineItalicStrikethrough])
    .disabled(false)
    .omitted(false);

  linkWithCopy.changeFieldControl(
    'richCopy',
    'builtin',
    'richTextEditor',
    {
      helpText:
        'You can use the following dynamic variables when composing your message: {{promotionOfferValue}}, {{referringUserOfferValue}}. For example, "Referred friends will receive {{promotionOfferValue}} off your their treatment and you will receive {{referringUserOfferValue}} off your next treatment."',
    }
  )

  linkWithCopy.changeFieldControl(
    'link',
    'builtin',
    'singleLine',
    {
      helpText:
        'Use screenName for Native.',
    }
  )
  
  // Reorganize fields
  linkWithCopy.moveField('richCopy').afterField('codeId');
  linkWithCopy.moveField('copy').afterField('link');
};
