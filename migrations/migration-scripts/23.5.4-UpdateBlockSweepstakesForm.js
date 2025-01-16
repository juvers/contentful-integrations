module.exports = function (migration) {
  const elementSweepstakesForm = migration.editContentType(
    'elementSweepstakesForm'
  );

  elementSweepstakesForm
    .createField('sweepstakeId')
    .name('Sweepstake Id')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  // move field
  elementSweepstakesForm.moveField('sweepstakeId').afterField('internalName');
};
