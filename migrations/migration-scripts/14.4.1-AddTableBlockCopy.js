module.exports = function (migration) {
  const blockCopy = migration.editContentType('blockCopy');

  blockCopy.editField('copy').validations([
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
        'table',
        'entry-hyperlink',
        'hyperlink',
      ],
      message:
        'Only heading 1, heading 2, heading 3, ordered list, unordered list, table, hyperlink, and link to Link entry are allowed',
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
