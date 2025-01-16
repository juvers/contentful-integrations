module.exports = function (migration) {
  const article = migration.editContentType('articlePage');

  article
    .createField('approvedForDistribution')
    .name('Approved for Distribution')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  article
    .createField('approvedDate')
    .name('Approved Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  article
    .createField('contentId')
    .name('Content Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};
