const MurmurHash3 = require('imurmurhash');
module.exports = function (migration) {
  const blockFooter = migration.editContentType('blockFooter');

  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');
  blockBeforeAndAfter.editField('disclaimerText').name('Disclaimer Text');

  const composeLandingPage = migration.editContentType('landingPage');
  composeLandingPage.editField('blocks').name('Block(s)');

  const link = migration.editContentType('link');
  link.editField('url').name('URL');
  link.editField('externalUri').name('DEPRECATED External URI');

  const ctaButton = migration.editContentType('ctaButton');
  ctaButton.editField('url').name('URL');

  const isi = migration.editContentType('importantSafetyInformation');
  isi.editField('templates').name('Templates(s)');
  isi.editField('longBrandNames').name('Long Brand Name(s)');
  isi.editField('shortBrandName').name('Short Brand Name(s)');

  const isiTemplate = migration.editContentType(
    'importantSafetyInformationTemplate'
  );
  isiTemplate.editField('codeId').name('Code Id');

  const landingPageMetadata = migration.editContentType('landingPageMetadata');
  landingPageMetadata.name('DEPRECATED Landing Page Meta');
  landingPageMetadata.description('DEPRECATED Landing Page Meta');

  landingPageMetadata.editField('campaignId').name('Campaign Id');
  landingPageMetadata.editField('fieldUserJourney').name('User Journey(s)');

  const articlePage = migration.editContentType('articlePage');
  articlePage.editField('blocks').name('Block(s)');
  articlePage.editField('brands').name('Brand(s)');

  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  blockImageAndBanner.editField('theme').required(false);
};
