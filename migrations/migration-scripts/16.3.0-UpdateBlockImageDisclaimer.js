module.exports = function (migration) {
  const blockImage = migration.editContentType('blockImage');
  // Add new field
  blockImage
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline'],
        message: 'Only bold, italic, and underline marks are allowed',
      },
      {
        enabledNodeTypes: [],
        message: 'Nodes are not allowed',
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  //Deprecate old fields
  blockImage
    .editField('disclaimerShortText')
    .name('Disclaimer Short Text DEPRECATED');
  blockImage
    .editField('disclaimerLongText')
    .name('Disclaimer Long Text DEPRECATED');

  // Moving fields
  blockImage.moveField('disclaimer').afterField('image');
  blockImage.moveField('textColor').afterField('disclaimer');
  blockImage.moveField('disclaimerShortText').afterField('textColor');
  blockImage.moveField('disclaimerLongText').afterField('disclaimerShortText');
};
