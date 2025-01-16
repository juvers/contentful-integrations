import gql from 'graphql-tag';

export const ARTICLE_CARDS_QUERY = gql`
  query articlesQuery($codeId: String!, $limitNumCards: Int) {
    composeCardsCollection(where: { codeId: $codeId }, limit: 1) {
      items {
        headline
        subhead
        sys {
          id
        }
        cardsCollection(limit: $limitNumCards) {
          total
          items {
            breadcrumb
            headline
            cardSummary
            redirectTo
            redirectNotification
            slug
            campaignId
            campaignName
            contentId
            approvedDate
            headline
            sys {
              id
            }
            hero {
              ... on BlockImage {
                sys {
                  id
                }
                imageDisclaimer: disclaimer {
                  json
                }
                textColor
                image {
                  cloudinaryImage
                  alt
                  sys {
                    id
                  }
                }
              }
              ... on BlockVideo {
                sys {
                  id
                }
                disclaimer
                disclaimerTextColor
                video {
                  cloudinaryVideo
                  poster {
                    cloudinaryImage
                    alt
                  }
                  sys {
                    id
                  }
                }
              }
            }
            mobileHero {
              ... on BlockImage {
                sys {
                  id
                }
                imageDisclaimer: disclaimer {
                  json
                }
                textColor
                image {
                  cloudinaryImage
                  alt
                  sys {
                    id
                  }
                }
              }
              ... on BlockVideo {
                sys {
                  id
                }
                disclaimer
                disclaimerTextColor
                video {
                  cloudinaryVideo
                  poster {
                    cloudinaryImage
                    alt
                  }
                  sys {
                    id
                  }
                }
              }
            }
            brandsCollection {
              items {
                sys {
                  id
                }
                codeId
                shortBrandName
              }
            }
          }
        }
      }
    }
  }
`;
