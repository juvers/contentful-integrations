const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');

  blockBeforeAndAfter
    .editField('header')
    .name('DEPRECATED Headline')
    .required(false);

  blockBeforeAndAfter.moveField('header').afterField('theme');

  blockBeforeAndAfter
    .createField('headlineRichText')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      validation.richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: ['heading-1'],
        message: 'Only heading 1 nodes are allowed.',
      },
    ]);

  blockBeforeAndAfter
    .moveField('headlineRichText')
    .beforeField('disclaimerText');

  migration.transformEntries({
    contentType: 'blockBeforeAndAfter',
    from: ['header'],
    to: ['headlineRichText'],
    transformEntryForLocale: async function (fromFields) {
      if (fromFields.header?.['en-US']) {
        const richTextHeadline = {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'heading-1',
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: fromFields.header['en-US'],
                  nodeType: 'text',
                },
              ],
            },
          ],
        };
        return { headlineRichText: richTextHeadline };
      }
    },
  });
};
