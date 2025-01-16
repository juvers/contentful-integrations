const { hexColor } = require('../constants/helpText');
const { solidColor } = require('../constants/validation');

module.exports = function (migration) {
  const theme = migration
    .createContentType('valuePropositionTheme')
    .name('Theme > Value Proposition')
    .description('Theme for Block > Value Proposition')
    .displayField('internalName');

  theme
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  theme
    .createField('blockBackgroundColor')
    .name('Block Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': '#FFFFFF' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('blockBackgroundColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('blockTextColor')
    .name('Block Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': '#E6E6E6' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('blockTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('boxBackgroundColor')
    .name('Box Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': '#E6E6E6' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('boxBackgroundColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('boxTextColor')
    .name('Box Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': '#000000' })
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('boxTextColor', 'builtin', 'singleLine', {
    helpText: `${hexColor.sixDigit} Recommend using the same color as the associated icon.`,
  });

  theme
    .createField('ctaBackgroundColor')
    .name('CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('ctaBackgroundColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  theme
    .createField('ctaTextColor')
    .name('CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  theme.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });
};
