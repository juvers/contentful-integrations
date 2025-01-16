module.exports = function (migration) {
  const block = migration.editContentType('blockImageAndBanner');

  // new field
  block
    .createField('centerImage')
    .name('Center Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  // create groups
  const blockLayout = block.createEditorLayout();
  blockLayout.createFieldGroup('content', {
    name: 'Content',
  });

  blockLayout
    .editFieldGroup('content')
    .createFieldGroup('image')
    .name('Image')
    .changeFieldGroupControl('builtin', 'fieldset')
    .helpText('Fields relating to image section of Image And Banner');

  blockLayout
    .editFieldGroup('content')
    .createFieldGroup('banner')
    .name('Banner')
    .changeFieldGroupControl('builtin', 'fieldset')
    .helpText('Fields relating to banner section of Image And Banner');

  blockLayout
    .editFieldGroup('content')
    .createFieldGroup('themeAndLayout')
    .name('Theme and Layout')
    .changeFieldGroupControl('builtin', 'fieldset')
    .helpText('Fields relating to theme and layout of Image And Banner');

  // image group
  blockLayout.moveField('image').toTheTopOfFieldGroup('image');
  blockLayout.moveField('imageDisclaimer').afterField('image');

  // banner group
  blockLayout.moveField('centerImage').toTheTopOfFieldGroup('banner');
  blockLayout.moveField('copy').afterField('centerImage');
  blockLayout.moveField('cta').afterField('copy');
  blockLayout.moveField('disclaimer').afterField('cta');

  // theme and layout group
  blockLayout.moveField('theme').toTheTopOfFieldGroup('themeAndLayout');
  blockLayout.moveField('desktopLayout').afterField('theme');
  blockLayout.moveField('mobileLayout').afterField('desktopLayout');

  // update Block > Hero With Background Video field name for consistent field naming
  const backgroundVideoBlock = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );
  backgroundVideoBlock.editField('centerLogo').name('Center Image');
};
