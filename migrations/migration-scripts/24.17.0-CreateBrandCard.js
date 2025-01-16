module.exports = function (migration) {
  const brandCard = migration
    .createContentType('elementBrandCard')
    .name('Element > Brand Card')
    .description('Brand Card')
    .displayField('internalName');

  brandCard
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  brandCard
    .createField('brand')
    .name('Brand')
    .type('Link')
    .localized(false)
    .required(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['brand'],
      },
    ]);

  brandCard
    .createField('image')
    .name('Image')
    .type('Link')
    .localized(false)
    .required(false)
    .linkType('Entry')
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  brandCard
    .createField('showCardText')
    .name('Show Card Text')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'true' })
    .validations([
      {
        in: ['true', 'false'],
      },
    ]);
};
