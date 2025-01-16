module.exports = function (migration) {
  const blockVideo = migration
    .createContentType('blockVideo')
    .name('Block > Video')
    .description('Block Video Content')
    .displayField('internalName');

  const composeArticlePage = migration.editContentType('articlePage');

  blockVideo
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockVideo
    .createField('disclaimer')
    .name('Disclaimer')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockVideo
    .createField('disclaimerTextColor')
    .name('Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockVideo
    .createField('video')
    .name('Video')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  composeArticlePage.editField('hero').validations([
    {
      linkContentType: ['blockImage', 'blockVideo'],
    },
  ]);
};
