module.exports = function (migration) {
  const ctaButton = migration
    .createContentType('ctaButton')
    .name('Fragment > Button (Call To Action)')
    .description('CTA Button Content')
    .displayField('internalName');
  ctaButton
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  ctaButton
    .createField('buttonCopy')
    .name('Button Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  ctaButton
    .createField('disabledCopy')
    .name('Disabled Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  ctaButton
    .createField('externalUrl')
    .name('External Url')
    .type('Text')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  ctaButton
    .createField('route')
    .name('Route')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['route'],
      },
    ]);
  const btnSegmentMetadata = migration
    .createContentType('btnSegmentMetaData')
    .name('Fragment > Button Segment Metadata')
    .description('Metadata for CTA Button')
    .displayField('internalName');
  btnSegmentMetadata
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  btnSegmentMetadata
    .createField('activator')
    .name('Activator')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  btnSegmentMetadata
    .createField('explainer')
    .name('Explainer')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  ctaButton
    .createField('segmentMetadata')
    .name('Segment Metadata')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['btnSegmentMetaData'],
      },
    ]);
};
