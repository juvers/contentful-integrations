const validation = require('../constants/validation');

module.exports = function (migration) {
  const backgroundImageAndCopy = migration.editContentType(
    'blockBackgroundImageWithCopy'
  );

  backgroundImageAndCopy.editField('mobileImage').required(true);

  backgroundImageAndCopy.editField('description').validations([
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'hyperlink',
        'entry-hyperlink',
      ],
      message:
        'Only headings 1-6, link to url, and link to entry type Link are allowed',
    },
    validation.richTextBoldUnderlineItalicSuperscript,
    validation.entryHyperlinkTypeLink,
  ]);

  backgroundImageAndCopy.editField('disclaimer').validations([
    validation.richTextBoldUnderlineItalicSuperscript,
    {
      enabledNodeTypes: [],
      message: 'Only normal text is allowed',
    },
  ]);

  backgroundImageAndCopy.changeFieldControl(
    'mobileImage',
    'builtin',
    'entryLinkEditor',
    {
      helpText:
        'This will be the default image used for all screen sizes unless an option is chosen for larger screen size',
    }
  );
};
