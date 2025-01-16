module.exports = function (migration) {
  const elementPatientConcernArea = migration
    .createContentType('elementPatientConcernArea')
    .name('Element > Patient Concern Area')
    .description('Patient Concern Area Before and After')
    .displayField('internalName');

  elementPatientConcernArea
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementPatientConcernArea
    .createField('label')
    .name('Label')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementPatientConcernArea
    .createField('beforeImage')
    .name('Before Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  elementPatientConcernArea
    .createField('afterImage')
    .name('After Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  elementPatientConcernArea
    .createField('beforeText')
    .name('Before Text')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
    ]);

  elementPatientConcernArea
    .createField('afterText')
    .name('After Text')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
    ]);

  const elementPatient = migration
    .createContentType('elementPatient')
    .name('Element > Patient')
    .description('Patient Information')
    .displayField('internalName');

  elementPatient
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementPatient
    .createField('patientDescription')
    .name('Patient Description')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: ['heading-1', 'heading-2', 'heading-3'],
        message: 'Only heading 1, heading 2, heading 3 are allowed',
      },
    ]);

  elementPatient
    .createField('avatarImage')
    .name('Avatar Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  elementPatient
    .createField('concernAreas')
    .name('Concern Area(s)')
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
          linkContentType: ['elementPatientConcernArea'],
        },
      ],
      linkType: 'Entry',
    });

  const blockBeforeAndAfter = migration
    .createContentType('blockBeforeAndAfter')
    .name('Block > Before And After')
    .description('Before and After Images')
    .displayField('internalName');

  blockBeforeAndAfter
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockBeforeAndAfter
    .createField('header')
    .name('Header')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockBeforeAndAfter
    .createField('disclaimerText')
    .name('Disclaimer Text')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: ['heading-1', 'heading-2', 'heading-3'],
        message: 'Only heading 1, heading 2, heading 3 are allowed',
      },
    ]);

  blockBeforeAndAfter
    .createField('dragButtonText')
    .name('Drag Button Text')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          min: 1,
          max: 6,
        },
      },
    ])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'drag' });

  blockBeforeAndAfter
    .createField('patient')
    .name('Patient(s)')
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
          linkContentType: ['elementPatient'],
        },
      ],
      linkType: 'Entry',
    });

  blockBeforeAndAfter
    .createField('footnote')
    .name('Footnote(s)')
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
          linkContentType: ['blockFootnote'],
        },
      ],
      linkType: 'Entry',
    });

  blockBeforeAndAfter
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'ordered-list',
          'unordered-list',
          'entry-hyperlink',
          'hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, ordered list, unordered list, hyperlink, and link to Link entry are allowed',
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

  const composeLandingPage = migration.editContentType('landingPage');

  composeLandingPage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'bannerWithCopy',
          'blockFullImage',
          'blockImageAndBanner',
          'blockBeforeAndAfter',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
