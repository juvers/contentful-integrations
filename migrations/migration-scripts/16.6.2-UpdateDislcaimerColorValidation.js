module.exports = function (migration) {
  const blockVideo = migration.editContentType('blockVideo');

  blockVideo.editField('disclaimerTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);
};
