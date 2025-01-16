module.exports = function (migration) {
  const elementPatientConcernArea = migration.editContentType(
    'elementPatientConcernArea'
  );
  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');
  const blockFootnote = migration.editContentType('blockFootnote');

  elementPatientConcernArea
    .editField('beforeText')
    .required(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: [],
        message: 'Only normal text is allowed',
      },
    ]);

  elementPatientConcernArea
    .editField('afterText')
    .required(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: [],
        message: 'Only normal text is allowed',
      },
    ]);

  blockBeforeAndAfter.editField('disclaimerText').validations([
    {
      enabledMarks: ['bold', 'underline', 'italic'],
      message: 'Only bold, underline, and italic marks are allowed',
    },
    {
      enabledNodeTypes: [],
      message: 'Only normal text is allowed',
    },
  ]);

  blockBeforeAndAfter
    .editField('dragButtonText')
    .defaultValue({ 'en-US': 'DRAG' });

  blockBeforeAndAfter.editField('copy').validations([
    {
      enabledMarks: ['bold', 'underline', 'italic'],
      message: 'Only bold, underline, and italic marks are allowed',
    },
    {
      enabledNodeTypes: [],
      message: 'Only normal text is allowed',
    },
  ]);

  blockBeforeAndAfter.moveField('footnote').afterField('copy');

  blockFootnote.editField('footnote').validations([
    {
      enabledMarks: ['bold', 'underline', 'italic'],
      message: 'Only bold, underline, and italic marks are allowed',
    },
    {
      enabledNodeTypes: [],
      message: 'Only normal text is allowed',
    },
  ]);

  blockFootnote.description('Footnote content bold, underline, and italics');
};
