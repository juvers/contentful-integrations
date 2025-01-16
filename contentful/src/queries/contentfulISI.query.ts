import gql from 'graphql-tag';

const ISI_TEMPLATES_QUERY = gql`
  query TemplatesCollectionQueryToImportantSafetyInformation {
    importantSafetyInformation(id: "5lJaufLY4cMg3sUibUeX3x") {
      templatesCollection(limit: 10) {
        items {
          internalName
          codeId
          isiHeaderTemplate {
            json
          }
          isiLinkTemplate {
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
                    forceOpenSameTab
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

const LONG_BRAND_NAMES_QUERY = gql`
  query LongBrandNamesCollectionQueryToImportantSafetyInformation {
    importantSafetyInformation(id: "5lJaufLY4cMg3sUibUeX3x") {
      longBrandNamesCollection(limit: 10) {
        items {
          codeId
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
  }
`;

const SHORT_BRAND_NAMES_QUERY = gql`
  query ShortBrandNameCollectionQueryToImportantSafetyInformation {
    importantSafetyInformation(id: "5lJaufLY4cMg3sUibUeX3x") {
      shortBrandNameCollection(limit: 10) {
        items {
          codeId
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
  }
`;

export { ISI_TEMPLATES_QUERY, LONG_BRAND_NAMES_QUERY, SHORT_BRAND_NAMES_QUERY };
