module.exports = function (migration) {
  // Metadata content types
  const concernArea = migration
    .createContentType('concernArea')
    .name('Metadata > Concern Area')
    .description(
      'A content model that relates to metadata field "Concern Area"'
    )
    .displayField('value');
  concernArea
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false);

  const userJourney = migration
    .createContentType('userJourney')
    .name('Metadata > User Journey')
    .description(
      'A content model that relates to metadata field "User Journey"'
    )
    .displayField('value');
  userJourney
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false);

  const product = migration
    .createContentType('product')
    .name('Metadata > Product')
    .description('A content model that relates to metadata field "Product"')
    .displayField('value');
  product
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false);
};
