module.exports = function (migration) {
  const composePageArticle = migration.editContentType('articlePage');

  composePageArticle
    .createField('mlrc')
    .name('MLRC')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['elementMLRC'],
      },
    ]);

  composePageArticle.changeFieldControl('mlrc', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });
};
