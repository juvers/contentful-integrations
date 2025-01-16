module.exports = function (migration) {
  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');
  blockImageAndBanner.deleteField('imageDisclaimer');
  blockImageAndBanner
    .createField('imageDisclaimer')
    .name('Image Disclaimer')
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
        enabledNodeTypes: ['heading-2', 'heading-3'],
        message: 'Only heading 2 and heading 3 are allowed',
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
        ],
      },
    ],
    linkType: 'Entry',
  });
};
