export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'ArticlePageBlocksItem',
        possibleTypes: [
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockCopy',
          },
          {
            name: 'BlockCtaBanner',
          },
          {
            name: 'BlockFaq',
          },
          {
            name: 'BlockFootnote',
          },
          {
            name: 'BlockImage',
          },
          {
            name: 'BlockVideo',
          },
          {
            name: 'JoinBanner',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ArticlePageHero',
        possibleTypes: [
          {
            name: 'BlockImage',
          },
          {
            name: 'BlockVideo',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ArticlePageMobileHero',
        possibleTypes: [
          {
            name: 'BlockImage',
          },
          {
            name: 'BlockVideo',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BannerWithCopyCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BeforeAndAfterImagesCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockBackgroundImageWithCopyCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockFullImageCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'ElementSweepstakesForm',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockHeroWithBackgroundVideoCtaItem',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockImageAndBannerCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'ElementSweepstakesForm',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockListCollectionListItemsItem',
        possibleTypes: [
          {
            name: 'IconWithCopy',
          },
          {
            name: 'LinkWithCopy',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockLogoHeaderCta',
        possibleTypes: [
          {
            name: 'CtaButton',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockLogosOtherElementsItem',
        possibleTypes: [
          {
            name: 'BlockCopy',
          },
          {
            name: 'BlockFootnote',
          },
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BlockStickyBottomBannerCtaElementItem',
        possibleTypes: [
          {
            name: 'PaymentPlansCta',
          },
          {
            name: 'ReferAFriendCta',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'BusinessLandingPageBlocksItem',
        possibleTypes: [
          {
            name: 'BannerWithCopy',
          },
          {
            name: 'BlockFullImage',
          },
          {
            name: 'BlockHeroWithBackgroundVideo',
          },
          {
            name: 'BlockImageAndBanner',
          },
          {
            name: 'BlockLogos',
          },
          {
            name: 'ValuePropositionBlock',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'CarouselCardCarouselCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentPageContentBlocksItem',
        possibleTypes: [
          {
            name: 'BlockImageWithHeadline',
          },
          {
            name: 'CarouselCardCarousel',
          },
          {
            name: 'SplitCopyAndImage',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ElementLinksLinksItem',
        possibleTypes: [
          {
            name: 'Link',
          },
          {
            name: 'StaticCode',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Entry',
        possibleTypes: [
          {
            name: 'ArticlePage',
          },
          {
            name: 'BannerWithCopy',
          },
          {
            name: 'BeforeAndAfterCarouselItem',
          },
          {
            name: 'BeforeAndAfterImages',
          },
          {
            name: 'BlockActionCardCollection',
          },
          {
            name: 'BlockAnnouncement',
          },
          {
            name: 'BlockAuthenticationFlow',
          },
          {
            name: 'BlockBackgroundImageWithCopy',
          },
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockClaimConfiguration',
          },
          {
            name: 'BlockConfig',
          },
          {
            name: 'BlockCopy',
          },
          {
            name: 'BlockCtaBanner',
          },
          {
            name: 'BlockFaq',
          },
          {
            name: 'BlockFooter',
          },
          {
            name: 'BlockFootnote',
          },
          {
            name: 'BlockFullImage',
          },
          {
            name: 'BlockHeroWithBackgroundVideo',
          },
          {
            name: 'BlockImage',
          },
          {
            name: 'BlockImageAndBanner',
          },
          {
            name: 'BlockImageWithHeadline',
          },
          {
            name: 'BlockListCollection',
          },
          {
            name: 'BlockLogoHeader',
          },
          {
            name: 'BlockLogos',
          },
          {
            name: 'BlockProviderSearchOffer',
          },
          {
            name: 'BlockSettingsGroup',
          },
          {
            name: 'BlockSimpleHeader',
          },
          {
            name: 'BlockSingleScreen',
          },
          {
            name: 'BlockStickyBottomBanner',
          },
          {
            name: 'BlockTopBottomCopy',
          },
          {
            name: 'BlockVideo',
          },
          {
            name: 'Brand',
          },
          {
            name: 'BusinessLandingPage',
          },
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CarouselCardCarousel',
          },
          {
            name: 'CarouselTabbedCarousel',
          },
          {
            name: 'ComposeCards',
          },
          {
            name: 'ComposeOptInOfferLandingPage',
          },
          {
            name: 'ConcernArea',
          },
          {
            name: 'ContentPage',
          },
          {
            name: 'ContentTag',
          },
          {
            name: 'ContentVisual',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementActionCard',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementImageCard',
          },
          {
            name: 'ElementImageWithCopy',
          },
          {
            name: 'ElementKeyValuePair',
          },
          {
            name: 'ElementLinks',
          },
          {
            name: 'ElementMlrc',
          },
          {
            name: 'ElementPatient',
          },
          {
            name: 'ElementPatientConcernArea',
          },
          {
            name: 'ElementQuestionAndAnswer',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'ElementSettings',
          },
          {
            name: 'ElementSweepstakesForm',
          },
          {
            name: 'ElementTabbedCarouselItem',
          },
          {
            name: 'FadeModal',
          },
          {
            name: 'IconWithCopy',
          },
          {
            name: 'Image',
          },
          {
            name: 'ImageAndText',
          },
          {
            name: 'ImageGrid',
          },
          {
            name: 'ImageWithDisclaimer',
          },
          {
            name: 'ImportantSafetyInformation',
          },
          {
            name: 'ImportantSafetyInformationTemplate',
          },
          {
            name: 'JoinBanner',
          },
          {
            name: 'JsonType',
          },
          {
            name: 'LandingPage',
          },
          {
            name: 'LegalPage',
          },
          {
            name: 'Link',
          },
          {
            name: 'LinkWithCopy',
          },
          {
            name: 'OfferCtaButton',
          },
          {
            name: 'PaymentPlansCta',
          },
          {
            name: 'Product',
          },
          {
            name: 'ProgramPage',
          },
          {
            name: 'ProviderConsultationOffer',
          },
          {
            name: 'ProviderSearchLandingPage',
          },
          {
            name: 'ReferAFriendCta',
          },
          {
            name: 'RolesPermissionsGrid',
          },
          {
            name: 'Route',
          },
          {
            name: 'ShareMessage',
          },
          {
            name: 'SplitCopyAndImage',
          },
          {
            name: 'SplitCopyAndImageTheme',
          },
          {
            name: 'StaticCode',
          },
          {
            name: 'TemplateOptInOffer',
          },
          {
            name: 'ThemeBannerWithCopy',
          },
          {
            name: 'ThemeBeforeAndAfter',
          },
          {
            name: 'ThemeBlockVideo',
          },
          {
            name: 'ThemeClaimConfiguration',
          },
          {
            name: 'ThemeFullImage',
          },
          {
            name: 'ThemeHeroWithBackgroundVideo',
          },
          {
            name: 'ThemeImageAndBanner',
          },
          {
            name: 'ThemeImageWithHeadline',
          },
          {
            name: 'ThemeLogoHeader',
          },
          {
            name: 'ThemeLogos',
          },
          {
            name: 'ThemeSweepstakesForm',
          },
          {
            name: 'TreatmentGuide',
          },
          {
            name: 'UserJourney',
          },
          {
            name: 'ValuePropositionBlock',
          },
          {
            name: 'ValuePropositionBox',
          },
          {
            name: 'ValuePropositionTheme',
          },
          {
            name: 'VersionControl',
          },
          {
            name: 'Video',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'LandingPageBlocksItem',
        possibleTypes: [
          {
            name: 'BannerWithCopy',
          },
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockFullImage',
          },
          {
            name: 'BlockHeroWithBackgroundVideo',
          },
          {
            name: 'BlockImageAndBanner',
          },
          {
            name: 'BlockLogos',
          },
          {
            name: 'BlockVideo',
          },
          {
            name: 'ValuePropositionBlock',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ProgramPageBlocksItem',
        possibleTypes: [
          {
            name: 'BlockAnnouncement',
          },
          {
            name: 'BlockCopy',
          },
          {
            name: 'BlockFootnote',
          },
          {
            name: 'BlockImage',
          },
          {
            name: 'BlockListCollection',
          },
          {
            name: 'BlockStickyBottomBanner',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ProviderSearchLandingPageBlocksItem',
        possibleTypes: [
          {
            name: 'BannerWithCopy',
          },
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockFullImage',
          },
          {
            name: 'BlockHeroWithBackgroundVideo',
          },
          {
            name: 'BlockImageAndBanner',
          },
          {
            name: 'BlockLogos',
          },
          {
            name: 'ValuePropositionBlock',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ResourceLink',
        possibleTypes: [
          {
            name: 'BannerWithCopyCopyResourcesBlock',
          },
          {
            name: 'BannerWithCopyCopyResourcesHyperlink',
          },
          {
            name: 'BannerWithCopyCopyResourcesInline',
          },
          {
            name: 'BeforeAndAfterCarouselItemTitleResourcesBlock',
          },
          {
            name: 'BeforeAndAfterCarouselItemTitleResourcesHyperlink',
          },
          {
            name: 'BeforeAndAfterCarouselItemTitleResourcesInline',
          },
          {
            name: 'BeforeAndAfterImagesAfterTextResourcesBlock',
          },
          {
            name: 'BeforeAndAfterImagesAfterTextResourcesHyperlink',
          },
          {
            name: 'BeforeAndAfterImagesAfterTextResourcesInline',
          },
          {
            name: 'BeforeAndAfterImagesBeforeTextResourcesBlock',
          },
          {
            name: 'BeforeAndAfterImagesBeforeTextResourcesHyperlink',
          },
          {
            name: 'BeforeAndAfterImagesBeforeTextResourcesInline',
          },
          {
            name: 'BeforeAndAfterImagesDescriptionResourcesBlock',
          },
          {
            name: 'BeforeAndAfterImagesDescriptionResourcesHyperlink',
          },
          {
            name: 'BeforeAndAfterImagesDescriptionResourcesInline',
          },
          {
            name: 'BeforeAndAfterImagesDisclaimerResourcesBlock',
          },
          {
            name: 'BeforeAndAfterImagesDisclaimerResourcesHyperlink',
          },
          {
            name: 'BeforeAndAfterImagesDisclaimerResourcesInline',
          },
          {
            name: 'BlockAuthenticationFlowFormBottomCopyResourcesBlock',
          },
          {
            name: 'BlockAuthenticationFlowFormBottomCopyResourcesHyperlink',
          },
          {
            name: 'BlockAuthenticationFlowFormBottomCopyResourcesInline',
          },
          {
            name: 'BlockBackgroundImageWithCopyDescriptionResourcesBlock',
          },
          {
            name: 'BlockBackgroundImageWithCopyDescriptionResourcesHyperlink',
          },
          {
            name: 'BlockBackgroundImageWithCopyDescriptionResourcesInline',
          },
          {
            name: 'BlockBackgroundImageWithCopyDisclaimerResourcesBlock',
          },
          {
            name: 'BlockBackgroundImageWithCopyDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockBackgroundImageWithCopyDisclaimerResourcesInline',
          },
          {
            name: 'BlockBeforeAndAfterCopyResourcesBlock',
          },
          {
            name: 'BlockBeforeAndAfterCopyResourcesHyperlink',
          },
          {
            name: 'BlockBeforeAndAfterCopyResourcesInline',
          },
          {
            name: 'BlockBeforeAndAfterDisclaimerTextResourcesBlock',
          },
          {
            name: 'BlockBeforeAndAfterDisclaimerTextResourcesHyperlink',
          },
          {
            name: 'BlockBeforeAndAfterDisclaimerTextResourcesInline',
          },
          {
            name: 'BlockBeforeAndAfterHeadlineRichTextResourcesBlock',
          },
          {
            name: 'BlockBeforeAndAfterHeadlineRichTextResourcesHyperlink',
          },
          {
            name: 'BlockBeforeAndAfterHeadlineRichTextResourcesInline',
          },
          {
            name: 'BlockClaimConfigurationAlreadyClaimedMessageResourcesBlock',
          },
          {
            name: 'BlockClaimConfigurationAlreadyClaimedMessageResourcesHyperlink',
          },
          {
            name: 'BlockClaimConfigurationAlreadyClaimedMessageResourcesInline',
          },
          {
            name: 'BlockClaimConfigurationAlreadyRedeemedMessageResourcesBlock',
          },
          {
            name: 'BlockClaimConfigurationAlreadyRedeemedMessageResourcesHyperlink',
          },
          {
            name: 'BlockClaimConfigurationAlreadyRedeemedMessageResourcesInline',
          },
          {
            name: 'BlockClaimConfigurationClaimNotEligibleMessageResourcesBlock',
          },
          {
            name: 'BlockClaimConfigurationClaimNotEligibleMessageResourcesHyperlink',
          },
          {
            name: 'BlockClaimConfigurationClaimNotEligibleMessageResourcesInline',
          },
          {
            name: 'BlockClaimConfigurationClaimSuccessMessageResourcesBlock',
          },
          {
            name: 'BlockClaimConfigurationClaimSuccessMessageResourcesHyperlink',
          },
          {
            name: 'BlockClaimConfigurationClaimSuccessMessageResourcesInline',
          },
          {
            name: 'BlockCopyCopyResourcesBlock',
          },
          {
            name: 'BlockCopyCopyResourcesHyperlink',
          },
          {
            name: 'BlockCopyCopyResourcesInline',
          },
          {
            name: 'BlockFaqDisclaimerResourcesBlock',
          },
          {
            name: 'BlockFaqDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockFaqDisclaimerResourcesInline',
          },
          {
            name: 'BlockFaqSummaryResourcesBlock',
          },
          {
            name: 'BlockFaqSummaryResourcesHyperlink',
          },
          {
            name: 'BlockFaqSummaryResourcesInline',
          },
          {
            name: 'BlockFooterFooterCopyResourcesBlock',
          },
          {
            name: 'BlockFooterFooterCopyResourcesHyperlink',
          },
          {
            name: 'BlockFooterFooterCopyResourcesInline',
          },
          {
            name: 'BlockFootnoteFootnoteResourcesBlock',
          },
          {
            name: 'BlockFootnoteFootnoteResourcesHyperlink',
          },
          {
            name: 'BlockFootnoteFootnoteResourcesInline',
          },
          {
            name: 'BlockFullImageCopyResourcesBlock',
          },
          {
            name: 'BlockFullImageCopyResourcesHyperlink',
          },
          {
            name: 'BlockFullImageCopyResourcesInline',
          },
          {
            name: 'BlockFullImageDisclaimerResourcesBlock',
          },
          {
            name: 'BlockFullImageDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockFullImageDisclaimerResourcesInline',
          },
          {
            name: 'BlockFullImageFootnoteResourcesBlock',
          },
          {
            name: 'BlockFullImageFootnoteResourcesHyperlink',
          },
          {
            name: 'BlockFullImageFootnoteResourcesInline',
          },
          {
            name: 'BlockHeroWithBackgroundVideoCopyResourcesBlock',
          },
          {
            name: 'BlockHeroWithBackgroundVideoCopyResourcesHyperlink',
          },
          {
            name: 'BlockHeroWithBackgroundVideoCopyResourcesInline',
          },
          {
            name: 'BlockHeroWithBackgroundVideoDisclaimerResourcesBlock',
          },
          {
            name: 'BlockHeroWithBackgroundVideoDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockHeroWithBackgroundVideoDisclaimerResourcesInline',
          },
          {
            name: 'BlockImageAndBannerCopyResourcesBlock',
          },
          {
            name: 'BlockImageAndBannerCopyResourcesHyperlink',
          },
          {
            name: 'BlockImageAndBannerCopyResourcesInline',
          },
          {
            name: 'BlockImageAndBannerDisclaimerResourcesBlock',
          },
          {
            name: 'BlockImageAndBannerDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockImageAndBannerDisclaimerResourcesInline',
          },
          {
            name: 'BlockImageAndBannerImageDisclaimerResourcesBlock',
          },
          {
            name: 'BlockImageAndBannerImageDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockImageAndBannerImageDisclaimerResourcesInline',
          },
          {
            name: 'BlockImageDisclaimerResourcesBlock',
          },
          {
            name: 'BlockImageDisclaimerResourcesHyperlink',
          },
          {
            name: 'BlockImageDisclaimerResourcesInline',
          },
          {
            name: 'BlockImageWithHeadlineHeadlineResourcesBlock',
          },
          {
            name: 'BlockImageWithHeadlineHeadlineResourcesHyperlink',
          },
          {
            name: 'BlockImageWithHeadlineHeadlineResourcesInline',
          },
          {
            name: 'BlockLogosHeadlineResourcesBlock',
          },
          {
            name: 'BlockLogosHeadlineResourcesHyperlink',
          },
          {
            name: 'BlockLogosHeadlineResourcesInline',
          },
          {
            name: 'BlockProviderSearchOfferOfferTermsResourcesBlock',
          },
          {
            name: 'BlockProviderSearchOfferOfferTermsResourcesHyperlink',
          },
          {
            name: 'BlockProviderSearchOfferOfferTermsResourcesInline',
          },
          {
            name: 'BlockSettingsGroupDescriptionResourcesBlock',
          },
          {
            name: 'BlockSettingsGroupDescriptionResourcesHyperlink',
          },
          {
            name: 'BlockSettingsGroupDescriptionResourcesInline',
          },
          {
            name: 'BlockSingleScreenAdditionalCopyResourcesBlock',
          },
          {
            name: 'BlockSingleScreenAdditionalCopyResourcesHyperlink',
          },
          {
            name: 'BlockSingleScreenAdditionalCopyResourcesInline',
          },
          {
            name: 'BlockSingleScreenCopyResourcesBlock',
          },
          {
            name: 'BlockSingleScreenCopyResourcesHyperlink',
          },
          {
            name: 'BlockSingleScreenCopyResourcesInline',
          },
          {
            name: 'BlockTopBottomCopyBottomCopyResourcesBlock',
          },
          {
            name: 'BlockTopBottomCopyBottomCopyResourcesHyperlink',
          },
          {
            name: 'BlockTopBottomCopyBottomCopyResourcesInline',
          },
          {
            name: 'BlockTopBottomCopyTopCopyResourcesBlock',
          },
          {
            name: 'BlockTopBottomCopyTopCopyResourcesHyperlink',
          },
          {
            name: 'BlockTopBottomCopyTopCopyResourcesInline',
          },
          {
            name: 'BrandAbbreviatedImportantSafetyInformationResourcesBlock',
          },
          {
            name: 'BrandAbbreviatedImportantSafetyInformationResourcesHyperlink',
          },
          {
            name: 'BrandAbbreviatedImportantSafetyInformationResourcesInline',
          },
          {
            name: 'BrandConsumerImportantSafetyInformationResourcesBlock',
          },
          {
            name: 'BrandConsumerImportantSafetyInformationResourcesHyperlink',
          },
          {
            name: 'BrandConsumerImportantSafetyInformationResourcesInline',
          },
          {
            name: 'BrandProviderImportantSafetyInformationResourcesBlock',
          },
          {
            name: 'BrandProviderImportantSafetyInformationResourcesHyperlink',
          },
          {
            name: 'BrandProviderImportantSafetyInformationResourcesInline',
          },
          {
            name: 'CarouselCardCarouselHeadlineResourcesBlock',
          },
          {
            name: 'CarouselCardCarouselHeadlineResourcesHyperlink',
          },
          {
            name: 'CarouselCardCarouselHeadlineResourcesInline',
          },
          {
            name: 'CarouselTabbedCarouselTitleResourcesBlock',
          },
          {
            name: 'CarouselTabbedCarouselTitleResourcesHyperlink',
          },
          {
            name: 'CarouselTabbedCarouselTitleResourcesInline',
          },
          {
            name: 'ComposeCardsHeadlineRichTextResourcesBlock',
          },
          {
            name: 'ComposeCardsHeadlineRichTextResourcesHyperlink',
          },
          {
            name: 'ComposeCardsHeadlineRichTextResourcesInline',
          },
          {
            name: 'ElementActionCardHeadlineResourcesBlock',
          },
          {
            name: 'ElementActionCardHeadlineResourcesHyperlink',
          },
          {
            name: 'ElementActionCardHeadlineResourcesInline',
          },
          {
            name: 'ElementActionCardSubheadlineResourcesBlock',
          },
          {
            name: 'ElementActionCardSubheadlineResourcesHyperlink',
          },
          {
            name: 'ElementActionCardSubheadlineResourcesInline',
          },
          {
            name: 'ElementImageCardDisclaimerResourcesBlock',
          },
          {
            name: 'ElementImageCardDisclaimerResourcesHyperlink',
          },
          {
            name: 'ElementImageCardDisclaimerResourcesInline',
          },
          {
            name: 'ElementImageCardTextResourcesBlock',
          },
          {
            name: 'ElementImageCardTextResourcesHyperlink',
          },
          {
            name: 'ElementImageCardTextResourcesInline',
          },
          {
            name: 'ElementImageWithCopyImageCopyResourcesBlock',
          },
          {
            name: 'ElementImageWithCopyImageCopyResourcesHyperlink',
          },
          {
            name: 'ElementImageWithCopyImageCopyResourcesInline',
          },
          {
            name: 'ElementPatientConcernAreaAfterTextResourcesBlock',
          },
          {
            name: 'ElementPatientConcernAreaAfterTextResourcesHyperlink',
          },
          {
            name: 'ElementPatientConcernAreaAfterTextResourcesInline',
          },
          {
            name: 'ElementPatientConcernAreaBeforeTextResourcesBlock',
          },
          {
            name: 'ElementPatientConcernAreaBeforeTextResourcesHyperlink',
          },
          {
            name: 'ElementPatientConcernAreaBeforeTextResourcesInline',
          },
          {
            name: 'ElementPatientPatientDescriptionResourcesBlock',
          },
          {
            name: 'ElementPatientPatientDescriptionResourcesHyperlink',
          },
          {
            name: 'ElementPatientPatientDescriptionResourcesInline',
          },
          {
            name: 'ElementQuestionAndAnswerAnswerResourcesBlock',
          },
          {
            name: 'ElementQuestionAndAnswerAnswerResourcesHyperlink',
          },
          {
            name: 'ElementQuestionAndAnswerAnswerResourcesInline',
          },
          {
            name: 'ElementSettingsDescriptionResourcesBlock',
          },
          {
            name: 'ElementSettingsDescriptionResourcesHyperlink',
          },
          {
            name: 'ElementSettingsDescriptionResourcesInline',
          },
          {
            name: 'ElementSweepstakesFormAgeCheckCopyResourcesBlock',
          },
          {
            name: 'ElementSweepstakesFormAgeCheckCopyResourcesHyperlink',
          },
          {
            name: 'ElementSweepstakesFormAgeCheckCopyResourcesInline',
          },
          {
            name: 'ElementSweepstakesFormCopyResourcesBlock',
          },
          {
            name: 'ElementSweepstakesFormCopyResourcesHyperlink',
          },
          {
            name: 'ElementSweepstakesFormCopyResourcesInline',
          },
          {
            name: 'ElementSweepstakesFormEntryCompletedCopyResourcesBlock',
          },
          {
            name: 'ElementSweepstakesFormEntryCompletedCopyResourcesHyperlink',
          },
          {
            name: 'ElementSweepstakesFormEntryCompletedCopyResourcesInline',
          },
          {
            name: 'ElementSweepstakesFormEntryCompletedFootnoteResourcesBlock',
          },
          {
            name: 'ElementSweepstakesFormEntryCompletedFootnoteResourcesHyperlink',
          },
          {
            name: 'ElementSweepstakesFormEntryCompletedFootnoteResourcesInline',
          },
          {
            name: 'ElementSweepstakesFormFootnoteResourcesBlock',
          },
          {
            name: 'ElementSweepstakesFormFootnoteResourcesHyperlink',
          },
          {
            name: 'ElementSweepstakesFormFootnoteResourcesInline',
          },
          {
            name: 'ElementSweepstakesFormTermsAndConditionsCheckCopyResourcesBlock',
          },
          {
            name: 'ElementSweepstakesFormTermsAndConditionsCheckCopyResourcesHyperlink',
          },
          {
            name: 'ElementSweepstakesFormTermsAndConditionsCheckCopyResourcesInline',
          },
          {
            name: 'IconWithCopyRichCopyResourcesBlock',
          },
          {
            name: 'IconWithCopyRichCopyResourcesHyperlink',
          },
          {
            name: 'IconWithCopyRichCopyResourcesInline',
          },
          {
            name: 'ImageAndTextTextResourcesBlock',
          },
          {
            name: 'ImageAndTextTextResourcesHyperlink',
          },
          {
            name: 'ImageAndTextTextResourcesInline',
          },
          {
            name: 'ImageGridDisclaimerResourcesBlock',
          },
          {
            name: 'ImageGridDisclaimerResourcesHyperlink',
          },
          {
            name: 'ImageGridDisclaimerResourcesInline',
          },
          {
            name: 'ImageWithDisclaimerDisclaimerResourcesBlock',
          },
          {
            name: 'ImageWithDisclaimerDisclaimerResourcesHyperlink',
          },
          {
            name: 'ImageWithDisclaimerDisclaimerResourcesInline',
          },
          {
            name: 'ImportantSafetyInformationTemplateIsiHeaderTemplateResourcesBlock',
          },
          {
            name: 'ImportantSafetyInformationTemplateIsiHeaderTemplateResourcesHyperlink',
          },
          {
            name: 'ImportantSafetyInformationTemplateIsiHeaderTemplateResourcesInline',
          },
          {
            name: 'ImportantSafetyInformationTemplateIsiLinkTemplateResourcesBlock',
          },
          {
            name: 'ImportantSafetyInformationTemplateIsiLinkTemplateResourcesHyperlink',
          },
          {
            name: 'ImportantSafetyInformationTemplateIsiLinkTemplateResourcesInline',
          },
          {
            name: 'JoinBannerCopyResourcesBlock',
          },
          {
            name: 'JoinBannerCopyResourcesHyperlink',
          },
          {
            name: 'JoinBannerCopyResourcesInline',
          },
          {
            name: 'LegalPageCopyResourcesBlock',
          },
          {
            name: 'LegalPageCopyResourcesHyperlink',
          },
          {
            name: 'LegalPageCopyResourcesInline',
          },
          {
            name: 'LinkWithCopyRichCopyResourcesBlock',
          },
          {
            name: 'LinkWithCopyRichCopyResourcesHyperlink',
          },
          {
            name: 'LinkWithCopyRichCopyResourcesInline',
          },
          {
            name: 'ProviderConsultationOfferCtaHeadingResourcesBlock',
          },
          {
            name: 'ProviderConsultationOfferCtaHeadingResourcesHyperlink',
          },
          {
            name: 'ProviderConsultationOfferCtaHeadingResourcesInline',
          },
          {
            name: 'ProviderConsultationOfferOfferTermsResourcesBlock',
          },
          {
            name: 'ProviderConsultationOfferOfferTermsResourcesHyperlink',
          },
          {
            name: 'ProviderConsultationOfferOfferTermsResourcesInline',
          },
          {
            name: 'SplitCopyAndImageCopyResourcesBlock',
          },
          {
            name: 'SplitCopyAndImageCopyResourcesHyperlink',
          },
          {
            name: 'SplitCopyAndImageCopyResourcesInline',
          },
          {
            name: 'SplitCopyAndImageDisclaimerResourcesBlock',
          },
          {
            name: 'SplitCopyAndImageDisclaimerResourcesHyperlink',
          },
          {
            name: 'SplitCopyAndImageDisclaimerResourcesInline',
          },
          {
            name: 'SplitCopyAndImageHeadlineResourcesBlock',
          },
          {
            name: 'SplitCopyAndImageHeadlineResourcesHyperlink',
          },
          {
            name: 'SplitCopyAndImageHeadlineResourcesInline',
          },
          {
            name: 'ValuePropositionBlockHeadlineRichTextResourcesBlock',
          },
          {
            name: 'ValuePropositionBlockHeadlineRichTextResourcesHyperlink',
          },
          {
            name: 'ValuePropositionBlockHeadlineRichTextResourcesInline',
          },
          {
            name: 'ValuePropositionBlockSubheadResourcesBlock',
          },
          {
            name: 'ValuePropositionBlockSubheadResourcesHyperlink',
          },
          {
            name: 'ValuePropositionBlockSubheadResourcesInline',
          },
          {
            name: 'ValuePropositionBoxCopyResourcesBlock',
          },
          {
            name: 'ValuePropositionBoxCopyResourcesHyperlink',
          },
          {
            name: 'ValuePropositionBoxCopyResourcesInline',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'SplitCopyAndImageCta',
        possibleTypes: [
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'StaticCode',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'SplitCopyAndImageDesktopImage',
        possibleTypes: [
          {
            name: 'ImageGrid',
          },
          {
            name: 'ImageWithDisclaimer',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'SplitCopyAndImageMobileImage',
        possibleTypes: [
          {
            name: 'ImageGrid',
          },
          {
            name: 'ImageWithDisclaimer',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'TemplateOptInOfferBlocksItem',
        possibleTypes: [
          {
            name: 'BannerWithCopy',
          },
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockFullImage',
          },
          {
            name: 'BlockHeroWithBackgroundVideo',
          },
          {
            name: 'BlockImageAndBanner',
          },
          {
            name: 'BlockLogos',
          },
          {
            name: 'ValuePropositionBlock',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'TreatmentGuideBlocksItem',
        possibleTypes: [
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockFaq',
          },
          {
            name: 'CarouselTabbedCarousel',
          },
          {
            name: 'SplitCopyAndImage',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ValuePropositionBlockOtherElementsItem',
        possibleTypes: [
          {
            name: 'BlockCopy',
          },
          {
            name: 'BlockFootnote',
          },
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'OfferCtaButton',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: '_Node',
        possibleTypes: [
          {
            name: 'ArticlePage',
          },
          {
            name: 'BannerWithCopy',
          },
          {
            name: 'BeforeAndAfterCarouselItem',
          },
          {
            name: 'BeforeAndAfterImages',
          },
          {
            name: 'BlockActionCardCollection',
          },
          {
            name: 'BlockAnnouncement',
          },
          {
            name: 'BlockAuthenticationFlow',
          },
          {
            name: 'BlockBackgroundImageWithCopy',
          },
          {
            name: 'BlockBeforeAndAfter',
          },
          {
            name: 'BlockClaimConfiguration',
          },
          {
            name: 'BlockConfig',
          },
          {
            name: 'BlockCopy',
          },
          {
            name: 'BlockCtaBanner',
          },
          {
            name: 'BlockFaq',
          },
          {
            name: 'BlockFooter',
          },
          {
            name: 'BlockFootnote',
          },
          {
            name: 'BlockFullImage',
          },
          {
            name: 'BlockHeroWithBackgroundVideo',
          },
          {
            name: 'BlockImage',
          },
          {
            name: 'BlockImageAndBanner',
          },
          {
            name: 'BlockImageWithHeadline',
          },
          {
            name: 'BlockListCollection',
          },
          {
            name: 'BlockLogoHeader',
          },
          {
            name: 'BlockLogos',
          },
          {
            name: 'BlockProviderSearchOffer',
          },
          {
            name: 'BlockSettingsGroup',
          },
          {
            name: 'BlockSimpleHeader',
          },
          {
            name: 'BlockSingleScreen',
          },
          {
            name: 'BlockStickyBottomBanner',
          },
          {
            name: 'BlockTopBottomCopy',
          },
          {
            name: 'BlockVideo',
          },
          {
            name: 'Brand',
          },
          {
            name: 'BusinessLandingPage',
          },
          {
            name: 'ButtonWithIcon',
          },
          {
            name: 'CarouselCardCarousel',
          },
          {
            name: 'CarouselTabbedCarousel',
          },
          {
            name: 'ComposeCards',
          },
          {
            name: 'ComposeOptInOfferLandingPage',
          },
          {
            name: 'ConcernArea',
          },
          {
            name: 'ContentPage',
          },
          {
            name: 'ContentTag',
          },
          {
            name: 'ContentVisual',
          },
          {
            name: 'CtaButton',
          },
          {
            name: 'ElementActionCard',
          },
          {
            name: 'ElementFindASpecialist',
          },
          {
            name: 'ElementImageCard',
          },
          {
            name: 'ElementImageWithCopy',
          },
          {
            name: 'ElementKeyValuePair',
          },
          {
            name: 'ElementLinks',
          },
          {
            name: 'ElementMlrc',
          },
          {
            name: 'ElementPatient',
          },
          {
            name: 'ElementPatientConcernArea',
          },
          {
            name: 'ElementQuestionAndAnswer',
          },
          {
            name: 'ElementRegistrationCta',
          },
          {
            name: 'ElementSettings',
          },
          {
            name: 'ElementSweepstakesForm',
          },
          {
            name: 'ElementTabbedCarouselItem',
          },
          {
            name: 'FadeModal',
          },
          {
            name: 'IconWithCopy',
          },
          {
            name: 'Image',
          },
          {
            name: 'ImageAndText',
          },
          {
            name: 'ImageGrid',
          },
          {
            name: 'ImageWithDisclaimer',
          },
          {
            name: 'ImportantSafetyInformation',
          },
          {
            name: 'ImportantSafetyInformationTemplate',
          },
          {
            name: 'JoinBanner',
          },
          {
            name: 'JsonType',
          },
          {
            name: 'LandingPage',
          },
          {
            name: 'LegalPage',
          },
          {
            name: 'Link',
          },
          {
            name: 'LinkWithCopy',
          },
          {
            name: 'OfferCtaButton',
          },
          {
            name: 'PaymentPlansCta',
          },
          {
            name: 'Product',
          },
          {
            name: 'ProgramPage',
          },
          {
            name: 'ProviderConsultationOffer',
          },
          {
            name: 'ProviderSearchLandingPage',
          },
          {
            name: 'ReferAFriendCta',
          },
          {
            name: 'RolesPermissionsGrid',
          },
          {
            name: 'Route',
          },
          {
            name: 'ShareMessage',
          },
          {
            name: 'SplitCopyAndImage',
          },
          {
            name: 'SplitCopyAndImageTheme',
          },
          {
            name: 'StaticCode',
          },
          {
            name: 'TemplateOptInOffer',
          },
          {
            name: 'ThemeBannerWithCopy',
          },
          {
            name: 'ThemeBeforeAndAfter',
          },
          {
            name: 'ThemeBlockVideo',
          },
          {
            name: 'ThemeClaimConfiguration',
          },
          {
            name: 'ThemeFullImage',
          },
          {
            name: 'ThemeHeroWithBackgroundVideo',
          },
          {
            name: 'ThemeImageAndBanner',
          },
          {
            name: 'ThemeImageWithHeadline',
          },
          {
            name: 'ThemeLogoHeader',
          },
          {
            name: 'ThemeLogos',
          },
          {
            name: 'ThemeSweepstakesForm',
          },
          {
            name: 'TreatmentGuide',
          },
          {
            name: 'UserJourney',
          },
          {
            name: 'ValuePropositionBlock',
          },
          {
            name: 'ValuePropositionBox',
          },
          {
            name: 'ValuePropositionTheme',
          },
          {
            name: 'VersionControl',
          },
          {
            name: 'Video',
          },
        ],
      },
    ],
  },
};
export default result;
