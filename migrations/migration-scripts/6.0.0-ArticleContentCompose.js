module.exports = function (migration) {
  const blockCopy = migration
    .createContentType('blockCopy')
    .name('Block > Copy')
    .description(
      'Copy content supports H1,H2,H3, ordered lists, unordered lists, hyperlinks, bold, italics, and underline.'
    )
    .displayField('internalName');

  blockCopy
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockCopy
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, italics, and underline marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'ordered-list',
          'unordered-list',
          'entry-hyperlink',
        ],
        message:
          'Only headings, ordered list, unordered list, link to Url, link to entry are allowed',
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

  const blockFootnote = migration
    .createContentType('blockFootnote')
    .name('Block > Footnote')
    .description(
      'Footnote content supports H1, H2, H3, bold, underline, and italics'
    )
    .displayField('internalName');

  blockFootnote
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockFootnote
    .createField('footnote')
    .name('Footnote')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italics marks are allowed',
      },
      {
        enabledNodeTypes: ['heading-1', 'heading-2', 'heading-3'],
        message: 'Only headings are allowed',
      },
    ]);

  const composePageArticle = migration
    .createContentType('pageArticle')
    .name('Compose > Page Article')
    .description('Compose Article Page Container')
    .displayField('name');

  composePageArticle
    .createField('name')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composePageArticle
    .createField('breadcrumb')
    .name('Breadcrumb')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composePageArticle
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composePageArticle
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
        linkContentType: ['image', 'video'],
      },
      { relationshipType: ['Composition'] },
    ]);

  composePageArticle
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
          linkContentType: ['blockFootnote', 'blockCopy', 'image', 'video'],
        },
        { relationshipType: ['Composition'] },
      ],
      linkType: 'Entry',
    });

  composePageArticle
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
        { relationshipType: ['Composition'] },
      ],
      linkType: 'Entry',
    });

  composePageArticle.changeFieldControl(
    'brands',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composePageArticle.changeFieldControl('hero', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: false,
  });

  // modify the compose content model field content to reference the pageArticle content model
  // see contentful documentation https://www.contentful.com/developers/docs/compose/cli-tools/
  const page = migration.editContentType('page');
  page.editField('content').validations([
    // enable the new page type, so it's picked up by Compose
    {
      linkContentType: ['pageArticle'],
    },
    { relationshipType: ['Composition'] },
  ]);

  const articleVideoBody = migration.deleteContentType('articleVideoBody');
  const articleVideoHero = migration.deleteContentType('articleVideoHero');
  const articleTitle = migration.deleteContentType('articleTitle');
  const articleImageBody = migration.deleteContentType('articleImageBody');
  const articleImageHero = migration.deleteContentType('articleImageHero');
  const articleFootnote = migration.deleteContentType('articleFootnote');
  const articleBodyCopy = migration.deleteContentType('articleBodyCopy');
  const articleBreadcrumb = migration.deleteContentType('articleBreadcrumb');
  const articlePage = migration.deleteContentType('articlePage');
};
