module.exports = function (migration) {
  const providerConsultationOffer = migration.editContentType(
    'providerConsultationOffer'
  );

  providerConsultationOffer.resetFieldControl('ctaHeading');
  providerConsultationOffer.editField('ctaBannerSmall').required(false);
  providerConsultationOffer.editField('ctaBannerLarge').required(false);
  providerConsultationOffer.editField('modalBanner').required(false);
};
