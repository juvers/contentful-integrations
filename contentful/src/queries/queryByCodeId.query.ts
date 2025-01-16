import gql from 'graphql-tag';

export const AUTHENTICATION_FLOW_BY_CODE_ID_QUERY = gql`
  query blockAuthFlowByCodeId($codeId: String!, $preview: Boolean) {
    blockAuthenticationFlowCollection(
      where: { codeId: $codeId }
      limit: 1
      preview: $preview
    ) {
      items {
        internalName
        codeId
        authenticationSuccessAction
        authenticationSuccessRedirectUrl
        header {
          internalName
          logo {
            cloudinaryImage
            alt
            sys {
              id
            }
          }
          backgroundImage {
            cloudinaryImage
            alt
            sys {
              id
            }
          }
          backgroundColor
        }
        formBottomCopy {
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
        authenticationSuccessScreen {
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
          ctaCollection {
            items {
              internalName
              buttonCopy
              url
              forceOpenSameTab
            }
          }
          additionalCopy {
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
  }
`;
