const {
  richTextBoldUnderlineItalic,
  richTextListsTableLinks,
  entryHyperlinkTypeLink,
} = require('../constants/validation');

module.exports = function (migration) {
  const box = migration
    .createContentType('valuePropositionBox')
    .name('Element > Value Proposition Box')
    .description(
      'Value Proposition Box to be used in Block > Value Proposition'
    )
    .displayField('internalName');

  box
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  box
    .createField('boxIcon')
    .name('Box Icon')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  box
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([]);
  box.changeFieldControl('headline', 'builtin', 'singleLine', {
    helpText: 'Recommended max char: 18',
  });

  box
    .createField('copy')
    .name('Copy')
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
  box.changeFieldControl('copy', 'builtin', 'richTextEditor', {
    helpText: 'Recommend char max: 150; and no more than 4 lines.',
  });
};
