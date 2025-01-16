const { richTextBoldUnderlineItalic } = require('../constants/validation');

module.exports = function (migration) {
  const composeCards = migration.editContentType('composeCards');

  composeCards
    .editField('headline')
    .name('DEPRECATED Headline')
    .required(false);
  composeCards.moveField('headline').afterField('cards');

  composeCards
    .createField('headlineRichText')
    .name('Headline')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      {
        enabledNodeTypes: ['heading-1'],
        message: 'Only heading 1 nodes are allowed.',
      },
    ]);

  composeCards.moveField('headlineRichText').beforeField('subhead');
  migration.transformEntries({
    contentType: 'composeCards',
    from: ['headline'],
    to: ['headlineRichText'],
    transformEntryForLocale: async function (fromFields, currentLocale) {
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
                value: fromFields.headline['en-US'],
                nodeType: 'text',
              },
            ],
          },
        ],
      };
      return { headlineRichText: richTextHeadline };
    },
  });
};
