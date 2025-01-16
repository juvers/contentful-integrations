const {
  richTextBoldUnderlineItalicSuperscript,
  richTextHeadersAndLinks,
} = require('../constants/validation');

module.exports = function (migration) {
  const composeProgramPage = migration
    .createContentType('programPage')
    .name('Compose > Program Page')
    .description('Compose Program Page')
    .displayField('name');

  composeProgramPage
    .createField('name')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProgramPage
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

  composeProgramPage
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

  composeProgramPage
    .createField('headlineRichText')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      richTextHeadersAndLinks,
    ]);

  composeProgramPage
    .createField('blocks')
    .name('Block(s)')
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
            'blockAnnouncement',
            'blockListCollection',
            'blockFootnote',
          ],
        },
      ],
      linkType: 'Entry',
    });

  composeProgramPage
    .createField('brand')
    .name('Brand')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['brand'],
      },
    ]);

  composeProgramPage.changeFieldControl('brand', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });

  // Metadata fields
  composeProgramPage
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProgramPage
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProgramPage
    .createField('metaProduct')
    .name('Product(s)')
    .type('Array')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['product'],
        },
      ],
    });

  composeProgramPage.changeFieldControl(
    'metaProduct',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  composeProgramPage
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeProgramPage
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  //Make it a Compose page
  composeProgramPage.setAnnotations(['Contentful:AggregateRoot']);

  const editorLayout = composeProgramPage.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');

  // Page Content
  editorLayout.moveField('name').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('name');
  editorLayout.moveField('hero').afterField('slug');
  editorLayout.moveField('headlineRichText').afterField('hero');
  editorLayout.moveField('brand').afterField('headlineRichText');
  editorLayout.moveField('blocks').afterField('headlineRichText');

  // Metadata
  metadataTab.createFieldGroup('segment').name('Segment Tracking');
  editorLayout.moveField('campaignId').toTheTopOfFieldGroup('segment');
  editorLayout.moveField('campaignName').afterField('campaignId');
  editorLayout.moveField('metaProduct').afterField('campaignName');
  metadataTab.createFieldGroup('seo').name('SEO');
  editorLayout.moveField('metaDescription').toTheTopOfFieldGroup('seo');
  editorLayout.moveField('metaTitle').afterField('metaDescription');
};
