module.exports = function (migration) {
  const composeArticlePage = migration
    .createContentType('articlePage')
    .name('Compose > Article Page')
    .description('Compose Article Page Container - v2')
    .displayField('name');

  composeArticlePage
    .createField('name')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeArticlePage
    .createField('slug')
    .name('Slug')
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
        message:
          'Slug must only contain alpha numeric characters separated by hyphen(-) or underscore(_)',
      },
    ])
    .disabled(false)
    .omitted(false);

  composeArticlePage
    .createField('breadcrumb')
    .name('Breadcrumb')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeArticlePage
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeArticlePage
    .createField('hero')
    .name('Hero')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockImage', 'video'],
      },
    ]);

  composeArticlePage
    .createField('blocks')
    .name('Blocks')
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
          linkContentType: [
            'blockFootnote',
            'blockCopy',
            'blockImage',
            'video',
          ],
        },
      ],
      linkType: 'Entry',
    });

  composeArticlePage
    .createField('brands')
    .name('Brands')
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
          linkContentType: ['brand'],
        },
      ],
      linkType: 'Entry',
    });

  composeArticlePage.changeFieldControl(
    'brands',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeArticlePage.changeFieldControl('hero', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });
};
