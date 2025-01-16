const brandTreatmentInfo = {
  botox: {
    treatmentPointsMeasurement: 'per treatment',
  },
  juvederm: {
    treatmentPointsMeasurement: 'per syringe',
  },
  coolsculpting: {
    treatmentPointsMeasurement: 'per visit',
  },
  cooltone: {
    treatmentPointsMeasurement: 'per visit',
  },
  skinmedica: {
    treatmentPointsMeasurement: 'with every purchase',
  },
  diamondglow: {
    treatmentPointsMeasurement: 'per treatment',
  },
  latisse: {
    treatmentPointsMeasurement: 'per kit',
  },
  kybella: {
    treatmentPointsMeasurement: 'per treatment',
  },
  natrelle: {
    treatmentPointsMeasurement: 'per augmentation',
  },
  skinvive: {
    treatmentPointsMeasurement: 'per syringe',
  },
};

module.exports = function (migration) {
  migration.transformEntries({
    contentType: 'brand',
    from: ['codeId'],
    to: [
      'treatmentPointsMeasurement',
    ],
    transformEntryForLocale: async function (fromFields) {
      if (fromFields.codeId) {
        return brandTreatmentInfo[fromFields.codeId['en-US']];
      }
    },
  });
};
