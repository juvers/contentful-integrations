const helpText = require('../constants/helpText');
module.exports = function (migration) {
  const video = migration.editContentType('video');
  const blockVideo = migration.editContentType('blockVideo');
  const heroVideo = migration.editContentType('blockHeroWithBackgroundVideo');

  // Video
  video.editField('playAudio').name('Play Audio DEPRECATED').required(false);
  video
    .editField('showControls')
    .name('Show Controls DEPRECATED')
    .required(false);

  // Block Video
  blockVideo
    .createField('showControls')
    .name('Show Controls')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  blockVideo
    .createField('playAudio')
    .name('Play Audio')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  blockVideo
    .createField('loop')
    .name('Loop')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  // Block > Hero With Background Video
  heroVideo
    .editField('backgroundVideo')
    .name('Background Video DEPRECATED')
    .required(false);
  heroVideo
    .editField('mobileBackgroundVideo')
    .name('Mobile Background Video DEPRECATED');
  heroVideo.editField('cta').name('CTA(s)').required(false);

  heroVideo
    .createField('desktopVideo')
    .name('Background Video')
    .type('Link')
    .localized(false)
    .required(true)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['video'],
      },
    ]);

  heroVideo.changeFieldControl('desktopVideo', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: true,
    helpText: helpText.videoSize.default,
  });
  heroVideo
    .createField('mobileVideo')
    .name('Mobile Background Video')
    .type('Link')
    .localized(false)
    .required(false)
    .disabled(false)
    .omitted(false)
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['video'],
      },
    ]);
  heroVideo.changeFieldControl('mobileVideo', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: true,
    helpText: helpText.videoSize.default,
  });

  heroVideo
    .createField('showControls')
    .name('Show Controls')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  heroVideo
    .createField('playAudio')
    .name('Play Audio')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': false });

  heroVideo
    .createField('loop')
    .name('Loop')
    .type('Boolean')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .defaultValue({ 'en-US': true });

  // Moving fields
  heroVideo.moveField('desktopVideo').afterField('internalName');
  heroVideo.moveField('mobileVideo').afterField('desktopVideo');

  heroVideo.moveField('showControls').afterField('mobileVideo');
  heroVideo.moveField('playAudio').afterField('showControls');
  heroVideo.moveField('loop').afterField('playAudio');

  heroVideo.moveField('backgroundVideo').afterField('theme');
  heroVideo.moveField('mobileBackgroundVideo').afterField('backgroundVideo');

  // Filling fields for existing entries
  migration.transformEntries({
    contentType: 'blockVideo',
    from: ['internalName'],
    to: ['showControls', 'playAudio', 'loop'],
    transformEntryForLocale: async function (_, currentLocale) {
      if (currentLocale === 'de-DE') return;

      return { showControls: true, playAudio: true, loop: false };
    },
  });
};
