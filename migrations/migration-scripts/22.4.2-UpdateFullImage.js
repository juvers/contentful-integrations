const {
  richTextBoldUnderlineItalic,
  richTextLinks,
} = require('../constants/validation');

module.exports = function (migration) {
  const block = migration.editContentType('blockFullImage');

  // new field
  block
    .createField('footnote')
    .name('Footnote')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextLinks,
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  block.moveField('footnote').afterField('cta');
};
