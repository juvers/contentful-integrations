const { articleBlocks } = require('../constants/validation');

module.exports = function (migration) {
  const banner = migration
    .createContentType('blockCtaBanner')
    .name('Block > CTA Banner')
    .description('Banner that is intended to showcase a CTA')
    .displayField('internalName');

  banner
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  banner
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false);

  banner
    .createField('copy')
    .name('copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  banner
    .createField('cta')
    .name('CTA')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['buttonWithIcon'],
      },
    ])
    .disabled(false)
    .omitted(false);

  // add block to articles
  const article = migration.editContentType('articlePage');
  article.editField('blocks').items({
    type: 'Link',
    linkType: 'Entry',
    validations: [articleBlocks],
  });
};
