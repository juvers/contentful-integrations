/**
 * Strings to support RegEx validation in Contentful migration scripts
 * @property { object } customUrl - Url validation config, needed over Contentful default url validation
 * @property { string } customUrl.regexp.pattern - match a relative url or absoulute url with https:// protocol
 * @property { object } customUrl.message - validation messages for customUrl
 */
module.exports = {
  abbreviatedIsiOptions: {
    abbreviatedISIContentTypes: { in: ['Full', 'Abbreviated'] },
  },
  articleBlocks: {
    linkContentType: [
      'blockBeforeAndAfter',
      'blockCopy',
      'blockCtaBanner',
      'blockFAQ',
      'blockFootnote',
      'blockImage',
      'blockVideo',
      'joinBanner',
    ],
  },
  authenticationSuccess: {
    default: ['Sweepstakes'],
  },
  authenticationCtaDestinations: {
    default: ['Registration', 'Login'],
  },
  buttonIconOptions: {
    // please keep in alphabetical order, these should match name of icons in alle design library
    in: ['ChevronRight', 'SearchOutline'],
  },
  camelCased: {
    regexp: {
      pattern: '^[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?',
      flags: null,
    },
    message: 'Must be camelCased',
  },
  customUrl: {
    regexp: {
      pattern:
        '^((https):\\/\\/((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3})))(\\:\\d+)?(\\/[-a-z\\d%_.~+*]*)*|^\\/[-a-z\\d%_.~+]*',
      flags: null,
    },
    message:
      'URLs must start with either “https://” or “/” (for links within alle.com)',
  },
  customUrlWithJumpLink: {
    regexp: {
      pattern:
        '^((https):\\/\\/((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3})))(\\:\\d+)?(\\/[-a-z\\d%_.~+*]*)*|^\\/[-a-z\\d%_.~+]*|^#[-a-z\\d%_.~+]*',
      flags: null,
    },
    message:
      'URLs must start with either "#", “https://”, or “/” (for links within alle.com)',
  },
  entryHyperlinkTypeLink: {
    nodes: {
      'entry-hyperlink': [
        {
          linkContentType: ['link'],
          message: null,
        },
      ],
    },
  },
  externalUrl: {
    regexp: {
      pattern: '^https:\\/\\/',
      flags: null,
    },
    message: 'URLs must start with “https://”',
  },
  fonts: {
    brandedHeader: {
      in: [
        'Avenir Next',
        'LL Brown',
        'Neue Helvetica',
        'Stanley Regular',
        'Suisse INTL',
        'Teodor Regular',
      ],
    },
  },
  landingPageBlocks: {
    linkContentType: [
      'bannerWithCopy',
      'blockFullImage',
      'blockImageAndBanner',
      'blockBeforeAndAfter',
      'valuePropositionBlock',
      'blockHeroWithBackgroundVideo',
      'blockLogos',
      'blockVideo',
    ],
  },
  landingPageButtons: {
    linkContentType: [
      'buttonWithIcon',
      'ctaButton',
      'elementFindASpecialist',
      'elementRegistrationCTA',
      'offerCTAButton',
    ],
  },
  landingPageButtonsWithSweeps: {
    linkContentType: [
      'buttonWithIcon',
      'ctaButton',
      'elementFindASpecialist',
      'elementRegistrationCTA',
      'offerCTAButton',
      'elementSweepstakesForm',
    ],
  },
  opacityColor: {
    regexp: {
      pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$',
      flags: null,
    },
    message:
      'Must start with # followed by a 6 or 8 digit hexadecimal color value (Ex: #FFFF00 #66FFFF00)',
  },
  pageTypeOptions: {
    landingPage: { in: ['Default', 'Sweepstakes', 'Tentpole'] },
  },
  richTextBoldUnderlineItalic: {
    enabledMarks: ['bold', 'underline', 'italic'],
    message: 'Only bold, underline, and italic marks are allowed',
  },
  richTextBoldUnderlineItalicStrikethrough: {
    enabledMarks: ['bold', 'underline', 'italic', 'strikethrough'],
    message: 'Only bold, underline, italic and strikethrough marks are allowed',
  },
  richTextBoldUnderlineItalicSuperscript: {
    enabledMarks: ['bold', 'underline', 'italic', 'superscript'],
    message: 'Only bold, underline, italic and superscript marks are allowed',
  },
  richTextHeadersLinksLists: {
    enabledNodeTypes: [
      'heading-1',
      'heading-2',
      'heading-3',
      'hyperlink',
      'entry-hyperlink',
      'ordered-list',
      'unordered-list',
    ],
    message:
      'Only headings 1-3, link to url, link to entry type Link are allowed, and lists are allowed',
  },
  richTextHeadersAndLinks: {
    enabledNodeTypes: [
      'heading-1',
      'heading-2',
      'heading-3',
      'hyperlink',
      'entry-hyperlink',
    ],
    message:
      'Only headings 1-3, link to url, and link to entry type Link are allowed',
  },
  richTextSubHeadersWithLinks: {
    enabledNodeTypes: [
      'heading-2',
      'heading-3',
      'hyperlink',
      'entry-hyperlink',
    ],
    message:
      'Only headings 2 and 3, link to url, and link to entry type Link are allowed',
  },
  richTextLinks: {
    enabledNodeTypes: ['hyperlink', 'entry-hyperlink'],
    message: 'Only link to url, and link to entry type Link are allowed',
  },
  richTextListsTableLinks: {
    enabledNodeTypes: [
      'ordered-list',
      'unordered-list',
      'table',
      'hyperlink',
      'entry-hyperlink',
    ],
    message:
      'Only ordered list, unordered list, table, link to url, and link to entry type Link are allowed',
  },
  richTextListsTablesLinksHeadingsStyles: {
    enabledNodeTypes: [
      'heading-1',
      'heading-2',
      'heading-3',
      'ordered-list',
      'unordered-list',
      'table',
      'hyperlink',
      'entry-hyperlink',
    ],
    message:
      'Only ordered list, unordered list, table, headings, link to url, and link to entry type Link are allowed',
  },
  showTo: {
    default: ['All', 'Logged In', 'Logged Out'],
    screens: ['All', 'Mobile Only', 'Desktop Only'],
    offerStatus: ['Active', 'Not Active', 'Sold Out'],
  },
  slug: {
    regexp: {
      pattern: '^(?:[a-z0-9]+(_|-))*[a-z0-9]+$',
      flags: null,
    },
    message:
      'Slug must only contain alpha numeric characters separated by hyphen(-) or underscore(_)',
  },
  solidColor: {
    regexp: {
      pattern: '^#([A-Fa-f0-9]{6})$',
      flags: null,
    },
    message:
      'Must start with # followed by a 6 digit hexadecimal color value (Ex: #FFFF00)',
  },
  mobileIcon: {
    in: [
      "AListIcon",
      "AddIcon",
      "AddIcon2",
      "AddPersonIcon",
      "AlertIcon",
      "AlertOutlineIcon",
      "AlleLogoIcon",
      "AndroidFaceRecognitionIcon",
      "AndroidFaceRecognitionSmallIcon",
      "AndroidFingerprintSmallIcon",
      "ArrowBackIcon",
      "ArrowIcon",
      "ArrowRight",
      "BroadcastIcon",
      "CalendarIcon",
      "CalendarOutlineIcon",
      "CashIcon",
      "ChatIcon",
      "CheckIcon",
      "ChevronRight",
      "CircleCheckIcon",
      "CircleCheckIconWithRadius",
      "CloseIcon",
      "CoinIcon",
      "ContactInfoPhoneIcon",
      "CopyIcon",
      "CopyIcon2",
      "CurrentLocation",
      "DefaultAvatar",
      "DirectionsIcon",
      "DirectionsOutlineIcon",
      "DiscoverIcon",
      "DollarIcon",
      "EllipsisIcon",
      "EmailIcon",
      "ErrorInfoIcon",
      "ErrorWarningIcon",
      "ExchangeIcon",
      "FaceIdIcon",
      "FaceIdSmall",
      "FacebookIcon",
      "FilterIcon",
      "FingerprintAndroidIcon",
      "FlashIcon",
      "FlashIconCircle",
      "FlashRewardsIcon",
      "GiftIcon",
      "HomeIcon",
      "HourGlassIcon",
      "ILLO15",
      "ILLO16",
      "ILLO18",
      "InfoIcon",
      "InstagramIcon",
      "LeftArrowIcon",
      "LimitsIcon",
      "LinkChevronIcon",
      "LinkIcon",
      "ListViewOutlineIcon",
      "LocationIcon",
      "LockIcon",
      "MagnifyingGlassIcon",
      "MapMarkerSelected",
      "MapMarkerUnselected",
      "MenuIcon",
      "MessageIcon",
      "MoreToComeIcon",
      "NextCardIconLeft",
      "NextCardIconRight",
      "OfferPlaceholder",
      "OpenUrlIcon",
      "OurBrandsIcon",
      "PapersIcon",
      "PerkAlistCheckIcon",
      "PerkCheckIcon",
      "PerkLockIcon",
      "PhoneIcon",
      "PhoneIconOutline",
      "PlaceIcon",
      "PlasticSurgery",
      "PlusIcon",
      "ProfileIcon",
      "PromotionIcon",
      "QRCodeIcon",
      "ReferAFriendIcon",
      "RightArrowIcon",
      "RightChevron",
      "RightChevronSkinny",
      "SearchIcon",
      "ShareIcon",
      "SortDescIcon",
      "SquareSearchButton",
      "StarsIcon",
      "SuccessIcon",
      "SupportIcon",
      "SyringeIcon",
      "SystemErrorIcon",
      "TikTokIcon",
      "TouchIDIcon",
      "TouchIdSmall",
      "TrashCanIcon2",
      "TrashcanIcon",
      "TreatmentHistoryEmptyPlaceholder",
      "VerticalLineSeparator",
      "WalletIcon",
      "WebsiteIcon"
    ]
  }
};
