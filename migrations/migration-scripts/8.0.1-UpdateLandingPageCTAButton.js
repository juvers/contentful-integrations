module.exports = function (migration) {
  const btnSegementMetadata = migration.editContentType('btnSegmentMetaData');
  const ctaButton = migration.editContentType('ctaButton');

  btnSegementMetadata.name('Element > Button Segment Metadata');

  ctaButton
    .name('Element > Button (Call To Action)')
    .description('Metadata for Element > Button (Call To Action)');
  ctaButton.deleteField('route');
  ctaButton.deleteField('externalUrl');
  ctaButton
    .createField('url')
    .name('Url')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
