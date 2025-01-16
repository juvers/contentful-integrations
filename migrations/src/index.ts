import { migrateUp } from './migrate';
import { createEnvironment, deleteEnvironment } from './contentful';

const managementKey = process.env.CONTENTFUL_MANAGEMENT_KEY!;
const spaceId = process.env.CONTENTFUL_SPACE_ID!;
const environmentId =
  process.env.CONTENTFUL_ENVIRONMENT_ID! === 'production'
    ? 'master'
    : process.env.CONTENTFUL_ENVIRONMENT_ID!;
const migrationsDir = `${process.cwd()}/migration-scripts`;
const entriesMigrationsDir = `${process.cwd()}/migration-entries`;

export const execMigrations = () => {
  migrateUp(managementKey, spaceId, environmentId, migrationsDir);
};

export const execEntriesMigrations = () => {
  migrateUp(
    managementKey,
    spaceId,
    environmentId,
    entriesMigrationsDir,
    'entry'
  );
};

export const deleteEnv = () => {
  deleteEnvironment(managementKey, spaceId, environmentId);
};

export const createEnv = (sourceEnvironmentId: string = 'stage') => {
  createEnvironment(managementKey, spaceId, environmentId, sourceEnvironmentId);
};
