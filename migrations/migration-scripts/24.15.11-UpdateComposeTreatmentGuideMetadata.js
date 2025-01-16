module.exports = function (migration) {
  const treatmentGuide = migration.editContentType('treatmentGuide');

  // New SEO fields
  treatmentGuide
    .createField('metaTitle')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  treatmentGuide
    .createField('metaDescription')
    .name('Description')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  treatmentGuide
    .createField('ogImage')
    .name('OG Image')
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

  // New Segment fields
  treatmentGuide
    .createField('metaConcernArea')
    .name('Concern Area(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['concernArea'],
        },
      ],
    });

  treatmentGuide
    .createField('metaProduct')
    .name('Product(s)')
    .type('Array')
    .localized(false)
    .required(true)
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

  treatmentGuide
    .createField('metaUserJourney')
    .name('User Journey(s)')
    .localized(false)
    .required(true)
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

  treatmentGuide
    .createField('metaContentTags')
    .name('Content Tag(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['contentTag'],
        },
      ],
    });

  treatmentGuide
    .createField('metaContentVisual')
    .name('Content Visual')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['contentVisual'],
        },
      ],
    });

  // Create groups (tabs)
  const editorLayout = treatmentGuide.createEditorLayout();
  // Page Content
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  // Segment
  editorLayout.createFieldGroup('segment').name('Segment Tracking');
  // SEO
  editorLayout.createFieldGroup('seo').name('SEO');

  // Move fields inside the Page Content group
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('slug').afterField('internalName');
  editorLayout.moveField('brand').afterField('slug');
  editorLayout.moveField('hero').afterField('brand');
  editorLayout.moveField('blocks').afterField('hero');

  // Move fields inside the Segment group
  editorLayout.moveField('metaTitle').toTheTopOfFieldGroup('segment');
  editorLayout.moveField('metaDescription').afterField('metaTitle');
  editorLayout.moveField('metaConcernArea').afterField('metaDescription');
  editorLayout.moveField('metaProduct').afterField('metaConcernArea');
  editorLayout.moveField('metaUserJourney').afterField('metaProduct');
  editorLayout.moveField('metaContentTags').afterField('metaUserJourney');
  editorLayout.moveField('metaContentVisual').afterField('metaContentTags');

  // Move fields inside the SEO group
  editorLayout.moveField('metaTitle').toTheTopOfFieldGroup('seo');
  editorLayout.moveField('metaDescription').afterField('metaTitle');
  editorLayout.moveField('ogImage').afterField('metaDescription');
};
