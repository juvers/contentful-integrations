module.exports = function (migration) {
  const blockImageAndBanner = migration
    .createContentType('blockImageAndBanner')
    .name('Block > Image And Banner')
    .description('Image and Banner positioned Right/Left Top/Bottom')
    .displayField('internalName');

  blockImageAndBanner
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blockImageAndBanner
    .createField('copy')
    .name('Copy')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'ordered-list',
          'unordered-list',
          'entry-hyperlink',
          'hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, ordered list, unordered list, hyperlink, and link to Link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockImageAndBanner
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        enabledMarks: ['bold', 'underline', 'italic'],
        message: 'Only bold, underline, and italic marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'ordered-list',
          'unordered-list',
          'entry-hyperlink',
          'hyperlink',
        ],
        message:
          'Only heading 1, heading 2, heading 3, ordered list, unordered list, hyperlink, and link to Link entry are allowed',
      },
      {
        nodes: {
          'entry-hyperlink': [
            {
              linkContentType: ['link'],
              message: null,
            },
          ],
        },
      },
    ]);

  blockImageAndBanner
    .createField('cta')
    .name('CTA')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['ctaButton'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockImageAndBanner
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  blockImageAndBanner
    .createField('imageDisclaimer')
    .name('Image Disclaimer')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      {
        linkContentType: ['image'],
      },
    ]);

  blockImageAndBanner
    .createField('mobileLayout')
    .name('Mobile Layout')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        in: ['Top', 'Bottom'],
        message: 'Mobile layout must be Top or Bottom only.',
      },
    ])
    .disabled(false)
    .omitted(false);

  blockImageAndBanner
    .createField('desktopLayout')
    .name('Desktop Layout')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([
      {
        in: ['Left', 'Right'],
        message: 'Mobile layout must be Left or Right only.',
      },
    ])
    .disabled(false)
    .omitted(false);

  blockImageAndBanner
    .createField('theme')
    .name('Theme')
    .type('Link')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['themeImageAndBanner'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blockImageAndBanner.changeFieldControl(
    'theme',
    'builtin',
    'entryLinkEditor',
    {
      showLinkEntityAction: true,
    }
  );
};
