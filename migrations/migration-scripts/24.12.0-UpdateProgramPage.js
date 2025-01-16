// @ts-check
module.exports = function (migration) {
  const programPage = migration.editContentType('programPage');

  const programPageLayout = programPage.editEditorLayout();
  const mlrcFieldGroup = programPageLayout.createFieldGroup('mlrc');
  mlrcFieldGroup.name('MLRC');

  programPage
    .createField('codeId')
    .name('Code ID')
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
      },
    ])
    .disabled(false)
    .omitted(false);

  programPage.createField('approvedForDistribution')
  .type('Boolean')
  .name('Approved for Distribution')
  .required(true);

  programPage.createField('approvedDate')
  .type('Date')
  .name('Approved Date')
  .required(true);

  programPage.createField('contentId')
  .type('Symbol')
  .name('Content ID')
  .required(true);

  programPage.editField('blocks')
  .items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockAnnouncement',
          'blockListCollection',
          'blockFootnote',
          'blockImage',
          'blockCopy',
        ],
      },
    ],
    linkType: 'Entry',
  });
  
  programPage.deleteField('headlineRichText')
  programPage.deleteField('hero')
  programPage.deleteField('slug')
  
  programPageLayout.moveField('approvedForDistribution').toTheTopOfFieldGroup('mlrc');
  programPageLayout.moveField('approvedDate').afterField('approvedForDistribution');
  programPageLayout.moveField('contentId').afterField('approvedDate');


  programPage.createField('ogImage')
    .type('Link')
    .linkType('Asset')
    .name('OG Image');

  programPage.createField('keywords')
    .name('Keywords')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  programPageLayout.moveField('ogImage').afterField('metaDescription');
  programPageLayout.moveField('keywords').afterField('ogImage');

  programPage
  .createField('fieldConcernArea')
  .name('Concern Area(s)')
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
        linkContentType: ['concernArea'],
      },
    ],
  });
programPage.changeFieldControl(
  'fieldConcernArea',
  'builtin',
  'entryLinksEditor',
  {
    showCreateEntityAction: false,
  }
);

programPage
  .createField('fieldUserJourney')
  .name('User Journey')
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
        linkContentType: ['userJourney'],
      },
    ],
  });
  programPage.changeFieldControl(
    'fieldUserJourney',
    'builtin',
    'entryLinksEditor',
    {
    showCreateEntityAction: false,
  }
  );

  programPage
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

  
  programPage
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

  programPage.moveField('keywords').afterField('name');
  programPage.moveField('codeId').afterField('name');
};
