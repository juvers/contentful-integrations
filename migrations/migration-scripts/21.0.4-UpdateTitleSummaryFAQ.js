module.exports = function (migration) {
  migration.editContentType('blockFAQ').editField('title').required(false);

  migration.editContentType('blockFAQ').editField('summary').required(false);
};
