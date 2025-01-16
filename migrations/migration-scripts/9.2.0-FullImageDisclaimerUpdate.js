module.exports = function (migration) {
  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage.deleteField('disclaimer');

  blockFullImage
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline'],
        message: 'Only bold, italic, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['heading-2', 'heading-3'],
        message: 'Only heading 2 and heading 3 nodes are allowed',
      },
      {
        nodes: {},
      },
    ]);
};
