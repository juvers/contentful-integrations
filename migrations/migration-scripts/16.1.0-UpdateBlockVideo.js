module.exports = function (migration) {
  const composePageArticle = migration.editContentType('articlePage');

  composePageArticle.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockFootnote',
          'blockCopy',
          'blockVideo',
          'blockImage',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
