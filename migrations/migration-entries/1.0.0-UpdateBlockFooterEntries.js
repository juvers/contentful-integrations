module.exports = async function (migration, { makeRequest }) {
  // gather/create all links and static code that need to be referenced (similar to 24.9.2)
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
      internalName: 'Cookie Settings Link',
      codeId: 'cookieSettingsLink',
      description: 'Opens OneTrust modal, hidden when logged in',
    },
    {
      type: 'link',
      internalName: 'Consumer Health Data Privacy Notice (to Abbvie)',
      displayName: 'Consumer Health Data Privacy Notice',
      url: 'https://privacy.abbvie/privacy-policies/us-privacy-policy.html#h19',
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
      internalName: 'Accessibility Statement (to Abbvie)',
      displayName: 'Accessibility Statement',
      url: 'https://www.abbvie.com/accessibility-statement.html',
    },
  ];

  const linkDisplayNames = linksStaticCodeToAdd.reduce((displayNames, link) => {
    if (link.displayName) {
      displayNames.push(link.displayName);
    }
    return displayNames;
  }, []);

  const staticCodeIdsToAdd = linksStaticCodeToAdd.reduce(
    (staticCodeIds, link) => {
      if (link.codeId) {
        staticCodeIds.push(link.codeId);
      }
      return staticCodeIds;
    },
    []
  );

  const isPublished = (entry) => {
    return (
      !!entry.sys.publishedVersion &&
      entry.sys.version == entry.sys.publishedVersion + 1
    );
  };

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

  // adding links
  // get link entries that have the urls/display name we want to add
  const linkEntries = await makeRequest({
    method: 'GET',
    url: `/entries?content_type=link&fields.displayName[in]=${linkDisplayNames.toString()}`,
  });

  // get static sode entries that already exist for what we want to add
  const staticCodeEntries = await makeRequest({
    method: 'GET',
    url: `/entries?content_type=staticCode&fields.codeId[in]=${staticCodeIdsToAdd.toString()}`,
  });

  const linkEntriesToReference = [];

  for (const link of linksStaticCodeToAdd) {
    if (link.type === 'link') {
      const linkAlreadyExists = linkEntries.items.find((entry) => {
        if (
          isPublished(entry) &&
          entry.fields.url['en-US'] === link.url &&
          entry.fields.displayName['en-US'] === link.displayName
        ) {
          return entry;
        }
      });

      if (linkAlreadyExists) {
        // add to reference later
        linkEntriesToReference.push(linkAlreadyExists);
      } else {
        const entryAdded = await createAndPublishEntry(link.type, {
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
        linkEntriesToReference && linkEntriesToReference.push(entryAdded);
      }
    } else if (link.type === 'staticCode') {
      const staticCodeAlreadyExists = staticCodeEntries.items.find((entry) => {
        if (
          isPublished(entry) &&
          entry.fields.codeId['en-US'] === link.codeId
        ) {
          return entry;
        }
        return undefined;
      });

      if (staticCodeAlreadyExists) {
        // add to reference later
        linkEntriesToReference.push(staticCodeAlreadyExists);
      } else {
        const entryAdded = await createAndPublishEntry(link.type, {
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
        linkEntriesToReference && linkEntriesToReference.push(entryAdded);
      }
    }
  }

  // create an entry of Element > Links to reference in the footer
  const referenceToLinkEntries = linkEntriesToReference.map((entry) => ({
    sys: { type: 'Link', linkType: 'Entry', id: entry.sys.id },
  }));

  const elementLinksEntry = await createAndPublishEntry('elementLinks', {
    internalName: {
      'en-US': 'Default Consumer Footer Links',
    },
    links: {
      'en-US': referenceToLinkEntries,
    },
  });

  // for each footer entry, fill in the linksReference field with this Element > Link(s) entry
  migration.transformEntries({
    contentType: 'blockFooter',
    from: [],
    to: ['linksReference'],
    transformEntryForLocale: async function () {
      return {
        linksReference: [
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: elementLinksEntry.sys.id,
            },
          },
        ],
      };
    },
  });
};
