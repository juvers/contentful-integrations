module.exports = function (migration) {
  let themeBannerWithCopy = migration.editContentType('themeBannerWithCopy');

  themeBannerWithCopy.editField('backgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeBannerWithCopy.changeFieldControl(
    'backgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeBannerWithCopy.editField('textColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeBannerWithCopy.changeFieldControl('textColor', 'builtin', 'singleLine', {
    helpText:
      'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
  });

  themeBannerWithCopy.editField('ctaBackgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeBannerWithCopy.changeFieldControl(
    'ctaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeBannerWithCopy.editField('ctaTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeBannerWithCopy.changeFieldControl(
    'ctaTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  let themeFullImage = migration.editContentType('themeFullImage');

  themeFullImage.editField('textColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeFullImage.changeFieldControl('textColor', 'builtin', 'singleLine', {
    helpText:
      'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
  });

  themeFullImage.editField('textBackgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 or 8 digit hexadecimal color value (Ex: #FFFF00 #66FFFF00)',
    },
  ]);

  themeFullImage.changeFieldControl(
    'textBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 or 8 digit hexadecimal color value (Ex. #FFFF00 #66FFFF00)',
    }
  );

  themeFullImage.editField('mobileImageBackgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeFullImage.changeFieldControl(
    'mobileImageBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeFullImage.editField('disclaimerTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeFullImage.changeFieldControl(
    'disclaimerTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeFullImage.editField('ctaTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeFullImage.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText:
      'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
  });

  let themeLogoHeader = migration.editContentType('themeLogoHeader');

  themeLogoHeader.editField('backgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 or 8 digit hexadecimal color value (Ex: #FFFF00 #66FFFF00)',
    },
  ]);

  themeLogoHeader.changeFieldControl(
    'backgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 or 8 digit hexadecimal color value (Ex. #FFFF00 #66FFFF00)',
    }
  );

  themeLogoHeader.editField('ctaBackgroundColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeLogoHeader.changeFieldControl(
    'ctaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeLogoHeader.editField('ctaTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeLogoHeader.changeFieldControl('ctaTextColor', 'builtin', 'singleLine', {
    helpText:
      'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
  });
  themeLogoHeader.editField('linkTextColor').validations([
    {
      regexp: {
        pattern: '^#([A-Fa-f0-9]{6})$',
        flags: null,
      },
      message:
        'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
    },
  ]);

  themeLogoHeader.changeFieldControl('linkTextColor', 'builtin', 'singleLine', {
    helpText:
      'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
  });
};
