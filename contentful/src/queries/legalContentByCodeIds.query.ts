import gql from 'graphql-tag';

export const LEGAL_CONTENT_QUERY = gql`
  query legalContentByCodeId($codeIds: [String!], $preview: Boolean) {
    legalPageCollection(
      limit: 4
      where: { codeId_in: $codeIds }
      preview: $preview
    ) {
      items {
        sys {
          id
        }
        codeId
        headline
        copy {
          json
          links {
            entries {
              hyperlink {
                sys {
                  id
                }
                ... on Link {
                  url
                  internalName
                }
              }
            }
          }
        }
      }
    }
  }
`;
