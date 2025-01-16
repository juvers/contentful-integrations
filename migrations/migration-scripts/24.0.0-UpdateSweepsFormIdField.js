module.exports = function (migration) {
  const form = migration.editContentType('elementSweepstakesForm');
  form.editField('sweepstakeId').validations([]);
};
