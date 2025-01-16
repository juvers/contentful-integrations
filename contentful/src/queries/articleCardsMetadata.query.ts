import gql from 'graphql-tag';

export const ARTICLE_CARDS_METADATA_QUERY = gql`
  query articleCardsMetadataQuery($codeId: String!) {
    composeCardsCollection(where: { codeId: $codeId }, limit: 1) {
      items {
        sys {
          id
        }
        cardsCollection {
          items {
            sys {
              id
            }
            metaConcernAreaCollection(limit: 10) {
              items {
                sys {
                  id
                }
                value
              }
            }
            metaProductCollection(limit: 10) {
              items {
                sys {
                  id
                }
                value
              }
            }
            metaUserJourneyCollection(limit: 10) {
              items {
                sys {
                  id
                }
                value
              }
            }
            metaContentVisualCollection(limit: 10) {
              items {
                sys {
                  id
                }
                value
              }
            }
            metaContentTagsCollection(limit: 10) {
              items {
                sys {
                  id
                }
                value
              }
            }
          }
        }
      }
    }
  }
`;
