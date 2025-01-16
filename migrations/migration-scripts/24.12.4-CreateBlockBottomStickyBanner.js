module.exports = function (migration) {
  const programPage = migration.editContentType('programPage');

  const banner = migration
    .createContentType('blockStickyBottomBanner')
    .name('Block > Sticky Bottom Banner')
    .description('Banner that is intended to display content at the bottom of the screen on Mobile')
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
    .createField('ctaElement')
    .name('CTA Element')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: ['referAFriendCTA', 'paymentPlansCTA'],
        }
      ],
      linkType: 'Entry',
    })

  programPage.editField('blocks')
    .items({
      type: 'Link',
      validations: [
        {
          linkContentType: [
            'blockAnnouncement',
            'blockListCollection',
            'blockFootnote',
            'blockImage',
            'blockCopy',
            'blockStickyBottomBanner'
          ],
        },
      ],
      linkType: 'Entry',
    });
};