module.exports = function (migration) {
  const IconList = migration
    .createContentType('iconWithCopy')
    .name('Element > Icon With Copy')
    .description('Icon with copy')
    .displayField('internalName');

  IconList.createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  IconList.createField('copy')
    .name('Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  IconList.createField('Icon')
    .name('Icon')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        in: ['LinkIcon', 'AddPersonIcon', 'DollarIcon'],
      },
    ])
    .disabled(false)
    .omitted(false);

  IconList.changeFieldControl('Icon', 'builtin', 'dropdown', {});
};
