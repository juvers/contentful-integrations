const { slug } = require('../constants/validation');

module.exports = function (migration) {
  const treatmentGuide = migration.editContentType('treatmentGuide');

  treatmentGuide
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([slug])
    .disabled(false)
    .omitted(false);

  treatmentGuide.moveField('slug').afterField('internalName');
};
