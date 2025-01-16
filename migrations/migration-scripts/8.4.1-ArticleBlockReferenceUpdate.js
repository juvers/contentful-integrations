module.exports = function (migration) {
  const blockImage = migration.editContentType('blockImage');

  blockImage.changeFieldControl('image', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });

  const composePageArticle = migration.editContentType('pageArticle');

  composePageArticle.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockFootnote',
          'blockCopy',
          'image',
          'video',
          'blockImage',
        ],
      },
    ],
    linkType: 'Entry',
  });

  composePageArticle.editField('hero').validations([
    {
      linkContentType: ['image', 'video', 'blockImage'],
    },
  ]);
};
