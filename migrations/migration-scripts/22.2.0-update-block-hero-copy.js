const helpText = require('../constants/helpText');
const { videoHeight } = require('../constants/helpText');
const { richTextBoldUnderlineItalic } = require('../constants/validation');

module.exports = function (migration) {
  const blockHeroWithBackgroundVideo = migration.editContentType(
    'blockHeroWithBackgroundVideo'
  );

  blockHeroWithBackgroundVideo.deleteField('videoSize');
  blockHeroWithBackgroundVideo.deleteField('headline');

  blockHeroWithBackgroundVideo.editField('copy').validations([
    richTextBoldUnderlineItalic,
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3',
        'entry-hyperlink',
        'hyperlink',
      ],
      message:
        'Only heading 1, heading 2, heading 3, hyperlink, and link entry are allowed',
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

  blockHeroWithBackgroundVideo
    .createField('videoHeight')
    .name('Video Height')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  blockHeroWithBackgroundVideo.changeFieldControl(
    'videoHeight',
    'builtin',
    'boolean',
    {
      trueLabel: 'Full Height',
      falseLabel: 'Half Height',
      helpText: videoHeight.default,
    }
  );

  blockHeroWithBackgroundVideo.moveField('videoHeight').beforeField('theme');
};
