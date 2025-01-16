module.exports = function (migration) {
  const themeImageAndBanner = migration
    .createContentType('themeImageAndBanner')
    .name('Theme > Image And Banner')
    .description('Styles to support Theme > Image And Banner')
    .displayField('internalName');

  themeImageAndBanner
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  themeImageAndBanner
    .createField('bannerBackgroundColor')
    .name('Banner Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeImageAndBanner.changeFieldControl(
    'bannerBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeImageAndBanner
    .createField('bannerTextColor')
    .name('Banner Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeImageAndBanner.changeFieldControl(
    'bannerTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeImageAndBanner
    .createField('ctaBackgroundColor')
    .name('CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeImageAndBanner.changeFieldControl(
    'ctaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeImageAndBanner
    .createField('ctaTextColor')
    .name('CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeImageAndBanner.changeFieldControl(
    'ctaTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );

  themeImageAndBanner
    .createField('disclaimerTextColor')
    .name('Disclaimer Text Color')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        regexp: {
          pattern: '^#([A-Fa-f0-9]{6})$',
          flags: null,
        },
        message:
          'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
      },
    ])
    .disabled(false)
    .omitted(false);

  themeImageAndBanner.changeFieldControl(
    'disclaimerTextColor',
    'builtin',
    'singleLine',
    {
      helpText:
        'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00)',
    }
  );
};
