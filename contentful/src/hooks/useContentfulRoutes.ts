import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { contentfulClient } from '../contentfulClient';

const ROUTES_QUERY = gql`
  query routesRedirect {
    routeCollection {
      items {
        sys {
          id
        }
        slug
        to
        notification
      }
    }
  }
`;

const useContentfulRoutes = () => {
  return useQuery(ROUTES_QUERY, {
    client: contentfulClient,
  });
};

export { useContentfulRoutes };
