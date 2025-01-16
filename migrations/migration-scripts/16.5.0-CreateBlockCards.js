module.exports = function (migration) {
  const composeCards = migration
    .createContentType('composeCards')
    .name('Compose > Cards')
    .description('Content type to handle Article cards')
    .displayField('internalName');

  composeCards
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeCards
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
          flags: null,
        },
        message: 'Must be camelCased',
      },
    ])
    .disabled(false)
    .omitted(false);
  composeCards.changeFieldControl('codeId', 'builtin', 'singleLine', {
    helpText:
      'This field is an unique identifier, which will be used to render this content in specific place on web app.',
  });

  composeCards
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeCards
    .createField('subhead')
    .name('Subhead')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeCards
    .createField('cards')
    .name('Cards')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .type('Array')
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['articlePage'],
        },
      ],
      linkType: 'Entry',
    });
  composeCards.changeFieldControl('cards', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });

  // Making content type a Compose page
  composeCards.setAnnotations(['Contentful:AggregateRoot']);
};
