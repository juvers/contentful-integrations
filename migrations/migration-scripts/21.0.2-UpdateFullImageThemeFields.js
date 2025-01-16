const { solidColor } = require('../constants/validation');
const { hexColor } = require('../constants/helpText');

module.exports = function (migration) {
  const themeFullImage = migration.editContentType('themeFullImage');

  // Renaming
  themeFullImage
    .editField('ctaBackgroundColor')
    .name('Desktop CTA Background Color');
  themeFullImage.editField('ctaTextColor').name('Desktop CTA Text Color');
  themeFullImage
    .editField('disclaimerTextColor')
    .name('Desktop Disclaimer Text Color');

  // Create new fields
  themeFullImage
    .createField('mobileCtaBackgroundColor')
    .name('Mobile CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  themeFullImage
    .createField('mobileCtaTextColor')
    .name('Mobile CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  themeFullImage
    .createField('mobileDisclaimerTextColor')
    .name('Mobile Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);

  //Helper texts
  themeFullImage.changeFieldControl(
    'mobileCtaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: `This is for the CTA on mobile view. ${hexColor.sixDigit}`,
    }
  );
  themeFullImage.changeFieldControl(
    'mobileCtaTextColor',
    'builtin',
    'singleLine',
    {
      helpText: `This is for the CTA on mobile view. ${hexColor.sixDigit}`,
    }
  );
  themeFullImage.changeFieldControl(
    'mobileDisclaimerTextColor',
    'builtin',
    'singleLine',
    {
      helpText: `This is for the Disclaimer Text on mobile view.  ${hexColor.sixDigit}`,
    }
  );
  themeFullImage.changeFieldControl(
    'mobileImageBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );
};
