module.exports = function (migration) {
  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage.deleteField('copy');

  blockFullImage
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'ordered-list',
          'unordered-list',
          'entry-hyperlink',
          'hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, ordered list, unordered list, hyperlink, and link to Link entry are allowed',
      },
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
};
