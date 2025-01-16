module.exports = function (migration) {
  const block = migration.editContentType('valuePropositionBlock');

  // Adding new field
  block
    .createField('boxImageAspectRatio')
    .name('Box Image Aspect Ratio')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        in: ['1:1', '21:9', '3:4'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': '1:1' });
};
