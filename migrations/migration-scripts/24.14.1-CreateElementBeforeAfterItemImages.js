const {
  richTextBoldUnderlineItalicSuperscript,
  richTextLinks,
  entryHyperlinkTypeLink,
} = require('../constants/validation');

module.exports = function (migration) {
  const beforeAndAfterImages = migration
    .createContentType('beforeAndAfterImages')
    .name('Element > Before And After Images')
    .description('Images to display in before and after carousel')
    .displayField('internalName');

  beforeAndAfterImages
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages
    .createField('label')
    .name('Label')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages
    .createField('beforeText')
    .name('Before Text')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      { enabledNodeTypes: [] },
    ])
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages
    .createField('beforeImage')
    .name('Before Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['blockImage'],
      },
    ])
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages
    .createField('afterText')
    .name('After Text')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      { enabledNodeTypes: [] },
    ])
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages
    .createField('afterImage')
    .name('After Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['blockImage'],
      },
    ])
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages
    .createField('description')
    .name('Description')
    .type('RichText')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  beforeAndAfterImages
    .createField('disclaimer')
    .name('Disclaimer')
    .type('RichText')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      richTextLinks,
      entryHyperlinkTypeLink,
    ]);

  beforeAndAfterImages
    .createField('isiDisclaimer')
    .name('ISI Disclaimer')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([
      {
        size: {
          max: 1,
        },
      },
    ])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['brand'],
        },
      ],
    })
    .disabled(false)
    .omitted(false);

  beforeAndAfterImages.changeFieldControl(
    'isiDisclaimer',
    'builtin',
    'entryLinksEditor',
    {
      showCreateEntityAction: false,
    }
  );

  beforeAndAfterImages
    .createField('cta')
    .name('CTA')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['ctaButton', 'buttonWithIcon'],
      },
    ])
    .disabled(false)
    .omitted(false);

  const beforeAndAfterCarouselItem = migration
    .createContentType('beforeAndAfterCarouselItem')
    .name('Element > Before And After Carousel Item')
    .description('Carousel item to display for each before and after slide')
    .displayField('internalName');

  beforeAndAfterCarouselItem
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  beforeAndAfterCarouselItem
    .createField('avatarImage')
    .name('Avatar Image')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false);

  beforeAndAfterCarouselItem
    .createField('carousel')
    .name('Carousel')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['beforeAndAfterImages'],
        },
      ],
    })
    .disabled(false)
    .omitted(false);

  beforeAndAfterCarouselItem
    .createField('eyebrow')
    .name('Eyebrow')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  beforeAndAfterCarouselItem
    .createField('title')
    .name('Title')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      richTextBoldUnderlineItalicSuperscript,
      {
        enabledNodeTypes: ['heading-1'],
        message: 'Only heading 1 enabled',
      },
    ])
    .disabled(false)
    .omitted(false);
};
