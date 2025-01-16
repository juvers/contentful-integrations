module.exports = function (migration) {
  const brand = migration.editContentType('brand');

  brand
    .createField('treatmentPoints')
    .name('Treatment Points')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('treatmentType')
    .name('Treatment Type')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('treatmentPrice')
    .name('Treatment Price')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('treatmentDuration')
    .name('Treatment Duration')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('treatmentFrequency')
    .name('Treatment Frequency')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('treatmentResultsTime')
    .name('Treatment Results Time')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  brand
    .createField('treatmentDowntime')
    .name('Treatment Downtime')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
};
