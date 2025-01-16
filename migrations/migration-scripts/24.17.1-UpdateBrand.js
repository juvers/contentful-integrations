module.exports = function (migration) {
  const brand = migration.editContentType('brand');

  brand
    .createField('treatmentPointsMeasurement')
    .name('Treatment Points Measurement')
    .type('Symbol')
    .localized(false)
    .required(true);

  brand.moveField('treatmentPointsMeasurement').afterField('treatmentPoints');
}
