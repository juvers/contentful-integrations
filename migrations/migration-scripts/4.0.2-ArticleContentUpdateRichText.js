module.exports = function (migration) {
  const articleBodyCount = migration.editContentType('articleBodyCopy');

  articleBodyCount.editField('bodyCopy').validations([
    {
      enabledMarks: ['underline', 'bold', 'italic'],
      message: 'Only underline, bold, and italic marks are allowed',
    },
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'unordered-list',
        'ordered-list',
        'entry-hyperlink',
      ],
      message:
        'Only asset, inline entry, heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, unordered list, ordered list, link to Url, block entry, and link to entry nodes are allowed',
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

  const articleFootnote = migration.editContentType('articleFootnote');

  articleFootnote.editField('footnote').validations([
    {
      enabledMarks: ['underline', 'bold', 'italic'],
      message: 'Only underline, bold, and italic marks are allowed',
    },
    {
      enabledNodeTypes: ['unordered-list', 'ordered-list', 'entry-hyperlink'],
      message:
        'Only unordered list, ordered list, and link to entry nodes are allowed',
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
