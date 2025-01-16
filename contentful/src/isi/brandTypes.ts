export const FullBrandName = {
  Botox: 'BOTOX® Cosmetic (onabotulinumtoxinA)',
  Juvederm: 'JUVÉDERM® Collection of Fillers',
  CoolSculpting: 'CoolSculpting® and CoolSculpting® Elite',
  CoolTone: 'CoolTone®',
  DiamondGlow: 'DiamondGlow®',
  Kybella: 'Kybella® (deoxycholic acid) injection 10 mg/mL',
  Latisse: 'LATISSE® (bimatoprost ophthalmic solution) 0.03%',
  Natrelle: 'Natrelle® Breast Implants',
  SkinMedica: 'SkinMedica®',
  Skinvive: 'SKINVIVE by JUVÉDERM®',
} as const;

export type FullBrandNameString =
  (typeof FullBrandName)[keyof typeof FullBrandName];

export const ShortBrandName = {
  Botox: 'BOTOX®',
  Juvederm: 'JUVÉDERM®',
  CoolSculpting: 'CoolSculpting® and CoolSculpting® Elite',
  CoolTone: 'CoolTone®',
  DiamondGlow: 'DiamondGlow®',
  Kybella: 'KYBELLA®',
  Latisse: 'LATISSE®',
  Natrelle: 'Natrelle®',
  SkinMedica: 'SkinMedica®',
  Skinvive: 'SKINVIVE',
} as const;

export type ShortBrandNameString =
  (typeof ShortBrandName)[keyof typeof ShortBrandName];

export const CONTENTFUL_ISI_TEMPLATE_CODEIDS = {
  botoxOnly: 'BotoxOnly',
  botoxOnlyShorten: 'BotoxOnlyShorten',
  natrelleOnly: 'NatrelleOnly',
  importantSafetyInformationOnly: 'ImportantSafetyInformationOnly',
  singleSafetyAndPrescribingInfo: 'SingleSafetyAndPrescribingInfo',
  safetyAndPrescribingInfo: 'SafetyAndPrescribingInfo',
} as const;

export const CONTENTFUL_BRAND_CODEIDS = {
  botox: 'botox',
  juvederm: 'juvederm',
  coolsculpting: 'coolsculpting',
  cooltone: 'cooltone',
  diamondglow: 'diamondglow',
  kybella: 'kybella',
  latisse: 'latisse',
  natrelle: 'natrelle',
  skinmedica: 'skinmedica',
  skinvive: 'skinvive',
} as const;

/**
 * Map for CMS Service global ISI filter to Contentful Brand CodeId
 * @property { string } isiFilter - corresponding Contentful Brand CodeId
 */
export const ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID = {
  consumer_botox: CONTENTFUL_BRAND_CODEIDS.botox,
  consumer_juvederm: CONTENTFUL_BRAND_CODEIDS.juvederm,
  consumer_cool_sculpting: CONTENTFUL_BRAND_CODEIDS.coolsculpting,
  consumer_cool_tone: CONTENTFUL_BRAND_CODEIDS.cooltone,
  consumer_diamond_glow: CONTENTFUL_BRAND_CODEIDS.diamondglow,
  consumer_kybella: CONTENTFUL_BRAND_CODEIDS.kybella,
  consumer_latisse: CONTENTFUL_BRAND_CODEIDS.latisse,
  consumer_natrelle: CONTENTFUL_BRAND_CODEIDS.natrelle,
  consumer_skin_medica: CONTENTFUL_BRAND_CODEIDS.skinmedica,
  consumer_skinvive_by_juvederm: CONTENTFUL_BRAND_CODEIDS.skinvive,
} as const;

export type BrandCodeId =
  (typeof CONTENTFUL_BRAND_CODEIDS)[keyof typeof CONTENTFUL_BRAND_CODEIDS];
export type LegacyISIFilter = keyof typeof ISI_SLUG_TO_CONTENTFUL_BRAND_CODEID;
