import { LegalPage } from '../types';
import { LegalContentCodeIds } from '../hooks/web/useLegalContentByCodeIds';
import { richTextParagraph } from './mockRichText';

/**
 * All values, including nested values, within type are optional
 */
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export const mockPrivacyTerms: DeepPartial<LegalPage> = {
  codeId: LegalContentCodeIds.privacyTerms,
  headline: 'Privacy Terms Headline',
  copy: {
    json: richTextParagraph,
  },
};

export const mockHipaa: DeepPartial<LegalPage> = {
  codeId: LegalContentCodeIds.hipaa,
  headline: 'HIPAA Headline',
  copy: {
    json: richTextParagraph,
  },
};
