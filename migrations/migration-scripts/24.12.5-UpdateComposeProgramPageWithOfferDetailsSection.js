module.exports = function (migration) {
  // Add Offer Details Section to Compose Program Page
  // Add some fields to Program Page
  const programPage = migration.editContentType('programPage');

  const editorLayout = programPage.editEditorLayout();
  editorLayout.createFieldGroup('offerDetails')
    .name('Offer Details')

  programPage.editField('promotionOfferValue').name('Referral Offer Value')
    
  programPage.createField('referringUserOfferValue')
    .name('Referring User Offer Value')
    .type('Integer')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  editorLayout.moveField('promotionOfferValue').toTheTopOfFieldGroup('offerDetails');
  editorLayout.moveField('referringUserOfferValue').afterField('promotionOfferValue');
  programPage.moveField('referringUserOfferValue').afterField('promotionOfferValue');

  programPage.changeFieldControl(
    'promotionOfferValue',
    'builtin',
    'numberEditor',
    {
      helpText:
        'Can be accessed as dynamic variable {{promotionOfferValue}}',
    }
  );

  programPage.changeFieldControl(
    'referringUserOfferValue',
    'builtin',
    'numberEditor',
    {
      helpText:
        'Can be accessed as dynamic variable {{referringUserOfferValue}}',
    }
  );

  editorLayout.editFieldGroup('offerDetails')
    .helpText('Fields relating to offer details section of Program Page. Can be accessed as dynamic variables as {{promotionOfferValue}} and {{referringUserOfferValue}}.');

  // Add helpText to Element > Share Message "Message" field
  const shareMessage = migration.editContentType('shareMessage');

  shareMessage.changeFieldControl(
    'message',
    'builtin',
    'markdown',
    {
      helpText:
        'You can use the following dynamic variables when composing your message: {{promotionOfferValue}}, {{referralURL}}, {{referralCode}}. For example, "Get {{promotionOfferValue}} off your next purchase when you use my code: {{referralCode}} at checkout. Click here to get started: {{referralURL}}"',
    }
  )

  // Add helpText to Block > Announcement" field
  const blockAnnouncement = migration.editContentType('blockAnnouncement');

  blockAnnouncement.changeFieldControl(
    'copy',
    'builtin',
    'singleLine',
    {
      helpText:
        'You can use the following dynamic variables when composing your message: {{promotionOfferValue}}, {{referringUserOfferValue}}. For example, "Referred friends will receive {{promotionOfferValue}} off your their treatment and you will receive {{referringUserOfferValue}} off your next treatment."',
    }
  )

  // Add helpText to Block > List Collection" field
  const linkWithCopy = migration.editContentType('linkWithCopy');

  linkWithCopy.changeFieldControl(
    'copy',
    'builtin',
    'singleLine',
    {
      helpText:
        'You can use the following dynamic variables when composing your message: {{promotionOfferValue}}, {{referringUserOfferValue}}. For example, "Referred friends will receive {{promotionOfferValue}} off your their treatment and you will receive {{referringUserOfferValue}} off your next treatment."',
    }
  )
};