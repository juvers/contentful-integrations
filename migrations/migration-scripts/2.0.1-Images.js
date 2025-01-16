module.exports = function (migration) {
  const image = migration
    .createContentType('image')
    .name('Image')
    .description('')
    .displayField('internalName');
  image
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  image
    .createField('disclaimer')
    .name('Disclaimer')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  image
    .createField('alt')
    .name('Alt Text')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  image
    .createField('cloudinaryImage')
    .name('Cloudinary Image')
    .type('Object')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
