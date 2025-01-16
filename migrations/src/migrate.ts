import { createClient } from 'contentful-management';
import { getAvailableMigrations } from './utils';
import { findCurrentVersion, runMigrations } from './contentful';

/**
 * Executes migration scripts following a semantic versioning pattern,
 * that should be present in the migration files names. Utilizes a
 * content type and entry for tracking the version
 *
 * @param managementKey
 * @param spaceId
 * @param environmentId
 * @param migrationDir
 * @param versionContentTypeId
 * @param migrationType ("contentType"|"entry")
 */
export const migrateUp = async (
  managementKey: string,
  spaceId: string,
  environmentId: string,
  migrationsDir: string,
  migrationType: string = 'contentType',
  versionContentTypeId: string = 'versionControl'
): Promise<void> => {
  // Space and Environment info
  const client = createClient({ accessToken: managementKey });
  const space = await client.getSpace(spaceId);
  const environment = await space.getEnvironment(environmentId);
  const defaultLocale = (await environment.getLocales()).items.find(
    (locale) => locale.default
  )!.code;

  const availableMigrations = await getAvailableMigrations(migrationsDir);
  console.log(
    `\n--${migrationType} Migration--\n\n---\nThe following migrations were detected:`
  );
  console.log(availableMigrations);

  console.log(
    '\n---\nSearching for the current version of the contentful space...'
  );
  const { currentVersion, versionEntry } = await findCurrentVersion(
    environment,
    versionContentTypeId,
    defaultLocale,
    migrationType
  );
  console.log(`- ${currentVersion} -`);

  console.log(`\n\nMigrations to run:`);
  const currentMigrationIndex = availableMigrations.indexOf(currentVersion);

  const migrationsToRun: string[] =
    currentMigrationIndex === -1 && currentVersion != '0.0.0'
      ? []
      : availableMigrations.slice(currentMigrationIndex + 1);

  console.log(migrationsToRun);
  const migrationsOptions = {
    spaceId: spaceId,
    environmentId,
    accessToken: managementKey,
    yes: true,
  };

  await runMigrations(
    migrationsToRun,
    migrationsDir,
    migrationsOptions,
    versionEntry,
    defaultLocale,
    migrationType
  );
};
