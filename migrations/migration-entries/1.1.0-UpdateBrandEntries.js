const brandTreatmentInfo = {
  botox: {
    treatmentPoints: '200 Points',
    treatmentType: 'Injection',
    treatmentPrice: '$400 - $600',
    treatmentDuration: '10 - 15 minutes',
    treatmentFrequency: 'No more than every 3 months',
    treatmentDowntime: 'None',
  },
  juvederm: {
    treatmentPoints: '200 Points',
    treatmentType: 'Injection',
    treatmentPrice: '$600 - $1,400',
    treatmentDuration: '30 min.',
    treatmentFrequency: 'Every 1 to 2 years',
    treatmentDowntime: 'Minimal',
  },
  coolsculpting: {
    treatmentPoints:
      '400 Points for Coolsculpting® and 500 Points for Coolsculpting® Elite',
    treatmentType: 'Fat freezing',
    treatmentPrice: '$3,000 - $4,000 for a personalized treatment plan',
    treatmentDuration:
      '35 minutes to an hour, depending on area(s) being treated',
    treatmentResultsTime: 'As early as 1 - 3 months posttreatment',
    treatmentDowntime: 'Little to none',
  },
  cooltone: {
    treatmentPoints: '100 Points',
    treatmentType: 'Magnetic muscle stimulation (MMS)',
    treatmentPrice: '$800 to $2,000 for 4 to 8 treatments',
    treatmentDuration: '30 minutes',
    treatmentFrequency:
      '4 to 8 treatments spread over 2 to 4 weeks, with at least 1 to 2 days of rest in between',
    treatmentResultsTime: 'Patient results may vary',
  },
  skinmedica: {
    treatmentPoints: '1 Point per $1 MSRP',
    treatmentType: 'Topical',
    treatmentPrice: '$40 - $542',
    treatmentFrequency: 'Varies',
    treatmentResultsTime: 'Instant and over time',
    treatmentDowntime: 'None',
  },
  diamondglow: {
    treatmentPoints: '150 Points',
    treatmentType: 'Exfoliation, extraction & infusion',
    treatmentPrice: '$150 - $300',
    treatmentFrequency: 'Every 2-3 weeks',
    treatmentDuration: '30 min',
    treatmentDowntime: 'Minimal',
  },
  latisse: {
    treatmentPoints: '70 Points for 3 mL; 140 Points for 5 mL',
    treatmentType: 'Brush-on solution',
    treatmentPrice: '$125 - $179',
    treatmentFrequency: 'Once nightly',
    treatmentDuration: '16 weeks',
  },
  kybella: {
    treatmentPoints: '200 Points',
    treatmentType: 'Injection',
    treatmentPrice: '$800 - $2,000',
    treatmentFrequency:
      'Up to 6 total treatments spaced at least one month apart.',
    treatmentDuration: '15-20 minutes',
  },
  natrelle: {
    treatmentPoints: '500 Points*',
    treatmentType: 'Surgical Procedure',
    treatmentPrice: '$6,000 - $12,000',
  },
  skinvive: {
    treatmentPoints: '100 Points',
    treatmentType: 'Microdroplet injectable treatment',
    treatmentPrice: '$650 - $750 (2 syringes)',
    treatmentFrequency: 'Every 6 months',
    treatmentDuration: '10-15 minutes',
  },
};

module.exports = function (migration) {
  migration.transformEntries({
    contentType: 'brand',
    from: ['codeId'],
    to: [
      'treatmentPoints',
      'treatmentType',
      'treatmentPrice',
      'treatmentDuration',
      'treatmentFrequency',
      'treatmentDowntime',
      'treatmentResultsTime',
    ],
    transformEntryForLocale: async function (fromFields) {
      if (fromFields.codeId) {
        return brandTreatmentInfo[fromFields.codeId['en-US']];
      }
    },
  });
};
