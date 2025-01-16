const {
  richTextBoldUnderlineItalic,
  richTextLinks,
  entryHyperlinkTypeLink,
} = require('../constants/validation');

module.exports = function (migration) {
  const footer = migration.editContentType('blockFooter');

  // deprecate old field/hide from Contentful UI
  footer.editField('copy').name('DEPRECATED Copy').disabled(true);

  // new field
  footer
    .createField('footerCopy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);
  footer.moveField('footerCopy').beforeField('copy');

  // migrate field values to new field
  migration.transformEntries({
    contentType: 'blockFooter',
    from: ['copy'],
    to: ['footerCopy'],
    transformEntryForLocale: async function (from) {
      if (from.copy?.['en-US']) {
        const richText = {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value: from.copy['en-US'],
                  nodeType: 'text',
                },
              ],
            },
          ],
        };
        return { footerCopy: richText };
      }
    },
  });
};
