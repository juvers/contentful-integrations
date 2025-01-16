module.exports = function (migration) {
  const composeArticlePage = migration.editContentType('articlePage');

  composeArticlePage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockFootnote',
          'blockCopy',
          'blockVideo',
          'blockImage',
          'blockBeforeAndAfter',
          'joinBanner',
          'blockFAQ',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
