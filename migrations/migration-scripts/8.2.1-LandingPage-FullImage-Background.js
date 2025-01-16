module.exports = function (migration) {
  const themeFullImage = migration.editContentType('themeFullImage');

  themeFullImage.editField('textColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    },
  ]);

  themeFullImage.changeFieldControl('textColor', 'builtin', 'singleLine', {
    helpText:
      'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
  });

  themeFullImage.editField('textBackgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    },
  ]);

  themeFullImage.changeFieldControl(
    'textBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    }
  );

  themeFullImage.editField('disclaimerTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    },
  ]);

  themeFullImage.changeFieldControl(
    'disclaimerTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    }
  );

  themeFullImage.editField('ctaBackgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    },
  ]);

  themeFullImage.changeFieldControl(
    'ctaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    }
  );

  themeFullImage.editField('ctaTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    },
  ]);

  themeFullImage.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText:
      'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
  });

  themeFullImage
    .createField('mobileImageBackgroundColor')
    .name('Mobile Image Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeFullImage.changeFieldControl(
    'mobileImageBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Must start with # followed by 6 digit hexadecimal color code (Ex: #FFC0CC)',
    }
  );

  themeFullImage
    .moveField('mobileImageBackgroundColor')
    .beforeField('disclaimerTextColor');
};
