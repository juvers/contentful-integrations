import { Environment, Entry } from 'contentful-management/types';
import { createClient } from 'contentful-management';
import { runMigration } from 'contentful-migration';
import { findSemVerFile } from './utils';

/**
 * Returns the current version as string and the Entry object related to the version.
 * Creates a new version contentType if the one specified by the versionContentTypeId param doesn't exists
 * @param environment
 * @param versionContentTypeId
 * @param locale
 * @param migrationType ("contentType"|"entry")
 */
export const findCurrentVersion = async (
  environment: Environment,
  versionContentTypeId: string,
  locale: string,
  migrationType: string
): Promise<any> => {
  try {
    await environment.getContentType(versionContentTypeId);
  } catch {
    const versionContentType = await environment.createContentTypeWithId(
      versionContentTypeId,
      {
        name: versionContentTypeId,
        displayField: 'version',
        fields: [
          {
            id: 'version',
            name: 'version',
            required: true,
            localized: false,
            type: 'Symbol',
            validations: [
              {
                unique: true,
              },
            ],
          },
          {
            id: 'entriesVersion',
            name: 'entriesVersion',
            required: true,
            localized: false,
            type: 'Symbol',
            validations: [
              {
                unique: true,
              },
            ],
          },
        ],
      }
    );
    await versionContentType.publish();
  }
  const { items: versionItems } = await environment.getEntries({
    content_type: versionContentTypeId,
  });

  let [versionEntry] = versionItems;

  if (versionItems.length === 0) {
    const newVersionEntry = await environment.createEntry(
      versionContentTypeId,
      {
        fields: {
          version: {
            'en-US': '0.0.0',
          },
          entriesVersion: {
            'en-US': '0.0.0',
          },
        },
      }
    );
    await newVersionEntry.publish();
    versionEntry = await environment.getEntry(newVersionEntry.sys.id);
  }

  if (versionItems.length > 1) {
    throw new Error(`There should only be one entry for versioning"`);
  }

  const versionField: string =
    migrationType == 'entry' ? 'entriesVersion' : 'version';

  const currentVersion: string =
    versionItems.length === 0
      ? '0.0.0'
      : versionItems[0].fields[versionField][locale];

  return { currentVersion, versionEntry };
};

/**
 * Runs a set of migration scripts
 * and updates the space version
 * @param migrationsToRun
 * @param migrationsDir
 * @param migrationsOptions
 * @param versionEntry
 * @param locale
 * @param migrationType ("contentType"|"entry")
 */
export const runMigrations = async (
  migrationsToRun: string[],
  migrationsDir: string,
  migrationsOptions: any,
  versionEntry: Entry,
  locale: string,
  migrationType: string
): Promise<void> => {
  for (const migrationVersion of migrationsToRun) {
    const simplifiedMigrationVersion = migrationVersion
      .replace(/\.0$/, '')
      .replace(/\.0$/, '');
    const fileName = await findSemVerFile(
      migrationsDir,
      simplifiedMigrationVersion
    );
    const migrationFile = `${migrationsDir}/${fileName}`;

    console.log(`Version ${migrationVersion} - file ${migrationFile}...`);
    await runMigration({
      ...migrationsOptions,
      ...{ filePath: migrationFile },
    });

    const versionField: string =
      migrationType == 'entry' ? 'entriesVersion' : 'version';

    // Update Version
    versionEntry.fields[versionField][locale] = migrationVersion;
    versionEntry = await versionEntry.update();
    versionEntry = await versionEntry.publish();
  }
};

/**
 * Creates an Environment in Contentful
 *
 * @param managementKey
 * @param spaceId
 * @param environmentId
 */
export const createEnvironment = async (
  managementKey: string,
  spaceId: string,
  environmentId: string,
  sourceEnvironmentId: string
): Promise<Environment> => {
  const client = createClient({ accessToken: managementKey });
  const space = await client.getSpace(spaceId);
  try {
    return await space.getEnvironment(environmentId);
  } catch {
    console.log(`Creating Env: ${environmentId}`);
    return await space.createEnvironmentWithId(
      environmentId,
      { name: environmentId },
      sourceEnvironmentId
    );
  }
};

/**
 * Deletes an Environment in Contentful
 *
 * @param managementKey
 * @param spaceId
 * @param environmentId
 */
export const deleteEnvironment = async (
  managementKey: string,
  spaceId: string,
  environmentId: string
): Promise<void> => {
  const client = createClient({ accessToken: managementKey });
  const space = await client.getSpace(spaceId);
  try {
    const environment = await space.getEnvironment(environmentId);
    await environment.delete();
  } catch {
    console.log('Not able to delete the environment. Possibly already deleted');
  }
};
