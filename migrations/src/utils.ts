/*eslint no-useless-escape: "off"*/

import { readdir } from 'fs';
import { promisify } from 'util';
import semver from 'semver';

const readdirAsync = promisify(readdir);

/**
 * Extracts a semantic version from a filename
 * Requires the file name to start with the version.
 * @param file
 * @example
 * filenameToVersion("0.js") // "0.0.0"
 * filenameToVersion("1.js") // "1.0.0"
 * filenameToVersion("1.0.js") // "1.0.0"
 * filenameToVersion("1.1_whatever.js") // "1.1.0"
 * filenameToVersion("1.1.1-anything.js") // "1.1.1"
 */
export const filenameToVersion = (file: string): string => {
  const fileVersion = semver.valid(
    semver.coerce(file.match('^([0-9]+.?)+')![0])
  );
  return fileVersion == null ? '' : fileVersion;
};

/**
 * Returns an ordered array of semvers, extracted from
 * the filenames inside a dir.
 * Filenames should start with the version.
 * @param migrationsDir
 */
export const getAvailableMigrations = async (
  migrationsDir: string
): Promise<string[]> => {
  return semver.sort(
    (await readdirAsync(migrationsDir)).map((file) => filenameToVersion(file))
  );
};

/**
 * Returns an equivalent filename, given a semver
 * @param migrationsDir
 * @param version
 * @example
 * //given a directory with these files: 1.js / 1.0.1.js / 1.1-migration.js
 * findSemVerFile(dir, "1.0.0") // 1.js
 * findSemVerFile(dir, "1.0.1") // 1.0.1.js
 * findSemVerFile(dir, "1.1.0") // 1.1-migration..js
 */
export const findSemVerFile = async (
  migrationsDir: string,
  version: string
): Promise<string | undefined> => {
  const files = await readdirAsync(migrationsDir);
  return files.find((_) =>
    _.match(new RegExp(`^${version}([^\.0-9]|\.[^0-9]|\.0\.0|\.0[^\.]|.js)`))
  );
};
