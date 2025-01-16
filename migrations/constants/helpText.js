/**
 * Strings to support standardized help text across migration scripts
 * @property { object } urlFormatting - Help text for url fields
 */
module.exports = {
  contentBlocks: 'Controls the order and display of page blocks.',
  fonts: {
    brandedHeader:
      'Avenir Next (brand: Coolsculpting), LL Brown (brand: Botox), Neue Helvetica (brand: Juvederm), Suisse INTL (brand: Juvederm), Stanley Regular (brand: Skinmedica), Teodor Regular (brand: Botox)',
  },
  forceOpenSameTab: {
    default:
      'This field is used to determine whether to allow an external URL (non-Alle URL) to open in the same tab on browser.',
  },
  hexColor: {
    sixDigit:
      'Enter a # followed by a 6 digit hexadecimal color value (Ex. #FFFF00). Please ensure Accessibility guidelines are met.',
    eightDigit:
      'Enter # followed by a 6 or 8 digit hexadecimal color value (Ex: #FFFF00 #66FFFF00). Please ensure Accessibility guidelines are met.',
  },
  imageCopyBrandLogos: {
    default:
      'For Botox include “Please see the full Product Information including Boxed Warning and Medication Guide” line with links to PI and Med Guide. For Botox, Kybella, and Latisse include “BY PRESCRIPTION ONLY"',
  },
  internalName: 'Used within Contentful for display and search.',
  largerLogo: {
    default: 'Larger logo centered.',
  },
  richTextHeadersAndLinks: {
    default:
      'Only headings 1-3, link to url, and link to entry type Link are allowed',
  },
  smallerLogo: {
    default: 'Smaller logo appearing at the top left of hero.',
  },
  urlFindASpecialist: {
    default:
      'URL entered should go to a Brand Find a Specialist Page, such as https://www.botoxcosmetic.com/find-a-botox-cosmetic-specialist.',
  },
  urlFormatting: {
    default:
      'To open in the same tab within alle.com, use /<path> (Ex: /registration). To open in a new tab or outside of alle.com, use https://<url> (Ex: https://www.botox.com).',
    redirect:
      'A redirect will send any traffic to this page to the desired URL. For an Alle page, use /<path> (Ex: /registration), and for pages outside of Alle.com, use https://<url> (Ex: https://www.botox.com).',
    withJumpLink:
      'To open in the same tab within alle.com, use / (Ex: /registration). To open in a new tab or outside of alle.com, use https:// (Ex: https://www.botox.com). If enabled, use # to jump to a link within the same page (Ex: #botox).',
  },
  videoHeight: {
    default:
      'Full Height means the entire height of the component (usually about 75vh) and Half Height (usally about 25vh)',
  },
  videoSize: {
    default:
      'Be sure to optimize your video to reduce file size. Recommended dimensions: Full - 16 x 9 aspect ratio; half - 16 x 4&1/2',
  },
  videoControl: {
    showControls: 'Video will autoplay if controls are not shown.',
    playAudio: 'Controls must be shown for audio to play by default.',
  },
};
