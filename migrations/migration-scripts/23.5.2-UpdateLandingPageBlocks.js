const validation = require('../constants/validation');

module.exports = function (migration) {
  const lp = migration.editContentType('landingPage');
  lp.editField('blocks').items({
    type: 'Link',
    validations: [validation.landingPageBlocks],
    linkType: 'Entry',
  });
};
