module.exports = function (migration) {
  const articleBreadcrumb = migration
    .createContentType('articleBreadcrumb')
    .name('Article > Breadcrumb')
    .description('Breadcrumb for Article')
    .displayField('internalName');

  articleBreadcrumb
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleBreadcrumb
    .createField('breadcrumb')
    .name('Breadcrumb')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  const articleTitle = migration
    .createContentType('articleTitle')
    .name('Article > Title')
    .description('Title for Article')
    .displayField('internalName');

  articleTitle
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleTitle
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  const articleImageHero = migration
    .createContentType('articleImageHero')
    .name('Article > Image > Hero')
    .description('Hero Image for Article')
    .displayField('internalName');

  articleImageHero
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleImageHero
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  const articleImageBody = migration
    .createContentType('articleImageBody')
    .name('Article > Image > Body')
    .description('Body Image for Article')
    .displayField('internalName');

  articleImageBody
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleImageBody
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  const articleBodyCopy = migration
    .createContentType('articleBodyCopy')
    .name('Article > Body > Copy')
    .description('Body Copy for Article')
    .displayField('internalName');

  articleBodyCopy
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleBodyCopy
    .createField('bodyCopy')
    .name('Body Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline'],
        message: 'Only bold and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['ordered-list', 'unordered-list', 'entry-hyperlink'],
        message:
          'Only ordered list, unordered list, link to Url, link to entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  const articleFootnote = migration
    .createContentType('articleFootnote')
    .name('Article > Footnote')
    .description('Footnote for Article')
    .displayField('internalName');

  articleFootnote
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleFootnote
    .createField('footnote')
    .name('Footnote')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline'],
        message: 'Only bold and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['ordered-list', 'unordered-list', 'entry-hyperlink'],
        message:
          'Only ordered list, unordered list, link to Url, link to entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  const articleBrands = migration
    .createContentType('articleBrands')
    .name('Article > Brands')
    .description('Brands associated with Article')
    .displayField('internalName');

  articleBrands
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleBrands
    .createField('brands')
    .name('Brands')
    .type('Array')
    .localized(false)
    .required(true)
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

  articleBrands.changeFieldControl('brands', 'builtin', 'entryLinksEditor', {
    bulkEditing: true,
    showCreateEntityAction: false,
  });

  const article = migration
    .createContentType('articlePage')
    .name('Article.Page')
    .description('Article Page Container')
    .displayField('internalName');

  article
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  article
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
        message: 'Slugs must be in snake case',
      },
    ])
    .disabled(false)
    .omitted(false);

  article
    .createField('sections')
    .name('Sections')
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
            'articleBreadcrumb',
            'articleBodyCopy',
            'articleImageBody',
            'articleImageHero',
            'articleTitle',
            'articleBrands',
            'articleFootnote',
          ],
        },
      ],
      linkType: 'Entry',
    });
};
