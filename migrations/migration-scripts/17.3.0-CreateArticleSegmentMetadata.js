module.exports = function (migration) {
  const article = migration.editContentType('articlePage');

  const contentTag = migration
    .createContentType('contentTag')
    .name('Metadata > Content Tag')
    .description('A content model that relates to metadata field "Content Tag"')
    .displayField('value');

  contentTag
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false);

  const contentVisual = migration
    .createContentType('contentVisual')
    .name('Metadata > Content Visual')
    .description(
      'A content model that relates to metadata field "Content Visual"'
    )
    .displayField('value');

  contentVisual
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([{ unique: true }])
    .disabled(false)
    .omitted(false);

  article
    .createField('campaignId')
    .name('Campaign Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  article
    .createField('campaignName')
    .name('Campaign Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  article
    .createField('metaConcernArea')
    .name('Concern Area(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['concernArea'],
        },
      ],
    });

  article
    .createField('metaProduct')
    .name('Product(s)')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['product'],
        },
      ],
    });

  article
    .createField('metaUserJourney')
    .name('User Journey(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['userJourney'],
        },
      ],
    });

  article
    .createField('metaContentTags')
    .name('Content Tag(s)')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['contentTag'],
        },
      ],
    });

  article
    .createField('metaContentVisual')
    .name('Content Visual')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['contentVisual'],
        },
      ],
    });
};
