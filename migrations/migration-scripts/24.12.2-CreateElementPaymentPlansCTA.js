module.exports = function (migration) {
  const PaymentPlansCTA = migration
    .createContentType('paymentPlansCTA')
    .name('Element > Payment Plans (CTA)')
    .description('Payment Plans (CTA)')
    .displayField('internalName');

  PaymentPlansCTA.createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Application Not Started
  PaymentPlansCTA.createField('notStartedTitle')
    .name('Title (Application NOT Started)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  PaymentPlansCTA.createField('notStartedSubtitle')
    .name('Subtitle (Application NOT Started)')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  PaymentPlansCTA.createField('notStartedButtonCopy')
    .name('Button Copy (Application NOT Started)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Application Started
  PaymentPlansCTA.createField('inProgressTitle')
    .name('Title (Application Started)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  PaymentPlansCTA.createField('inProgressSubtitle')
    .name('Subtitle (Application Started)')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  PaymentPlansCTA.createField('inProgressButtonCopy')
    .name('Button Copy (Application Started)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Application Completed
  PaymentPlansCTA.createField('hasApplicationTitle')
    .name('Title (Application Submitted)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  PaymentPlansCTA.createField('hasApplicationSubtitle')
    .name('Subtitle (Application Submitted)')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  PaymentPlansCTA.createField('hasApplicationButtonCopy')
    .name('Button Copy (Application Submitted)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
};