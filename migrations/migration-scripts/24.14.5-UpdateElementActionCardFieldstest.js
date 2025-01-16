module.exports = function (migration) {
  // update link validation to allow full links or screen names
  const linkWithCopy = migration.editContentType('linkWithCopy');
  linkWithCopy.editField('link').validations([]);
  linkWithCopy.changeFieldControl('link', 'builtin', 'singleLine', {
    helpText: `For WEB: use url + slug. You can also use a full link to an article or treatment guide for native, such as https://www.alle.com/article/look-of-3.
          For NATIVE: Use specific screenName for native program pages. For now, articles/treatment guides can be resolved with links. Please check with engineering if you're unsure.`,
  });
};
