const {
  richTextBoldUnderlineItalic,
  richTextListsTableLinks,
  entryHyperlinkTypeLink,
} = require('../constants/validation');

module.exports = function (migration) {
  const elementQuestionAndAnswer = migration
    .createContentType('elementQuestionAndAnswer')
    .name('Element > Question And Answer')
    .description('Element with FAQ question and answer')
    .displayField('internalName');

  elementQuestionAndAnswer
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  elementQuestionAndAnswer
    .createField('question')
    .name('Question')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  elementQuestionAndAnswer
    .createField('answer')
    .name('Answer')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextListsTableLinks,
      entryHyperlinkTypeLink,
    ]);

  const blockFAQ = migration
    .createContentType('blockFAQ')
    .name('Block > FAQ')
    .description('Block FAQ')
    .displayField('internalName');

  blockFAQ
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  blockFAQ
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  blockFAQ
    .createField('summary')
    .name('Summary')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextListsTableLinks,
      entryHyperlinkTypeLink,
    ]);

  blockFAQ
    .createField('questionAndAnswer')
    .name('Question & Answer')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['elementQuestionAndAnswer'],
      },
    ]);

  const composeArticlePage = migration.editContentType('articlePage');

  composeArticlePage.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockFootnote',
          'blockCopy',
          'blockVideo',
          'blockImage',
          'joinBanner',
          'blockFAQ',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
