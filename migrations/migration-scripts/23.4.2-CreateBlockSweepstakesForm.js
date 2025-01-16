const {
  richTextBoldUnderlineItalic,
  richTextSubHeadersWithLinks,
  authenticationCtaDestinations,
  entryHyperlinkTypeLink,
  richTextLinks,
  richTextHeadersAndLinks,
  solidColor,
  opacityColor,
  authenticationSuccess,
} = require('../constants/validation');
const helpText = require('../constants/helpText');
const { hexColor } = require('../constants/helpText');

module.exports = function (migration) {
  const themeSweepstakesForm = migration
    .createContentType('themeSweepstakesForm')
    .name('Theme > Sweepstakes Form')
    .description('Styles to support Sweepstakes Form')
    .displayField('internalName');

  themeSweepstakesForm
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([]);

  themeSweepstakesForm
    .createField('backgroundColor')
    .name('Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([opacityColor]);
  themeSweepstakesForm.changeFieldControl(
    'backgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: helpText.hexColor.eightDigit,
    }
  );

  themeSweepstakesForm
    .createField('textColor')
    .name('Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  themeSweepstakesForm.changeFieldControl(
    'textColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  themeSweepstakesForm
    .createField('ctaBackgroundColor')
    .name('CTA Background Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  themeSweepstakesForm.changeFieldControl(
    'ctaBackgroundColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  themeSweepstakesForm
    .createField('ctaTextColor')
    .name('CTA Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  themeSweepstakesForm.changeFieldControl(
    'ctaTextColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  themeSweepstakesForm
    .createField('footnoteTextColor')
    .name('Footnote Text Color')
    .type('Symbol')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([solidColor]);
  themeSweepstakesForm.changeFieldControl(
    'footnoteTextColor',
    'builtin',
    'singleLine',
    {
      helpText: hexColor.sixDigit,
    }
  );

  const elementSweepstakesForm = migration
    .createContentType('elementSweepstakesForm')
    .name('Element > Sweepstakes Form')
    .description('Sweepstakes Form')
    .displayField('internalName');

  elementSweepstakesForm
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementSweepstakesForm
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextSubHeadersWithLinks,
      entryHyperlinkTypeLink,
    ]);

  elementSweepstakesForm
    .createField('showZipCode')
    .name('Show Zip Code')
    .type('Boolean')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  elementSweepstakesForm
    .createField('ageCheckCopy')
    .name('Age Check Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: [],
        message: 'Only normal text',
      },
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  elementSweepstakesForm
    .createField('termsAndConditionsCheckCopy')
    .name('Terms and Conditions Check Copy')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: [],
        message: 'Only normal text',
      },
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  elementSweepstakesForm
    .createField('footnote')
    .name('Footnote')
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

  elementSweepstakesForm
    .createField('ctaDestination')
    .name('CTA Destination')
    .type('Symbol')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': 'Registration' })
    .validations([
      {
        in: authenticationCtaDestinations.default,
      },
    ]);

  elementSweepstakesForm.changeFieldControl(
    'ctaDestination',
    'builtin',
    'dropdown',
    {
      helpText: '',
    }
  );

  elementSweepstakesForm
    .createField('ctaCopy')
    .name('CTA Copy')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  elementSweepstakesForm
    .createField('entryCompletedCopy')
    .name('Entry Completed Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalic,
      richTextSubHeadersWithLinks,
      entryHyperlinkTypeLink,
    ]);
  elementSweepstakesForm
    .createField('entryCompletedCTA')
    .name('Entry Completed CTA')
    .type('Link')
    .localized(false)
    .required(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['ctaButton'],
      },
    ])
    .disabled(false)
    .omitted(false);

  elementSweepstakesForm
    .createField('entryCompletedFootnote')
    .name('Entry Completed Footnote')
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

  elementSweepstakesForm
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .validations([
      {
        linkContentType: ['themeSweepstakesForm'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  const blockFullImage = migration.editContentType('blockFullImage');

  blockFullImage.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
        'elementRegistrationCTA',
        'elementSweepstakesForm',
      ],
    },
  ]);

  const blockImageAndBanner = migration.editContentType('blockImageAndBanner');

  blockImageAndBanner.editField('cta').validations([
    {
      linkContentType: [
        'ctaButton',
        'offerCTAButton',
        'elementFindASpecialist',
        'elementRegistrationCTA',
        'elementSweepstakesForm',
      ],
    },
  ]);

  blockImageAndBanner
    .editField('disclaimer')
    .validations([
      richTextBoldUnderlineItalic,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  const blockAuthenticationFlow = migration.editContentType(
    'blockAuthenticationFlow'
  );

  blockAuthenticationFlow.editField('authenticationSuccessAction').validations([
    {
      in: authenticationSuccess.default,
    },
  ]);

  blockAuthenticationFlow.changeFieldControl(
    'authenticationSuccessAction',
    'builtin',
    'dropdown',
    {
      helpText: '',
    }
  );

  // create groups
  const blockLayout = elementSweepstakesForm.createEditorLayout();
  blockLayout.createFieldGroup('content', {
    name: 'Content',
  });

  blockLayout
    .editFieldGroup('content')
    .createFieldGroup('entryCompleted')
    .name('Entry Completed')
    .changeFieldGroupControl('builtin', 'fieldset')
    .helpText('Fields relating to Entry Completed section of Sweepstakes Form');

  // image group
  blockLayout
    .moveField('entryCompletedCopy')
    .toTheTopOfFieldGroup('entryCompleted');
  blockLayout.moveField('entryCompletedCTA').afterField('entryCompletedCopy');
  blockLayout
    .moveField('entryCompletedFootnote')
    .afterField('entryCompletedCTA');
};
