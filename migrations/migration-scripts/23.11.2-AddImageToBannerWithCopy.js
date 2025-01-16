module.exports = function (migration) {
  const block = migration.editContentType('bannerWithCopy');

  // new field
  block
    .createField('topImage')
    .name('Top Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);
  block.moveField('topImage').beforeField('copy');
};
