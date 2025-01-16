import gql from 'graphql-tag';

export const ISI_BY_BRAND_QUERY = gql`
  query isiByBrand($fullBrandNames: [String!]) {
    brandCollection(
      where: { OR: [{ fullBrandName_in: $fullBrandNames }] }
      limit: 20
    ) {
      items {
        sys {
          id
        }
        fullBrandName
        shortBrandName
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

export const ISI_BY_BRAND_ID_QUERY = gql`
  query isiByBrandCodeId($brandIds: [String!]) {
    brandCollection(where: { OR: [{ codeId_in: $brandIds }] }, limit: 20) {
      items {
        sys {
          id
        }
        fullBrandName
        shortBrandName
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
        abbreviatedImportantSafetyInformation {
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
