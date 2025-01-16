module.exports = function (migration) {
  const video = migration
    .createContentType('video')
    .name('Video')
    .description('Video')
    .displayField('internalName');
  video
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  video
    .createField('cloudinaryVideo')
    .name('Cloudinary Video')
    .type('Object')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  video
    .createField('poster')
    .name('Poster Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  const articleVideoHero = migration
    .createContentType('articleVideoHero')
    .name('Article > Video > Hero')
    .description('Hero Video for Article')
    .displayField('internalName');

  articleVideoHero
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleVideoHero
    .createField('video')
    .name('Video')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['video'],
      },
    ]);

  const articleVideoBody = migration
    .createContentType('articleVideoBody')
    .name('Article > Video > Body')
    .description('Body Video for Article')
    .displayField('internalName');

  articleVideoBody
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  articleVideoBody
    .createField('video')
    .name('Video')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['video'],
      },
    ]);
  const article = migration.editContentType('articlePage');

  article.editField('sections').items({
    type: 'Link',
    validations: [
      {
        linkContentType: [
          'articleBreadcrumb',
          'articleBodyCopy',
          'articleImageBody',
          'articleImageHero',
          'articleTitle',
          'articleBrands',
          'articleFootnote',
          'articleVideoHero',
          'articleVideoBody',
        ],
      },
    ],
    linkType: 'Entry',
  });
};
