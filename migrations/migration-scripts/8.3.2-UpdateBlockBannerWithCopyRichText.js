module.exports = function (migration) {
  const bannerWithCopy = migration.editContentType('bannerWithCopy');

  bannerWithCopy.deleteField('copy');

  bannerWithCopy
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
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
