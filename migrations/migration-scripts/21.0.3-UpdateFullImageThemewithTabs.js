module.exports = function (migration) {
  const themeFullImage = migration.editContentType('themeFullImage');

  // Create groups
  const editorLayout = themeFullImage.createEditorLayout();
  editorLayout.createFieldGroup('desktop').name('Desktop');
  editorLayout.createFieldGroup('mobile').name('Mobile');

  // Desktop group
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('desktop');
  editorLayout.moveField('textBackgroundColor').afterField('internalName');
  editorLayout.moveField('textColor').afterField('textBackgroundColor');
  editorLayout.moveField('ctaBackgroundColor').afterField('textColor');
  editorLayout.moveField('ctaTextColor').afterField('ctaBackgroundColor');
  editorLayout.moveField('disclaimerTextColor').afterField('ctaTextColor');

  // Mobile group
  editorLayout
    .moveField('mobileImageBackgroundColor')
    .toTheTopOfFieldGroup('mobile');
  editorLayout
    .moveField('mobileTextColor')
    .afterField('mobileImageBackgroundColor');
  editorLayout
    .moveField('mobileCtaBackgroundColor')
    .afterField('mobileTextColor');
  editorLayout
    .moveField('mobileCtaTextColor')
    .afterField('mobileCtaBackgroundColor');
  editorLayout
    .moveField('mobileDisclaimerTextColor')
    .afterField('mobileCtaTextColor');
};
