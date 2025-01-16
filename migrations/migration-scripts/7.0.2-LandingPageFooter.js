module.exports = function (migration) {
  const blockFooter = migration
    .createContentType('blockFooter')
    .name('Block > Footer')
    .description('Footer presented in Allē consumer applications')
    .displayField('internalName');
  blockFooter
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blockFooter
    .createField('copy')
    .name('Copy')
    .type('Text')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  blockFooter
    .createField('showAboutLinks')
    .name('Show About Links')
    .type('Boolean')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });
  blockFooter
    .createField('showGlobalIsi')
    .name('Show Global ISI Link')
    .type('Boolean')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });
};
