module.exports = function (migration) {
  const linkWithCopy = migration.editContentType('linkWithCopy');

  linkWithCopy.editField('link').validations([]);

  linkWithCopy.changeFieldControl('link', 'builtin', 'singleLine', {
    helpText:
      'You can use a screenName, screenName with slug (when redirecting to an article or treatment guide), or a URL to an existing deeplink in the native app.',
  });
};
