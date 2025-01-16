/* eslint-disable no-template-curly-in-string */
const name = '@allergan-data-labs/contentful-graphql';
const srcRoot = `packages/contentful-graphql`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: 'dist/contentful-graphql',
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message:
          `release(version): Release ${name} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
