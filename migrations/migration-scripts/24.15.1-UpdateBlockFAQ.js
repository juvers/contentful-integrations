const {
  richTextBoldUnderlineItalicSuperscript,
} = require('../constants/validation');

module.exports = function (migration) {
  const blockFAQ = migration.editContentType('blockFAQ');

  blockFAQ
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      { enabledNodeTypes: [] },
    ]);

  blockFAQ
    .createField('isiDisclaimer')
    .name('ISI Disclaimer')
    .type('Array')
    .localized(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['brand'],
        },
      ],
    });

  blockFAQ.changeFieldControl('isiDisclaimer', 'builtin', 'entryLinksEditor', {
    showCreateEntityAction: false,
  });
};
