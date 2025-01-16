module.exports = function (migration) {
  const themeImageWithHeadline = migration
    .createContentType('themeImageWithHeadline')
    .name('Theme > Image With Headline')
    .description('Styles to support Block > Image With Headline')
    .displayField('internalName');
  themeImageWithHeadline
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  themeImageWithHeadline
    .createField('headlineColor')
    .name('Headline Color')
    .type('Symbol')
    .localized(false)
    .validations([
      {
        regexp: {
          pattern: '^[a-fA-F0-9]+$',
          flags: null,
        },
        message: 'Must be a valid Hex color code. Ex: F08080, 66F08080',
      },
    ])
    .disabled(false)
    .omitted(false);

  const blockImageWithHeadline = migration.editContentType(
    'blockImageWithHeadline'
  );

  blockImageWithHeadline.deleteField('headlineColor');
  blockImageWithHeadline.deleteField('disclaimerColor');

  blockImageWithHeadline
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeImageWithHeadline'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockImageWithHeadline.changeFieldControl(
    'theme',
    'builtin',
    'entryLinkEditor',
    {
      showCreateEntityAction: true,
    }
  );

  blockImageWithHeadline
    .editEditorLayout()
    .moveField('theme')
    .afterField('internalName');
};
