module.exports = function (migration) {
  const brand = migration.editContentType('brand');

  brand.editField('providerImportantSafetyInformation').validations([
    {
      enabledMarks: ['underline', 'bold', 'italic'],
      message: 'Only underline, bold, and italic marks are allowed',
    },
    {
      enabledNodeTypes: [
        'unordered-list',
        'ordered-list',
        'entry-hyperlink',
        'table',
      ],
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
