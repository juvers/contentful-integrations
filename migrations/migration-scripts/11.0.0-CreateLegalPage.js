module.exports = function (migration) {
  const composeLegalPage = migration
    .createContentType('legalPage')
    .name('Compose > Legal Page')
    .description('Compose Legal Page')
    .displayField('internalName');

  composeLegalPage
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLegalPage
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false);

  composeLegalPage
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLegalPage
    .createField('updatedDate')
    .name('Updated Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeLegalPage.changeFieldControl('updatedDate', 'builtin', 'datePicker', {
    format: 'dateonly',
  });

  composeLegalPage
    .createField('breadcrumb')
    .name('Breadcrumb')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  composeLegalPage
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline'],
        message: 'Only bold, italic, and underline marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'ordered-list',
          'unordered-list',
          'table',
          'hyperlink',
          'entry-hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, ordered list, unordered list, table, link to Url, and link to entry nodes are allowed',
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
    ])
    .disabled(false)
    .omitted(false);

  composeLegalPage
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .defaultValue({ 'en-US': false })
    .disabled(false)
    .omitted(false);

  composeLegalPage
    .createField('approvalDate')
    .name('Approval Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeLegalPage.changeFieldControl('approvalDate', 'builtin', 'datePicker', {
    format: 'dateonly',
  });

  composeLegalPage
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  composeLegalPage.changeFieldControl('contentId', 'builtin', 'singleLine', {
    helpText: 'Use the PRT/Veeva number as Content Id',
  });

  composeLegalPage
    .createField('prescribingInformation')
    .name('Prescribing Information')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['blockTopBottomCopy'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  //Create Page Content group
  const editorLayout = composeLegalPage.createEditorLayout();
  editorLayout.createFieldGroup('pageContent').name('Page Content');
  editorLayout.moveField('internalName').toTheTopOfFieldGroup('pageContent');
  editorLayout.moveField('codeId').afterField('internalName');
  editorLayout.moveField('breadcrumb').afterField('codeId');
  editorLayout.moveField('headline').afterField('breadcrumb');
  editorLayout.moveField('updatedDate').afterField('headline');
  editorLayout.moveField('copy').afterField('updatedDate');
  editorLayout.moveField('prescribingInformation').afterField('copy');

  //Create MLRC group
  editorLayout.createFieldGroup('mlrc').name('MLRC');
  editorLayout
    .moveField('approvedForDistribution')
    .toTheTopOfFieldGroup('mlrc');
  editorLayout.moveField('approvalDate').afterField('approvedForDistribution');
  editorLayout.moveField('contentId').afterField('approvalDate');

  //Make it a Compose page
  composeLegalPage.setAnnotations(['Contentful:AggregateRoot']);
};
