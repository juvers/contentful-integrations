const validation = require('../constants/validation');
module.exports = function (migration) {
  const themeBeforeAndAfter = migration
    .createContentType('themeBeforeAndAfter')
    .name('Theme > Before And After')
    .description('Styles to support Block > Before And After')
    .displayField('internalName');

  themeBeforeAndAfter
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  themeBeforeAndAfter
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');
  blockBeforeAndAfter
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeBeforeAndAfter'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  const themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');
  themeBannerWithCopy
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  const themeImageAndBanner = migration.editContentType('themeImageAndBanner');
  themeImageAndBanner
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  const themeFullImage = migration.editContentType('themeFullImage');
  themeFullImage
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  const themeValueProposition = migration.editContentType(
    'valuePropositionTheme'
  );
  themeValueProposition
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );
  themeHeroWithBackgroundVideo
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  const themeLogos = migration.editContentType('themeLogos');
  themeLogos
    .createField('brandHeaderFont')
    .name('Brand Header Font')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: validation.fonts.default,
      },
    ]);

  themeBannerWithCopy.moveField('brandHeaderFont').afterField('internalName');
  themeLogos.moveField('brandHeaderFont').afterField('internalName');
  themeValueProposition.moveField('brandHeaderFont').afterField('internalName');
  themeImageAndBanner.moveField('brandHeaderFont').afterField('internalName');
  themeFullImage.moveField('brandHeaderFont').afterField('internalName');
  themeHeroWithBackgroundVideo
    .moveField('brandHeaderFont')
    .afterField('internalName');
};
