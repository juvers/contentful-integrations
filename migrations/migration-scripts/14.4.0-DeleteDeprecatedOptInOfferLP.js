module.exports = async function (migration, { makeRequest }) {
  const response = await makeRequest({
    method: 'GET',
    url: `/entries?content_type=optInOfferLandingPage`,
  });

  for (const entry of response.items) {
    const isPublished =
      !!entry.sys.publishedVersion &&
      entry.sys.version == entry.sys.publishedVersion + 1;

    if (isPublished) {
      await makeRequest({
        method: 'DELETE',
        url: `/entries/${entry.sys.id}/published`,
      });
    }

    await makeRequest({
      method: 'DELETE',
      url: `/entries/${entry.sys.id}`,
    });
  }

  migration.deleteContentType('optInOfferLandingPage');
};
