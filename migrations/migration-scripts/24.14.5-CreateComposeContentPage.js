const { slug } = require('../constants/validation');
const helpText = require('../constants/helpText');

module.exports = function (migration) {
  const contentPage = migration
    .createContentType('contentPage')
    .name('Compose > Content Page')
    .description('Content Page Structure')
    .displayField('internalName');

  // Settings
  contentPage
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .required(true);

  contentPage.changeFieldControl('internalName', 'builtin', 'singleLine', {
    helpText: helpText.internalName,
  });

  contentPage
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }, slug])
    .disabled(false)
    .omitted(false);

  contentPage.changeFieldControl('slug', 'builtin', 'singleLine', {
    helpText:
      'This is the last part of the URL (Ex: www.alle.com/<this-is-slug>). For homepage must be set to "homepage"',
  });

  // SEO
  contentPage
    .createField('seoTitle')
    .name('Seo Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  contentPage
    .createField('seoDescription')
    .name('Seo Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  contentPage
    .createField('seoOgImage')
    .name('Seo OG Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  contentPage
    .createField('contentBlocks')
    .name('Content Blocks')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        { linkContentType: ['blockImage'] },
        { relationshipType: ['Composition'] },
      ],
      linkType: 'Entry',
    });

  contentPage.changeFieldControl(
    'contentBlocks',
    'builtin',
    'entryLinksEditor',
    {
      helpText: helpText.contentBlocks,
    }
  );

  contentPage.setAnnotations(['Contentful:AggregateRoot']);
  const editorLayout = contentPage.createEditorLayout();

  editorLayout
    .createFieldGroup('settings')
    .name('Settings')
    .collapsable(true)
    .collapsedByDefault(true);
  editorLayout
    .createFieldGroup('seo')
    .name('SEO')
    .collapsable(true)
    .collapsedByDefault(true);
  editorLayout
    .createFieldGroup('content')
    .name('Content')
    .collapsable(true)
    .collapsedByDefault(true);

  editorLayout.moveField('internalName').toTheTopOfFieldGroup('settings');
  editorLayout.moveField('slug').afterField('internalName');

  editorLayout.moveField('seoTitle').toTheTopOfFieldGroup('seo');
  editorLayout.moveField('seoDescription').afterField('seoTitle');
  editorLayout.moveField('seoOgImage').afterField('seoDescription');

  editorLayout.moveField('contentBlocks').toTheTopOfFieldGroup('content');
};
