module.exports = function (migration) {
  const blockBeforeAndAfter = migration.editContentType('blockBeforeAndAfter');

  blockBeforeAndAfter
    .createField('carousel')
    .name('Carousel')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['beforeAndAfterCarouselItem'],
        },
      ],
    })
    .disabled(false)
    .omitted(false);

  blockBeforeAndAfter
    .editField('patient')
    .name('DEPRECATED: Patient')
    .required(false);

  blockBeforeAndAfter.changeFieldControl(
    'patient',
    'builtin',
    'entryLinksEditor',
    {
      helpText:
        'This field is being deprecated during a redesign. It will continue to be supported until all pages using this block are redesigned',
    }
  );

  blockBeforeAndAfter
    .editField('disclaimerText')
    .name('DEPRECATED: Disclaimer Text')
    .required(false);

  blockBeforeAndAfter.changeFieldControl(
    'disclaimerText',
    'builtin',
    'richTextEditor',
    {
      helpText:
        'This field is being deprecated during a redesign. It will continue to be supported until all pages using this block are redesigned',
    }
  );

  blockBeforeAndAfter
    .editField('dragButtonText')
    .name('DEPRECATED: Drag Button Text')
    .required(false);

  blockBeforeAndAfter.changeFieldControl(
    'dragButtonText',
    'builtin',
    'singleLine',
    {
      helpText:
        'This field is being deprecated during a redesign. It will continue to be supported until all pages using this block are redesigned',
    }
  );

  blockBeforeAndAfter
    .editField('footnote')
    .name('DEPRECATED: Footnote')
    .required(false);

  blockBeforeAndAfter.changeFieldControl(
    'footnote',
    'builtin',
    'entryLinksEditor',
    {
      helpText:
        'This field is being deprecated during a redesign. It will continue to be supported until all pages using this block are redesigned',
    }
  );

  blockBeforeAndAfter
    .editField('copy')
    .name('DEPRECATED: Copy')
    .required(false);

  blockBeforeAndAfter.changeFieldControl('copy', 'builtin', 'richTextEditor', {
    helpText:
      'This field is being deprecated during a redesign. It will continue to be supported until all pages using this block are redesigned',
  });

  blockBeforeAndAfter.changeFieldControl(
    'theme',
    'builtin',
    'entryLinkEditor',
    {
      helpText:
        'Theme is currently only supported when this content type is used within Compose > Landing Page, Compose > Opt-In Offer Landing Page, and Compose > Provider Search Landing Page',
    }
  );

  blockBeforeAndAfter.editField('header').disabled(true);

  blockBeforeAndAfter.moveField('carousel').afterField('headlineRichText');
  blockBeforeAndAfter.moveField('theme').afterField('carousel');
};
