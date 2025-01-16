module.exports = function (migration) {
  const composeLandingPage = migration.editContentType('pageLandingPage');

  composeLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: ['bannerWithCopy'],
      },
      { relationshipType: ['Composition'] },
    ],
    linkType: 'Entry',
  });
};
