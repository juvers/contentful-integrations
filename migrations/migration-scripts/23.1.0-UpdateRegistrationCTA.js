const { hexColor } = require('../constants/helpText');
const { solidColor } = require('../constants/validation');

module.exports = function (migration) {
  const cta = migration.editContentType('elementRegistrationCTA');
  cta
    .createField('useSideBySide')
    .name('Use Side By Side')
    .type('Boolean')
    .localized(false)
    .required(true)
    .disabled(false)
    .defaultValue({ 'en-US': false })
    .omitted(false)
    .validations([]);

  cta
    .createField('registrationCtaBackgroundColor')
    .name('Registration CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  cta.changeFieldControl(
    'registrationCtaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  cta
    .createField('registrationCtaTextColor')
    .name('Registration CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  cta.changeFieldControl('registrationCtaTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  cta
    .createField('registrationCtaBorderColor')
    .name('Registration CTA Border Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  cta.changeFieldControl(
    'registrationCtaBorderColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  cta
    .createField('loginCtaBackgroundColor')
    .name('Login CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  cta.changeFieldControl('loginCtaBackgroundColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  cta
    .createField('loginCtaTextColor')
    .name('Login CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  cta.changeFieldControl('loginCtaTextColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  cta
    .createField('loginCtaBorderColor')
    .name('Login CTA Border Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  cta.changeFieldControl('loginCtaBorderColor', 'builtin', 'singleLine', {
    helpText: hexColor.sixDigit,
  });

  // populate existing entries' required field
  migration.transformEntries({
    contentType: 'elementRegistrationCTA',
    from: [],
    to: ['useSideBySide'],
    transformEntryForLocale: async function () {
      return { useSideBySide: false };
    },
  });
};
