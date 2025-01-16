module.exports = function (migration) {
  const elementCTA = migration.editContentType('ctaButton');
  elementCTA
    .name('Element > Button (CTA)')
    .description('Element with Button CTA');

  const brand = migration.editContentType('brand');
  brand.description('Brand and ISI');
  brand.editField('consumerImportantSafetyInformation').name('Consumer ISI');
  brand.editField('providerImportantSafetyInformation').name('Provider ISI');

  const ISI = migration.editContentType('importantSafetyInformation');
  ISI.name('ISI').description('Important Safety Information');

  const isiTemplate = migration.editContentType(
    'importantSafetyInformationTemplate'
  );
  isiTemplate
    .name('ISI Template')
    .description('Important Safety Information Template');
};
