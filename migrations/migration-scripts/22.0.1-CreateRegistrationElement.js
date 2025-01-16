module.exports = function (migration) {
  const ctaRegistrationButton = migration
    .createContentType('elementRegistrationCTA')
    .name('Element > Registration (CTA)')
    .description('CTA Registration Element Content Type')
    .displayField('internalName');

  ctaRegistrationButton
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  ctaRegistrationButton.changeFieldControl(
    'internalName',
    'builtin',
    'singleLine',
    {
      helpText: 'Due to legal constraints, no copy can be edited or removed.',
    }
  );

  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  const blockBannerWithCopy = migration.editContentType('bannerWithCopy');
  const fullImage = migration.editContentType('blockFullImage');
  const valuePropositionBlock = migration.editContentType(
    'valuePropositionBlock'
  );

  blockBannerWithCopy.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
        'elementRegistrationCTA',
      ],
    },
  ]);

  fullImage.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
        'elementRegistrationCTA',
      ],
    },
  ]);

  blockImageAndBanner.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
        'elementRegistrationCTA',
      ],
    },
  ]);

  valuePropositionBlock.editField('otherElements').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockCopy',
          'blockFootnote',
          'ctaButton',
          'offerCTAButton',
          'elementFindASpecialist',
          'elementRegistrationCTA',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
