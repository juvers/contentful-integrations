module.exports = function (migration) {
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  blockImageAndBanner.editField('mobileLayout').name('Mobile Image Layout');
  blockImageAndBanner.editField('desktopLayout').name('Desktop Image Layout');
  blockImageAndBanner.editField('disclaimer').name('Banner Disclaimer');
  blockImageAndBanner.editField('copy').validations([
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
      ],
      message:
        'Only heading 1, heading 2, heading 3, ordered list, and unordered list are allowed',
    },
  ]);
  blockImageAndBanner.editField('disclaimer').validations([
    {
      enabledMarks: ['bold', 'underline', 'italic'],
      message: 'Only bold, underline, and italic marks are allowed',
    },
    {
      enabledNodeTypes: ['heading-2'],
      message: 'Only heading 2 is allowed',
    },
  ]);

  const blockFullImage = migration.editContentType('blockFullImage');
  blockFullImage.editField('disclaimer').name('Image Disclaimer');
};
