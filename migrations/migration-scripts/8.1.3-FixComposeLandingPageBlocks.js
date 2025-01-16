module.exports = function (migration) {
  const composeLandingPage = migration.editContentType('pageLandingPage');
  composeLandingPage.deleteField('blocks');

  composeLandingPage
    .createField('blocks')
    .name('Blocks')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['bannerWithCopy', 'blockFullImage'],
        },
      ],
      linkType: 'Entry',
    });
};
