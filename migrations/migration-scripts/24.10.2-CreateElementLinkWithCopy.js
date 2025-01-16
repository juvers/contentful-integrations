module.exports = function (migration) {
  const LinkList = migration
    .createContentType('linkWithCopy')
    .name('Element > Link With Copy')
    .description('Link With Copy')
    .displayField('internalName');

  LinkList.createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  LinkList.createField('codeId')
    .name('Code ID')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  LinkList.createField('copy')
    .name('Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  LinkList.createField('link')
    .name('Link Destination')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^[0-9A-Za-z_s/]+$',
          flags: null,
        },
        message: 'Use screenName for native or url/slug for web',
      },
    ])
    .disabled(false)
    .omitted(false);

  LinkList.changeFieldControl('link', 'builtin', 'singleLine', {
    helpText: 'Use screenName for native or url/slug for web',
  });
};
