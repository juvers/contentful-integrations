module.exports = function (migration) {
  // Create shareMessage content type
  const shareMessage = migration
    .createContentType('shareMessage')
    .name('Element > Share Message')
    .description('Shareable Message.')
    .displayField('internalName');

  shareMessage.createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  shareMessage.createField('title')
    .name('Share Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  shareMessage.createField('message')
    .name('Message')
    .type('Text')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Create fadeModal content type
  const fadeModal = migration
    .createContentType('fadeModal')
    .name('Element > Fade Modal')
    .description('Fade Modal')
    .displayField('internalName');

  fadeModal.createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  fadeModal.createField('title')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  fadeModal.createField('message')
    .name('Body Copy')
    .type('Text')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  fadeModal.createField('ctaCopy')
    .name('CTA Button Text')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Create referAFriendCTA content type
  const raFCTA = migration
    .createContentType('referAFriendCTA')
    .name('Element > Refer a Friend (CTA)')
    .description('Refer a Friend (CTA)')
    .displayField('internalName');

  raFCTA.createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  raFCTA.createField('title')
    .name('Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  raFCTA.createField('noCodeTitle')
    .name('Title when no Shareable Code is present')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  raFCTA.createField('shareMessageRaF')
    .name('Share Message')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['shareMessage'],
      },
    ])
    .disabled(false)
    .omitted(false);

  raFCTA.createField('leftButtonCopy')
    .name('Left CTA Button Text')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  raFCTA.createField('rightButtonCopy')
    .name('Right CTA Button Text')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  raFCTA.createField('limitReachedModal')
    .name('Limit Reached Modal')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['fadeModal'],
      },
    ])
    .disabled(false)
    .omitted(false);

  // Add some fields to Program Page
  const programPage = migration.editContentType('programPage');

  programPage.editField('ogImage')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  programPage.createField('promotionOfferValue')
    .name('Promotion Offer Value')
    .type('Integer')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  programPage.moveField('promotionOfferValue').afterField('blocks');
};