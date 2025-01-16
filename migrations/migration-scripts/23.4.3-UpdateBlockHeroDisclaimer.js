const { hexColor } = require('../constants/helpText');
const { solidColor } = require('../constants/validation');

module.exports = function (migration) {
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );
  const themeHeroWithBackgroundVideo = migration.editContentType(
    'themeHeroWithBackgroundVideo'
  );

  blockHeroWithBackgroundVideo
    .createField('disclaimer')
    .name('Disclaimer')
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
        enabledNodeTypes: [],
        message: 'Nodes are not allowed',
      },
    ]);

  blockHeroWithBackgroundVideo
    .moveField('disclaimer')
    .afterField('mobileVideo');

  themeHeroWithBackgroundVideo
    .createField('disclaimerTextColor')
    .name('Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([solidColor])
    .disabled(false)
    .omitted(false);
  themeHeroWithBackgroundVideo.changeFieldControl(
    'disclaimerTextColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );
};
