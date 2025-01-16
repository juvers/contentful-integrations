const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockValueProposition = migration.editContentType(
    'valuePropositionBlock'
  );

  blockValueProposition
    .editField('headline')
    .name('DEPRECATED Headline')
    .required(false);

  blockValueProposition.moveField('headline').afterField('theme');

  blockValueProposition
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

  blockValueProposition
    .moveField('headlineRichText')
    .beforeField('subhead');

  migration.transformEntries({
    contentType: 'valuePropositionBlock',
    from: ['headline'],
    to: ['headlineRichText'],
    transformEntryForLocale: async function (fromFields) {
      if (fromFields.headline?.['en-US']) {
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
      }
    },
  });
};
