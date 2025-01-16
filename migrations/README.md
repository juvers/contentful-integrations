# Contentful Migrations Package

Package used for running contentful migrations in any directory.

Please note that this will create a new Content Type (in case it's not created yet) with default name of `versionControl` (configurable) for managing the current version applied to the environment.

## Github Actions

#### [CMS - Auto - Create/Delete PR Env](https://github.com/allergan-data-labs/alle-frontend-shared-packages/actions/workflows/cms-auto-create-delete-pr-env.yml)

When pushing up a PR, a new environment is automatically created in Contentful that will match your PR # (i.e. PR-XX). This environemtn is a clone of Contentful stage environment. When your PR is merged, this environement will be automatically deleted.

#### [CMS - Env Reset](https://github.com/allergan-data-labs/alle-frontend-shared-packages/actions/workflows/cms-env-reset.yml)

This action can be run to reset a Contentful environment to match the latest in stage.

#### [CMS - Execute Migrations](https://github.com/allergan-data-labs/alle-frontend-shared-packages/actions/workflows/cms-execute-migrations.yml)

This action can be used to execute Contentful migrations to a PR test environemnt (created by the CMS - Auto - Create/Delete PR Env action). This action can also be used to run Contentful migrations to the demo and master environment (if user has permissions to do so).

#### [CMS - Auto - Execute Contentful Migration Scripts on Dev & Stage](https://github.com/allergan-data-labs/alle-frontend-shared-packages/actions/workflows/cms-auto-execute-migrations-dev-stage.yml)

This action runs automatically when a contentful-migrations PR is merged. It will run the migration file(s) to the Contentful dev and stage environments

## Getting Started

New to this package? [We have documentation that will be helpful when getting started](https://adl-technology.atlassian.net/wiki/spaces/DLPE/pages/2201452563/CMS+-+Content+Models+Migration+Scripts).

Recommended global installation of latest`contentful-cli`.

```
// check global installs
$ yarn global list
// add contentful-cli
$ yarn global add contentful-cli

Note: Can also use brew to install
```

## Usage

```javascript
import { migrateUp } from '@allergan-data-labs/contentful-migrations';

const managementKey = '<ContentManagementToken>';
const spaceId = '<SpaceID>';
const environmentId = 'dev';
const migrationsDir = `${process.cwd()}/my_migrations`;
const versionContentTypeId = 'versionTracking'; //optional, default value is versionControl

migrateUp(
  managementKey,
  spaceId,
  environmentId,
  migrationsDir,
  versionContentTypeId
);
```

## Migration files format

Every migration script must start with the desired version.
They're going to be converted to a semantic version, so you don't need to strictly follow the semVer format.
Examples:

- `1.js` will be converted to `1.0.0`
- `1.1-awesome_change.js` will be converted to `1.1.0`
- `2.0.1.2.3.js` will be converted to `2.0.1`
- `notVersionedFile.js` will throw errors
- `migration-2.1.0.js` will throw errors

## Testing migrations via cli

Point your CLI default to your desired testing environment:

```
$ contentful space environment use [env-name]
```

Ensure your targeted environment **is not stage**. The default environment will be highlighted:

```
$ contentful space environment list
```

Run a migration file against above environment:

```
$ contentful space migration [path-to-migration-file]
// Optionally, you can express an explicit environment
$ contentful space environment [env-name] migration [path-to-migration-file]
```

### Other Resources

- [Compose CLI tools](https://www.contentful.com/developers/docs/compose/cli-tools/)
- When customizing a field's editor (not to allow new entries), this documentation is helpful [Contentful Editor Interfaces](https://www.contentful.com/developers/docs/extensibility/app-framework/editor-interfaces/).

```
  const existingContentType = migration.editContentType('contentTypeA');

  /**
   * Arg types for changeFieldControl are not presented in the typdef
   * @see https://github.com/contentful/contentful-migration/blob/8fce9244f81d97e0dbe18db32665e1a2008ae71d/index.d.ts#L215
   * Contentful Editor Interfaces docs detail 'builtin' values, which are passed into the third arg
   *
  */
  existingContentType.changeFieldControl('theme', 'builtin', 'entryLinkEditor', {
    showCreateEntityAction: false,
  });
```
