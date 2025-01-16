module.exports = function (migration) {
  migration
    .editContentType('blockBeforeAndAfter')
    .editField('dragButtonText')
    .validations([
      {
        size: {
          min: 1,
          max: 10,
        },
      },
    ]);
};
