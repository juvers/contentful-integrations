module.exports = function (migration) {
  const keyValuePair = migration
    .createContentType('elementKeyValuePair')
    .name('Element > Key Value Pair')
    .description('Single key-value pair')
    .displayField('internalName');

  keyValuePair
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  keyValuePair
    .createField('key')
    .name('Key')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  keyValuePair
    .createField('value')
    .name('value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
