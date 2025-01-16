module.exports = function (migration) {
  const actionCard = migration.editContentType('elementActionCard');

  actionCard.editField('cardDestination').validations([]);

  actionCard
    .createField('linkParams')
    .name('Link Params')
    .type('Object')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  
    actionCard.moveField('cardDestination').afterField('metaUserJourney');
};
