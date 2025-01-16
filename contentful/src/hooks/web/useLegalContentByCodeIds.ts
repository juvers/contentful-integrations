import { useQuery } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';

import { contentfulClient } from '../../contentfulClient';
import { LEGAL_CONTENT_QUERY } from '../../queries/legalContentByCodeIds.query';
import { Maybe, LegalPage } from '../../types';

export const LegalContentCodeIds = {
  hipaa: 'consumerHIPAA',
  personalInformationConsent: 'consumerPersonalInformationConsentTerms',
  privacyNotice: 'consumerPrivacyNotice',
  privacyTerms: 'consumerPrivacyConsentTerms', // includes privacyNotice + personInformationConsent type wording
};

export type LegalContentType = Pick<LegalPage, 'headline' | 'copy' | 'codeId'>;

export type LegalContentData = {
  items?: Maybe<LegalContentType>[] | [];
};

export type QueryResponseType = {
  legalPageCollection?: LegalContentData;
};

type LegalContentProps = {
  codeIds: Array<string>;
  skip?: boolean;
  preview?: boolean;
};

const useLegalContentByCodeIds = ({
  codeIds,
  skip = false,
  preview = false,
}: LegalContentProps): {
  legalContent: Maybe<LegalContentType>[] | [] | undefined;
  loading: boolean;
  error: undefined | ApolloError;
} => {
  const { data, loading, error } = useQuery<
    QueryResponseType,
    LegalContentProps
  >(LEGAL_CONTENT_QUERY, {
    skip,
    client: contentfulClient,
    variables: {
      codeIds,
      preview,
    },
  });

  const legalContent = data?.legalPageCollection?.items;
  if (error) {
    console.error(`useLegalContentByCodeIds--error`, { codeIds }, error);
  }
  if (!loading && !legalContent) {
    console.error(`useLegalContentByCodeIds--error - No legal content found`, {
      codeIds,
    });
  }

  return { legalContent, loading, error };
};

export { useLegalContentByCodeIds };
