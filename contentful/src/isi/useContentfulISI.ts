import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { contentfulClient } from '../contentfulClient';

const GLOBAL_ISI_QUERY = gql`
  query globalISIQuery {
    brandCollection(limit: 10) {
      items {
        internalName
        fullBrandName
        consumerImportantSafetyInformation {
          json
          links {
            entries {
              hyperlink {
                sys {
                  id
                }
                ... on Link {
                  url
                  forceOpenSameTab
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Hook to fetch Contentful ISI data, limited to data in Brand content type.
 * To return all Contentful ISI data, @see useContentfulBuilder
 */
const useContentfulISI = () => {
  const result = useQuery(GLOBAL_ISI_QUERY, {
    client: contentfulClient,
  });

  if (result.error)
    console.error('useContentfulISI--error', {
      error: result.error,
    });

  return result;
};

export { useContentfulISI };
