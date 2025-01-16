module.exports = function (migration) {
  const blockFooter = migration.editContentType('blockFooter');

  blockFooter
    .createField('links')
    .name('Link(s)')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['link', 'staticCode'],
        },
      ],
      linkType: 'Entry',
    });

  blockFooter.moveField('links').afterField('codeId');
};
