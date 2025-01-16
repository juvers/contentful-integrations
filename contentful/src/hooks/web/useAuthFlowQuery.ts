import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import { contentfulClient } from '../../contentfulClient';
import { BlockAuthenticationFlow, Query } from '../../types';
import { AUTHENTICATION_FLOW_BY_CODE_ID_QUERY } from '../../queries/queryByCodeId.query';

export type ReturnValues = {
  authenticationFlow: BlockAuthenticationFlow | null;
  loading: boolean;
  error?: ApolloError | Error;
};

const useAuthFlowQuery = ({
  codeId,
  skip = false,
  preview = false,
}: {
  codeId: string;
  skip?: boolean;
  preview?: boolean;
}): ReturnValues => {
  const [returnValues, setReturnValues] = useState<ReturnValues>({
    authenticationFlow: null,
    loading: !skip,
  });
  const { data, loading, error } = useQuery<Query>(
    AUTHENTICATION_FLOW_BY_CODE_ID_QUERY,
    {
      skip,
      client: contentfulClient,
      variables: {
        codeId,
        preview,
      },
    }
  );

  useEffect(() => {
    if (!loading && !skip) {
      if (error) {
        console.error(
          `useAuthenticationFlow--error`,
          {
            component: 'useAuthenticationFlowQuery',
            codeId,
          },
          error
        );
        setReturnValues({
          authenticationFlow: null,
          loading,
          error,
        });
      }
      // no auth flow
      else if (!data?.blockAuthenticationFlowCollection?.items?.[0]) {
        const err = Error(`No authentication flow with codeId ${codeId}`);
        console.error(
          `useAuthenticationFlow--error__noAuthFlow`,
          {
            component: 'useAuthenticationFlowQuery',
            codeId,
          },
          err
        );
        setReturnValues({
          authenticationFlow: null,
          loading,
          error: err,
        });
      }
      // result
      else {
        setReturnValues({
          authenticationFlow:
            data?.blockAuthenticationFlowCollection?.items?.[0],
          loading,
          error,
        });
      }
    }
  }, [
    loading,
    error,
    skip,
    codeId,
    data?.blockAuthenticationFlowCollection?.items,
  ]);

  return { ...returnValues };
};

export { useAuthFlowQuery };
