module.exports = function (migration) {
  // Making eyebrow and badge fields optional.
  const elementActionCard = migration.editContentType('elementActionCard');

  elementActionCard.editField('eyebrow').required(false);
  elementActionCard.editField('badge').required(false);

  const LinkList = migration.editContentType('linkWithCopy');

  LinkList.createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: '^[0-9A-Za-z_s/]+$',
          flags: null,
        },
        message:
          'If directing to an article or treatment guide, add the slug here',
      },
    ])
    .disabled(false)
    .omitted(false);

  LinkList.changeFieldControl('slug', 'builtin', 'singleLine', {
    helpText: 'Use screenName for native or url/slug for web',
  });
};
