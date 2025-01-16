module.exports = function (migration) {
  const themeFullImage = migration.editContentType('themeFullImage');

  // Full Image theme
  themeFullImage.changeFieldControl(
    'mobileTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'This is for the text on mobile view. Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00). Please ensure Accessibility guidelines are met.',
    }
  );
  themeFullImage.changeFieldControl(
    'textBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Optional square on desktop that sits on top of the image, behind the text. Enter a # + hexadecimal color value (Ex. #FFFF00); option to add two digits for transparency, see “How-to Create a Theme” in the Contentful Toolbox for details. (Ex: #FFFF00BF).',
    }
  );

  //Landing Page Sticky header theme
  const themeHeader = migration.editContentType('themeLogoHeader');
  themeHeader.changeFieldControl('backgroundColor', 'builtin', 'singleLine', {
    helpText:
      'This is the color of the banner that displays when user scrolls. Enter a # + hexadecimal color value (Ex. #FFFF00); option to add two digits for transparency, see “How-to Create a Theme” in the Contentful Toolbox for details. (Ex: #FFFF00BF).',
  });
};
