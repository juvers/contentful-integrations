module.exports = function (migration) {
  const block = migration.editContentType('blockFAQ');
  block.deleteField('questionAndAnswer');

  block
    .createField('questionAndAnswers')
    .name('Question(s) & Answer(s)')
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
          linkContentType: ['elementQuestionAndAnswer'],
        },
      ],
    });
};
