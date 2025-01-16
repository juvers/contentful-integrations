const validation = require('../constants/validation');
const helpText = require('../constants/helpText');

/**
 *
 * @param {import('contentful-migration').default} migration Migration Object
 * @param {import('contentful-migration').MigrationContext} context Context Object
 */
module.exports = function (migration) {
  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  const themeBeforeAndAfter = migration.editContentType('themeBeforeAndAfter');
  const themeFullImage = migration.editContentType('themeFullImage');
  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');
  const themeLogos = migration.editContentType('themeLogos');
  const valuePropositionTheme = migration.editContentType(
    'valuePropositionTheme'
  );

  themeBannerWithCopy
    .createField('headlineTextColor')
    .name('Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeBeforeAndAfter
    .createField('headlineTextColor')
    .name('Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('desktopHeadlineTextColor')
    .name('Desktop Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeFullImage
    .createField('mobileHeadlineTextColor')
    .name('Mobile Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeHeroWithBackgroundVideo
    .createField('headlineTextColor')
    .name('Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeImageAndBanner
    .createField('bannerHeadlineTextColor')
    .name('Banner Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeLogos
    .createField('headlineTextColor')
    .name('Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  valuePropositionTheme
    .createField('blockHeadlineTextColor')
    .name('Block Headline Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false);

  themeBannerWithCopy.changeFieldControl(
    'headlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  themeBeforeAndAfter.changeFieldControl(
    'headlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  themeHeroWithBackgroundVideo.changeFieldControl(
    'headlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  themeImageAndBanner.changeFieldControl(
    'bannerHeadlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  themeLogos.changeFieldControl('headlineTextColor', 'builtin', 'singleLine', {
    helpText: helpText.hexColor.sixDigit,
  });

  valuePropositionTheme.changeFieldControl(
    'blockHeadlineTextColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  themeBannerWithCopy.moveField('headlineTextColor').afterField('textColor');
  themeHeroWithBackgroundVideo
    .moveField('headlineTextColor')
    .afterField('textColor');
  themeImageAndBanner
    .moveField('bannerHeadlineTextColor')
    .afterField('bannerTextColor');
  themeLogos.moveField('headlineTextColor').afterField('textColor');
  valuePropositionTheme
    .moveField('blockHeadlineTextColor')
    .afterField('blockTextColor');
};
