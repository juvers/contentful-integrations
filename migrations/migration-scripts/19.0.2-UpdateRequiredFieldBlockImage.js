module.exports = function (migration) {
  const blockImage = migration.editContentType('blockImage');
  blockImage.editField('textColor').defaultValue({ 'en-US': '#FFFFFF' });

  const articleComposePage = migration.editContentType('articlePage');
  articleComposePage.editField('cardSummary').required(false);
  articleComposePage.editField('campaignId').required(false);
  articleComposePage.editField('campaignName').required(false);
};
