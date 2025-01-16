module.exports = function (migration) {
  const block = migration.editContentType('valuePropositionBlock');

  block.deleteField('valuePropositionBoxes');
  block.deleteField('otherElements');

  block
    .createField('valuePropositionBoxes')
    .name('Value Proposition Boxes')
    .type('Array')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: ['valuePropositionBox'],
        },
      ],
    });
  block.changeFieldControl(
    'valuePropositionBoxes',
    'builtin',
    'entryLinksEditor',
    {
      helpText: 'Should add boxes in sets of 3',
    }
  );

  block
    .createField('otherElements')
    .name('Other Element(s)')
    .type('Array')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .validations([])
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'blockCopy',
            'blockFootnote',
            'offerCTAButton',
            'ctaButton',
            'elementFindASpecialist',
          ],
        },
      ],
    });
};
