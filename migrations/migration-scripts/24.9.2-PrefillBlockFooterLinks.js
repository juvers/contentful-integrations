module.exports = async function (migration, { makeRequest }) {
  const linksStaticCodeToAdd = [
    {
      type: 'link',
      internalName: 'Contact Us (to Alle Support)',
      displayName: 'Contact Us',
      url: 'https://support.alle.com/hc/en-us',
    },
    {
      type: 'link',
      internalName: 'Search Providers (to Alle browse providers)',
      displayName: 'Search Providers',
      url: '/browse',
    },
    {
      type: 'link',
      internalName: 'Alle Terms and Conditions',
      displayName: 'Alle Terms and Conditions',
      url: '/terms-and-conditions',
    },
    {
      type: 'link',
      internalName: 'Terms of Use (to Abbvie)',
      displayName: 'Terms of Use',
      url: 'https://www.abbvie.com/terms-of-use.html',
    },
    {
      type: 'link',
      internalName: 'Privacy Notice (to Abbvie)',
      displayName: 'Privacy Notice',
      url: 'https://privacy.abbvie/privacy-policies/us-privacy-policy.html',
    },
    {
      type: 'staticCode',
      internalName: 'Privacy Choices Link',
      codeId: 'privacyChoicesLink',
      description:
        'When logged in, takes user to their privacy settings, when logged out shows modal with some privacy links',
    },
    {
      type: 'link',
      internalName: 'Consumer Health Data Privacy Notice (to Abbvie)',
      displayName: 'Consumer Health Data Privacy Notice',
      url: 'https://privacy.abbvie/privacy-policies/us-privacy-policy.html#h19',
    },
    {
      type: 'staticCode',
      internalName: 'Cookie Settings Link',
      codeId: 'cookieSettingsLink',
      description: 'Opens OneTrust modal, hidden when logged in',
    },
    {
      type: 'link',
      internalName: 'Accessability Statement (to Abbvie)',
      displayName: 'Accessability Statement',
      url: 'https://www.abbvie.com/accessibility-statement.html',
    },
  ];

  const urlsToAdd = linksStaticCodeToAdd
    .filter((entry) => entry.url)
    .reduce((urls, link) => {
      urls.push(link.url);
      return urls;
    }, []);

  const entriesToAdd = [];

  const createAndPublishEntry = async (contentType, fields) => {
    // create entry
    const newEntry = await makeRequest({
      method: 'POST',
      url: '/entries',
      headers: {
        'X-Contentful-Content-Type': contentType,
      },
      data: {
        fields,
      },
    });

    // add to reference later
    entriesToAdd.push(newEntry);

    // publish entry
    await makeRequest({
      method: 'PUT',
      url: `/entries/${newEntry.sys.id}/published`,
      headers: {
        'X-Contentful-Version': newEntry.sys.version,
      },
    }).catch((e) => {
      console.error(e);
    });
  };

  // adding links
  // get link entries that have the urls we want to add
  const linkEntries = await makeRequest({
    method: 'GET',
    url: `/entries?content_type=link&fields.url[in]=${urlsToAdd.toString()}`,
  });

  for (const link of linksStaticCodeToAdd) {
    if (link.type === 'link') {
      const linkAlreadyExists = linkEntries.items.find((entryLink) => {
        const isPublished =
          !!entryLink.sys.publishedVersion &&
          entryLink.sys.version == entryLink.sys.publishedVersion + 1;

        if (
          isPublished &&
          entryLink.fields.url['en-US'] === link.url &&
          entryLink.fields.displayName['en-US'] === link.displayName
        ) {
          return entryLink;
        }
        return undefined;
      });

      if (linkAlreadyExists) {
        // add to reference later
        entriesToAdd.push(linkAlreadyExists);
      } else {
        await createAndPublishEntry(link.type, {
          internalName: {
            'en-US': link.internalName,
          },
          displayName: {
            'en-US': link.displayName,
          },
          url: {
            'en-US': link.url,
          },
          forceOpenSameTab: {
            'en-US': link.forceOpenSameTab ?? false,
          },
        });
      }
    } else {
      // adding the static code entries (none of these entries should exist and if they do we will get an error on attempt to publish)
      await createAndPublishEntry(link.type, {
        internalName: {
          'en-US': link.internalName,
        },
        codeId: {
          'en-US': link.codeId,
        },
        description: {
          'en-US': link.description,
        },
      });
    }
  }

  // create the references needed for Block > Footer link(s) fie
  const referenceToEntries = entriesToAdd.map((entry) => ({
    sys: { type: 'Link', linkType: 'Entry', id: entry.sys.id },
  }));

  // add entries as link field on Block > Footer
  migration.transformEntries({
    contentType: 'blockFooter',
    from: [],
    to: ['links'],
    transformEntryForLocale: async function () {
      return { links: referenceToEntries };
    },
  });

  // Add help text to indicate which entries of 'Static Code' are supported here
  const footer = migration.editContentType('blockFooter');
  footer.changeFieldControl('links', 'builtin', 'entryLinksEditor', {
    helpText:
      'Supports Static Code with codeIds: cookieSettingsLink, privacyChoicesLink',
  });
};
