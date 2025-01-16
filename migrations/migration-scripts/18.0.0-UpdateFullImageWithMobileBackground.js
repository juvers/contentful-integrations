const validation = require('../constants/validation');
module.exports = function (migration) {
  const themeFullImage = migration.editContentType('themeFullImage');

  //Renaming
  themeFullImage.editField('textColor').name('Desktop Text Color');

  themeFullImage
    .editField('textBackgroundColor')
    .name('Desktop Image Overlay Color');

  themeFullImage
    .editField('mobileImageBackgroundColor')
    .name('Mobile Background Color');

  //New field
  themeFullImage
    .createField('mobileTextColor')
    .name('Mobile Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([validation.solidColor])
    .disabled(false)
    .omitted(false);

  // Helper texts
  themeFullImage.changeFieldControl(
    'mobileTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'This is for the text on mobile view. Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00). Please ensure Accessibility guidelines are met.',
    }
  );
  themeFullImage.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText:
      'This is the color for the button text. Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00). Please ensure Accessibility guidelines are met.',
  });
  themeFullImage.changeFieldControl(
    'mobileTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Optional square on desktop that sits on top of the image, behind the text. Enter a # + hexadecimal color value (Ex. #FFFF00); option to add two digits for transparency, see “How-to Create a Theme” in the Contentful Toolbox for details. (Ex: #FFFF00BF).',
    }
  );

  // Moving fields
  themeFullImage.moveField('textBackgroundColor').afterField('internalName');
  themeFullImage.moveField('textColor').afterField('textBackgroundColor');
  themeFullImage
    .moveField('mobileImageBackgroundColor')
    .afterField('textColor');
  themeFullImage
    .moveField('mobileTextColor')
    .afterField('mobileImageBackgroundColor');
};
