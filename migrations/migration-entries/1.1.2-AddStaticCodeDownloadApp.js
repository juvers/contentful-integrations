module.exports = async function (migration, { makeRequest }) {
  const newEntry = await makeRequest({
    method: 'POST',
    url: '/entries',
    headers: {
      'X-Contentful-Content-Type': 'staticCode',
    },
    data: {
      fields: {
        internalName: {
          'en-US': 'Download Alle App Buttons',
        },
        codeId: {
          'en-US': 'downloadAlleAppButtons',
        },
        description: {
          'en-US':
            'Displays the buttons to download the Alle IOS or Android app',
        },
      },
    },
  });

  // publish entry
  return await makeRequest({
    method: 'PUT',
    url: `/entries/${newEntry.sys.id}/published`,
    headers: {
      'X-Contentful-Version': newEntry.sys.version,
    },
  }).catch((e) => {
    console.error(e);
  });
};
