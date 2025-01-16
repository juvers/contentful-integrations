module.exports = function (migration) {
  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage.editField('mobileImage').name('Mobile Image');

  blockFullImage.editField('copy').required(false);

  blockFullImage.editField('theme').required(false);

  blockFullImage.editField('disclaimer').required(false);

  blockFullImage.changeFieldControl('copy', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });

  blockFullImage.changeFieldControl('image', 'builtin', 'entryLinkEditor', {
    showLinkEntityAction: true,
  });

  blockFullImage.changeFieldControl(
    'mobileImage',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: true,
    }
  );
};
