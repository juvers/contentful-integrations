const { richTextBoldUnderlineItalicStrikethrough } = require('../constants/validation');

module.exports = function (migration) {
  // Making copy field a text with rich text editor
  const iconWithCopy = migration.editContentType('iconWithCopy');

  iconWithCopy.editField('copy').name('DEPRECATED: Copy').required(false).disabled(true);

  iconWithCopy.changeFieldControl(
    'copy',
    'builtin',
    'singleLine',
    {
      helpText:
        'Do not use this field. Use the "Copy" field instead.',
    }
  )

  iconWithCopy.createField('richCopy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([richTextBoldUnderlineItalicStrikethrough])
    .disabled(false)
    .omitted(false);

  iconWithCopy.changeFieldControl(
    'richCopy',
    'builtin',
    'richTextEditor',
    {
      helpText:
        'You can use the following dynamic variables when composing your message: {{promotionOfferValue}}, {{referringUserOfferValue}}. For example, "Referred friends will receive {{promotionOfferValue}} off your their treatment and you will receive {{referringUserOfferValue}} off your next treatment."',
    }
  )
  
  // Reorganize fields
  iconWithCopy.moveField('richCopy').afterField('internalName');
  iconWithCopy.moveField('copy').afterField('Icon');
};
