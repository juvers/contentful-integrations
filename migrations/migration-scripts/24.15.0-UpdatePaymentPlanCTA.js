const { richTextBoldUnderlineItalicStrikethrough } = require('../constants/validation');

module.exports = function (migration) {
  const paymentPlansCTA = migration.editContentType('paymentPlansCTA');

  // Logged Out
  paymentPlansCTA.createField('loggedOutTitle')
    .name('Title (Logged Out)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  paymentPlansCTA.createField('loggedOutSubtitle')
    .name('Subtitle (Logged Out)')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  paymentPlansCTA.createField('loggedOutButtonCopy')
    .name('Button Copy (Logged Out)')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  // Grouping
  const paymentPlansCTALayout = paymentPlansCTA.createEditorLayout();
  
  // Not Started
  paymentPlansCTALayout.createFieldGroup('notStarted').name('Application Not Started');
  paymentPlansCTALayout.moveField('notStartedTitle').toTheTopOfFieldGroup('notStarted');
  paymentPlansCTALayout.moveField('notStartedSubtitle').toTheTopOfFieldGroup('notStarted');
  paymentPlansCTALayout.moveField('notStartedButtonCopy').toTheTopOfFieldGroup('notStarted');

  // In Progress
  paymentPlansCTALayout.createFieldGroup('inProgress').name('Application In Progress');
  paymentPlansCTALayout.moveField('inProgressTitle').toTheTopOfFieldGroup('inProgress');
  paymentPlansCTALayout.moveField('inProgressSubtitle').toTheTopOfFieldGroup('inProgress');
  paymentPlansCTALayout.moveField('inProgressButtonCopy').toTheTopOfFieldGroup('inProgress');
  
  // Has Application
  paymentPlansCTALayout.createFieldGroup('hasApplication').name('Has Application');
  paymentPlansCTALayout.moveField('hasApplicationTitle').toTheTopOfFieldGroup('hasApplication');
  paymentPlansCTALayout.moveField('hasApplicationSubtitle').toTheTopOfFieldGroup('hasApplication');
  paymentPlansCTALayout.moveField('hasApplicationButtonCopy').toTheTopOfFieldGroup('hasApplication');

  // Logged Out
  paymentPlansCTALayout.createFieldGroup('loggedOut').name('User is Logged Out');
  paymentPlansCTALayout.moveField('loggedOutTitle').toTheTopOfFieldGroup('loggedOut');
  paymentPlansCTALayout.moveField('loggedOutSubtitle').toTheTopOfFieldGroup('loggedOut');
  paymentPlansCTALayout.moveField('loggedOutButtonCopy').toTheTopOfFieldGroup('loggedOut');
  

  // Cleanup
  const linkWithCopy = migration.editContentType('linkWithCopy');

  linkWithCopy.editField('richCopy').validations([
    richTextBoldUnderlineItalicStrikethrough,
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3'
      ],
      message:
        'Only headings are allowed',
    }
  ]);

  const iconWithCopy = migration.editContentType('iconWithCopy');

  iconWithCopy.editField('richCopy').validations([
    richTextBoldUnderlineItalicStrikethrough,
    {
      enabledNodeTypes: [
        'heading-1',
        'heading-2',
        'heading-3'
      ],
      message:
        'Only headings are allowed',
    }
  ]);

};
