const validation = require('../constants/validation');
const helpText = require('../constants/helpText');
module.exports = function (migration) {
  const blockBannerWithCopy = migration.editContentType('bannerWithCopy');
  const fullImage = migration.editContentType('blockFullImage');
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');

  const elementFindASpecialist = migration
    .createContentType('elementFindASpecialist')
    .name('Element > Find A Specialist (CTA)')
    .description('Find A Specialist CTA')
    .displayField('internalName');

  elementFindASpecialist
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementFindASpecialist
    .createField('buttonCopy')
    .name('Button Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'FIND A SPECIALIST' })
    .validations([])
    .disabled(false)
    .omitted(false);

  elementFindASpecialist
    .createField('url')
    .name('URL')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([validation.customUrl])
    .disabled(false)
    .omitted(false);

  elementFindASpecialist.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: helpText.urlFindASpecialist.default,
  });

  blockBannerWithCopy.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
      ],
    },
  ]);

  fullImage.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
      ],
    },
  ]);

  blockImageAndBanner.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
      ],
    },
  ]);

  const elementFindAProvider = migration.deleteContentType(
    'elementFindAProvider'
  );
};
