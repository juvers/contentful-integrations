module.exports = function (migration) {
  const block = migration.editContentType('blockFullImage');

  // Adding new fields
  block
    .createField('desktopImageAspectRatio')
    .name('Desktop Image Aspect Ratio')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        in: ['16:9', '16:4.5', '4:3', '1:1'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': '16:9' });

  block
    .createField('mobileImageAspectRatio')
    .name('Mobile Image Aspect Ratio')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        in: ['3:2', '1:1', '1:2', '1:4'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': '3:2' });

  // Updating helper texts
  block.changeFieldControl('image', 'builtin', 'entryLinkEditor', {
    helpText:
      'Default image aspect ratio is 16:9 (width:height). Image will be used for mobile, if no mobile image is entered. Text sits on top of image. Please ensure that accessibility guidelines are met.',
  });
  block.changeFieldControl('mobileImage', 'builtin', 'entryLinkEditor', {
    helpText:
      'Default image aspect ratio is 3:2 (width:height). If no mobile image is set, the desktop image and aspect ratio will be used on mobile view.',
  });

  // Moving new fields
  block.moveField('desktopImageAspectRatio').afterField('image');
  block.moveField('mobileImageAspectRatio').afterField('mobileImage');
};
