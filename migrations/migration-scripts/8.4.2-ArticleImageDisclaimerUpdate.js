module.exports = function (migration) {
  const image = migration.editContentType('image');
  image.deleteField('disclaimer');

  const composePageArticle = migration.editContentType('pageArticle');

  composePageArticle.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: ['blockFootnote', 'blockCopy', 'video', 'blockImage'],
      },
    ],
    linkType: 'Entry',
  });

  composePageArticle.editField('hero').validations([
    {
      linkContentType: ['video', 'blockImage'],
    },
  ]);

  composePageArticle.changeFieldControl('hero', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });
};
