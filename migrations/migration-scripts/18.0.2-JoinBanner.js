module.exports = function (migration) {
  const joinBanner = migration
    .createContentType('joinBanner')
    .name('Block > Join Banner')
    .description('Content Page Join Banner')
    .displayField('internalName');
  joinBanner
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  joinBanner
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  joinBanner
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, italics, and underline marks are allowed',
      },
      {
        enabledNodeTypes: ['entry-hyperlink', 'hyperlink'],
        message: 'Only link to Url and link to entry nodes are allowed',
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
  joinBanner
    .createField('link')
    .name('Link')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['link'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  const composePageArticle = migration.editContentType('articlePage');

  composePageArticle.editField('blocks').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'blockFootnote',
          'blockCopy',
          'image',
          'video',
          'blockImage',
          'joinBanner',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
