const {
  richTextBoldUnderlineItalic,
  richTextListsTableLinks,
  entryHyperlinkTypeLink,
} = require('../constants/validation');

module.exports = function (migration) {
  const block = migration
    .createContentType('valuePropositionBlock')
    .name('Block > Value Proposition')
    .description('Block with value proposition boxes')
    .displayField('internalName');

  block
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  block
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([]);

  block
    .createField('subhead')
    .name('Subhead')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextListsTableLinks,
      entryHyperlinkTypeLink,
    ]);

  block
    .createField('valuePropositionBoxes')
    .name('Value Proposition Boxes')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['valuePropositionBox'],
      },
    ]);
  block.changeFieldControl(
    'valuePropositionBoxes',
    'builtin',
    'entryLinkEditor',
    {
      helpText: 'Should add boxes in sets of 3',
    }
  );

  block
    .createField('otherElements')
    .name('Other Elements')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: [
          'blockCopy',
          'blockFootnote',
          'offerCTAButton',
          'ctaButton',
          'elementFindASpecialist',
        ],
      },
    ]);

  block
    .createField('theme')
    .name('Theme')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['valuePropositionTheme'],
      },
    ]);

  block.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });
};
