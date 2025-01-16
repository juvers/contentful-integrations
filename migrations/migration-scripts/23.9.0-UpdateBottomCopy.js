const {
  richTextBoldUnderlineItalic,
  entryHyperlinkTypeLink,
  richTextLinks,
} = require('../constants/validation');

module.exports = function (migration) {
  const blockAuthenticationFlow = migration.editContentType(
    'blockAuthenticationFlow'
  );

  blockAuthenticationFlow
    .createField('formBottomCopy')
    .name('Form Bottom Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  blockAuthenticationFlow.moveField('formBottomCopy').afterField('header');
};
