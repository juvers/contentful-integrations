import ApolloClient from 'apollo-boost';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { introspectionResult } from './index';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
});

const environment = process.env.REACT_APP_CMS_ENVIRONMENT || 'stage';
const spaceId = process.env.REACT_APP_CMS_SPACE_ID || 'owuwz5p532r4';
const accessToken =
  process.env.REACT_APP_CMS_CDA ||
  'Lco7pz62fNrnvz9BDPOoy9Uia9o6y_p0HqvSurj1gp0';

const contentfulClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
  cache: new InMemoryCache({ fragmentMatcher }),
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export { contentfulClient };
