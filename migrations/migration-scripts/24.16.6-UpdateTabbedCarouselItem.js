module.exports = function (migration) {
  const tabbedCarouselItem = migration.editContentType('elementTabbedCarouselItem');

  tabbedCarouselItem.changeFieldControl('block', 'builtin', 'entryLinkEditor', {
    helpText: "Any field(s) on the Block that show or hide the block (such as 'Show To User' or 'Show To Screens') will be ignored.",
  });
};
