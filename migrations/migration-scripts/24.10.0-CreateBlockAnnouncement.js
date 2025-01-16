const { solidColor } = require('../constants/validation');

module.exports = function (migration) {
  const blockAnnouncement = migration
    .createContentType('blockAnnouncement')
    .name('Block > Announcement')
    .description('Announcement component')
    .displayField('internalName');

  blockAnnouncement
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockAnnouncement
    .createField('codeId')
    .name('Code ID')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  blockAnnouncement
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockAnnouncement
    .createField('copy')
    .name('Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockAnnouncement
    .createField('chip')
    .name('Chip')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockAnnouncement
    .createField('chipColor')
    .name('Chip Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([solidColor])
    .disabled(false)
    .omitted(false);
};
