module.exports = function (migration) {
  const route = migration
    .createContentType('route')
    .name('Route')
    .description(
      'It should be used to define content slug, and route to redirect if necessary'
    )
    .displayField('internalName');
  route
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  route
    .createField('slug')
    .name('Article Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: '^(?:[a-z0-9]+(_|-))*[a-z0-9]+$',
          flags: null,
        },
        message: 'Slugs must be in snake case',
      },
    ])
    .disabled(false)
    .omitted(false);
  route
    .createField('to')
    .name('Redirect To')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  route
    .createField('notification')
    .name('Notification Message')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
};
