import gql from 'graphql-tag';

export const AUTHENTICATION_FLOW_BY_LANDING_PAGE_SLUG_QUERY = gql`
  query blockAuthFlowByLandingPageSlug($slug: String!, $preview: Boolean) {
    landingPageCollection(where: { slug: $slug }, preview: $preview) {
      items {
        authenticationFlow {
          codeId
        }
      }
    }
  }
`;
