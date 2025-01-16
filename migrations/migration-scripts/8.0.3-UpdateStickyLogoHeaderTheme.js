module.exports = function (migration) {
  const headerTheme = migration.editContentType('themeLogoHeader');

  headerTheme
    .editField('backgroundColor')
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ]);
  headerTheme
    .editField('ctaBackgroundColor')
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ]);
  headerTheme
    .editField('ctaTextColor')
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ]);
  headerTheme
    .editField('linkTextColor')
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message: 'Must be a 6 digit hexadecimal color value (Ex: #FFC0CCB)',
      },
    ]);
};
