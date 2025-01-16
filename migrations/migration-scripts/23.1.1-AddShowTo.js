const validation = require('../constants/validation');

module.exports = function (migration) {
  const bannerWithCopy = migration.editContentType('bannerWithCopy');
  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');
  const blockFullImage = migration.editContentType('blockFullImage');
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  const blockLogos = migration.editContentType('blockLogos');
  const valuePropositionBlock = migration.editContentType(
    'valuePropositionBlock'
  );

  bannerWithCopy
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  bannerWithCopy.moveField('showTo').afterField('internalName');

  blockBeforeAndAfter
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  blockBeforeAndAfter.moveField('showTo').afterField('internalName');

  blockFullImage
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  blockFullImage.moveField('showTo').afterField('internalName');

  blockHeroWithBackgroundVideo
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  blockHeroWithBackgroundVideo.moveField('showTo').afterField('internalName');

  blockImageAndBanner
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  blockImageAndBanner.moveField('centerImage').beforeField('theme');
  blockImageAndBanner.moveField('showTo').afterField('internalName');

  blockLogos
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  blockLogos.moveField('showTo').afterField('internalName');

  valuePropositionBlock
    .createField('showTo')
    .name('Show To')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: validation.showTo.default,
      },
    ]);

  valuePropositionBlock.moveField('showTo').afterField('internalName');
};
