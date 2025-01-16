const {
  richTextBoldUnderlineItalicSuperscript,
  showTo,
  solidColor,
} = require('../constants/validation');

module.exports = function (migration) {
  const block = migration
    .createContentType('blockImageWithHeadline')
    .name('Block > Image With Headline')
    .description('Displays image with headline of various sizes')
    .displayField('internalName');

  block
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true);

  block
    .createField('showTo')
    .name('Show To Users')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.default,
      },
    ]);

  block
    .createField('showToScreens')
    .name('Show To Screens')
    .type('Symbol')
    .localized(false)
    .required(true)
    .defaultValue({ 'en-US': 'All' })
    .validations([
      {
        in: showTo.screens,
      },
    ]);

  block
    .createField('mobileImage')
    .name('Mobile Image')
    .type('Link')
    .localized(false)
    .required(true)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['imageWithDisclaimer'],
      },
    ]);

  block.changeFieldControl('mobileImage', 'builtin', 'entryLinkEditor', {
    helpText:
      'This will be the default image used for all screen sizes unless an option is chosen for larger screen size.',
  });

  block
    .createField('desktopImage')
    .name('Desktop Image')
    .type('Link')
    .localized(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['imageWithDisclaimer'],
      },
    ]);

  block
    .createField('headline')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: ['heading-1', 'heading-2', 'heading-3'],
      },
    ]);

  block
    .createField('headlineColor')
    .name('Headline Color')
    .type('Symbol')
    .localized(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);

  block
    .createField('disclaimerColor')
    .name('Disclaimer Color')
    .type('Symbol')
    .localized(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
};
