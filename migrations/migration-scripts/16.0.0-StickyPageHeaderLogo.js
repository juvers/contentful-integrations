module.exports = function (migration) {
  const blockLogoHeader = migration.editContentType('blockLogoHeader');
  blockLogoHeader.editField('cloudinaryLogo').name('Sticky Header Logo');
  blockLogoHeader
    .createField('fixedLogo')
    .name('Fixed Logo')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');
  blockLogoHeader.changeFieldControl(
    'fixedLogo',
    'builtin',
    'entryLinkEditor',
    {
      helpText:
        'Choose a logo that appears on the top of page when not scrolling.',
    }
  );
  blockLogoHeader.changeFieldControl(
    'cloudinaryLogo',
    'builtin',
    'entryLinkEditor',
    {
      helpText:
        'Choose a logo to appear on sticky header on top of page when scrolling.',
    }
  );
  blockLogoHeader.moveField('fixedLogo').afterField('cloudinaryLogo');
};
