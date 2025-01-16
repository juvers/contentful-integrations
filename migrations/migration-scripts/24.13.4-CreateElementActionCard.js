const {
  richTextBoldUnderlineItalicSuperscript,
  richTextHeadersAndLinks,
  richTextSubHeadersWithLinks,
} = require('../constants/validation');

module.exports = function (migration) {
  const actionCard = migration
    .createContentType('elementActionCard')
    .name('Element > Action Card')
    .description('Action Card Element')
    .displayField('internalName');

  actionCard
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  actionCard
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

  actionCard
    .createField('headline')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      richTextHeadersAndLinks,
    ])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('subheadline')
    .name('Subheadline')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      richTextSubHeadersWithLinks,
    ])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([{ linkContentType: ['image'] }])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('badge')
    .name('Badge')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('eyebrow')
    .name('Eyebrow')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ size: { max: 50 } }])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('cardDestination')
    .name('Card Destination')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^[0-9A-Za-z_s/]+$',
          flags: null,
        },
        message: 'Use screenName for native or url/slug for web',
      },
    ])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  actionCard
    .createField('metaProduct')
    .name('Product(s)')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['product'],
        },
      ],
    });

  actionCard
    .createField('metaConcernArea')
    .name('Concern Area(s)')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['concernArea'],
        },
      ],
    });

  actionCard
    .createField('metaUserJourney')
    .name('User Journey(s)')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['userJourney'],
        },
      ],
    });

  actionCard.changeFieldControl('cardDestination', 'builtin', 'singleLine', {
    helpText: 'Use screenName for native or url/slug for web',
  });

  actionCard.changeFieldControl('eyebrow', 'builtin', 'singleLine');

  // Making content type a Compose page
  actionCard.setAnnotations(['Contentful:AggregateRoot']);

  const editorLayout = actionCard.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  const metadataTab = editorLayout
    .createFieldGroup('metadata')
    .name('Metadata');

  // Page Content
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('codeId').afterField('internalName');
  editorLayout.moveField('headline').afterField('codeId');
  editorLayout.moveField('subheadline').afterField('headline');
  editorLayout.moveField('image').afterField('subheadline');
  editorLayout.moveField('badge').afterField('image');
  editorLayout.moveField('eyebrow').afterField('badge');
  editorLayout.moveField('cardDestination').afterField('eyebrow');

  // Metadata
  metadataTab.createFieldGroup('campaignId').name('Meta Details and Campaign');
  editorLayout.moveField('campaignName').afterField('campaignId');
  editorLayout.moveField('metaProduct').afterField('campaignName');
  editorLayout.moveField('metaConcernArea').afterField('metaProduct');
  editorLayout.moveField('metaUserJourney').afterField('metaConcernArea');
};
