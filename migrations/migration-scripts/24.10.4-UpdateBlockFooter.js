module.exports = function (migration) {
  // create new content type to hold references to links
  const links = migration
    .createContentType('elementLinks')
    .name('Element > Links')
    .description('Collection of Links')
    .displayField('internalName');

  links
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  links
    .createField('links')
    .name('Link(s)')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['link', 'staticCode'],
        },
      ],
      linkType: 'Entry',
    });

  // create field on footer to reference this new content type
  const footer = migration.editContentType('blockFooter');
  footer
    .createField('linksReference')
    .name('Link(s)')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          max: 1,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['elementLinks'],
        },
      ],
      linkType: 'Entry',
    });

  footer.changeFieldControl('linksReference', 'builtin', 'entryLinksEditor', {
    helpText:
      'Supports Static Code with codeIds: cookieSettingsLink, privacyChoicesLink',
  });

  footer.moveField('linksReference').afterField('codeId');

  // Disable the old field so editors will not see it.
  footer.editField('links').disabled(true);
};
