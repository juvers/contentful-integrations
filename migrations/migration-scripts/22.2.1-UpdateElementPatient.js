module.exports = function (migration) {
  const patient = migration.editContentType('elementPatient');

  patient.editField('patientDescription').validations([
    {
      enabledMarks: ['bold', 'underline', 'italic'],
      message: 'Only bold, underline, and italic marks are allowed',
    },
    {
      enabledNodeTypes: ['heading-3'],
      message: 'Only heading 3 is allowed',
    },
  ]);
};
