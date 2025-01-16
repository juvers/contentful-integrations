import gql from 'graphql-tag';

export const ARTICLE_CARD_BY_SLUG_QUERY = gql`
  query articleCardBySlug($slug: String!, $preview: Boolean) {
    articlePageCollection(where: { slug: $slug }, preview: $preview) {
      items {
        sys {
          id
        }
        ... on ArticlePage {
          slug
          breadcrumb
          headline
          cardSummary
          hero {
            __typename
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
            __typename
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
            }
          }
        }
      }
    }
  }
`;
