import {
  ArticlePage,
  BlockImage,
  BlockVideo,
  Video,
  Image,
  Brand,
  ComposeCards,
  Maybe,
  ComposeCardsCardsCollection,
} from '../types';

// types for articleCards.query.ts

export const ArticleCardsCodeID = {
  featuredSection: 'featuredSection',
  discoverSection: 'discoverSection',
  discoverPage: 'discoverPage',
} as const;

export type UIArticleHero = UIBlockImage | UIBlockVideo;

type UIImage = Pick<Image, 'alt' | 'cloudinaryImage'>;

type UIBlockImage = Pick<BlockImage, 'textColor' | 'sys' | '__typename'> & {
  image: UIImage;
  imageDisclaimer: BlockImage['disclaimer'];
};

type UIBlockVideo = Pick<
  BlockVideo,
  'disclaimer' | 'disclaimerTextColor' | 'sys' | '__typename'
> & {
  video: Pick<Video, 'cloudinaryVideo'> & { poster: UIImage };
};

export type ArticleCard = Pick<
  ArticlePage,
  | 'breadcrumb'
  | 'headline'
  | 'slug'
  | 'cardSummary'
  | 'campaignId'
  | 'campaignName'
  | 'sys'
  | 'redirectTo'
  | 'redirectNotification'
  | 'approvedDate'
  | 'contentId'
  | 'headline'
> & {
  hero: UIArticleHero;
  mobileHero: UIArticleHero;
  brandsCollection: { items: Pick<Brand, 'codeId' | 'shortBrandName'>[] };
};

export type CardCollection = Pick<ComposeCards, 'headline' | 'subhead'> & {
  cardsCollection?: {
    items?: Maybe<ArticleCard[]>;
    total: ComposeCardsCardsCollection['total'];
  };
};
