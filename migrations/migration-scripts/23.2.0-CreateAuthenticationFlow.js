const {
  richTextBoldUnderlineItalic,
  entryHyperlinkTypeLink,
  richTextLinks,
  richTextHeadersAndLinks,
  solidColor,
  customUrl,
  authenticationSuccess,
} = require('../constants/validation');
const helpText = require('../constants/helpText');
const validation = require('../constants/validation');

module.exports = function (migration) {
  const blockSimpleHeader = migration
    .createContentType('blockSimpleHeader')
    .name('Block > Simple Header')
    .description('Block Simple Header')
    .displayField('internalName');

  blockSimpleHeader
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockSimpleHeader
    .createField('logo')
    .name('Logo')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  blockSimpleHeader
    .createField('backgroundImage')
    .name('Background Image')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  blockSimpleHeader
    .createField('backgroundColor')
    .name('Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  blockSimpleHeader.changeFieldControl(
    'backgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.sixDigit,
    }
  );

  const blockAuthenticationFlow = migration
    .createContentType('blockAuthenticationFlow')
    .name('Block > Authentication Flow')
    .description('Block Authentication Flow')
    .displayField('internalName');

  blockAuthenticationFlow
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockAuthenticationFlow
    .createField('codeId')
    .name('Code Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([validation.camelCased]);

  blockAuthenticationFlow
    .createField('header')
    .name('Header')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockSimpleHeader'],
      },
    ]);

  blockAuthenticationFlow
    .createField('authenticationSuccessRedirectUrl')
    .name('Authentication Success Redirect URL')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([customUrl])
    .disabled(false)
    .omitted(false);

  blockAuthenticationFlow.changeFieldControl(
    'authenticationSuccessRedirectUrl',
    'builtin',
    'singleLine',
    {
      helpText: helpText.urlFormatting.default,
    }
  );

  blockAuthenticationFlow
    .createField('authenticationSuccessScreen')
    .name('Authentication Success Screen')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockSingleScreen'],
      },
    ]);

  blockAuthenticationFlow
    .createField('authenticationSuccessAction')
    .name('Authentication Success Action')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        in: authenticationSuccess.default,
      },
    ]);

  blockAuthenticationFlow.changeFieldControl(
    'authenticationSuccessAction',
    'builtin',
    'dropdown',
    {
      helpText: 'Select TEST for temporary training purposes.',
    }
  );

  const blockSingleScreen = migration
    .createContentType('blockSingleScreen')
    .name('Block > Single Screen')
    .description('Block Single Screen')
    .displayField('internalName');

  blockSingleScreen
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockSingleScreen
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextHeadersAndLinks,
      entryHyperlinkTypeLink,
    ]);

  blockSingleScreen.changeFieldControl('copy', 'builtin', 'richTextEditor', {
    helpText: helpText.richTextHeadersAndLinks.default,
  });

  blockSingleScreen
    .createField('cta')
    .name('CTA(s)')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        size: {
          max: 2,
        },
      },
    ])
    .type('Array')
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['ctaButton'],
        },
      ],
    });

  blockSingleScreen
    .createField('additionalCopy')
    .name('Additional Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  const composeLandingPage = migration.editContentType('landingPage');
  composeLandingPage
    .createField('authenticationFlow')
    .name('Authentication Flow')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['blockAuthenticationFlow'],
      },
    ]);

  const isi = migration.editContentType('importantSafetyInformation');
  isi.editField('codeId').validations([validation.camelCased]);

  const composeCards = migration.editContentType('composeCards');
  composeCards.editField('codeId').validations([validation.camelCased]);
};
