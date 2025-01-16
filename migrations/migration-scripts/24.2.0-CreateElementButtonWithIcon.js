const { forceOpenSameTab, urlFormatting } = require('../constants/helpText');
const { customUrl, buttonIconOptions } = require('../constants/validation');

module.exports = function (migration) {
  const button = migration
    .createContentType('buttonWithIcon')
    .name('Element > Button With Icon (CTA)')
    .description(
      'Button link that has an icon to display to left or right of button text'
    )
    .displayField('internalName');

  button
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  button
    .createField('copy')
    .name('Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  button
    .createField('url')
    .name('URL')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([customUrl])
    .disabled(false)
    .omitted(false);

  button.changeFieldControl('url', 'builtin', 'singleLine', {
    helpText: urlFormatting.default,
  });

  button
    .createField('forceOpenSameTab')
    .name('Force Open Same Tab')
    .type('Boolean')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .defaultValue({ 'en-US': false });

  button.changeFieldControl('forceOpenSameTab', 'builtin', 'boolean', {
    helpText: forceOpenSameTab.default,
  });

  button
    .createField('buttonIcon')
    .name('Button Icon')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([buttonIconOptions])
    .disabled(false)
    .omitted(false);

  button.changeFieldControl('buttonIcon', 'builtin', 'dropdown', {});

  button
    .createField('iconPosition')
    .name('Icon Postion')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ in: ['Left', 'Right'] }])
    .disabled(false)
    .omitted(false);

  button.changeFieldControl('iconPosition', 'builtin', 'radio', {});
};
