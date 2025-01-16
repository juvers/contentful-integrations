/// <reference types="jest" />

import {
  filenameToVersion,
  getAvailableMigrations,
  findSemVerFile,
} from '../src/utils';

describe('File Operations', () => {
  it('should convert the file names from a dir into valid semVers', () => {
    expect(filenameToVersion('0.js')).toEqual('0.0.0');
    expect(filenameToVersion('2.1._.js')).toEqual('2.1.0');
    expect(filenameToVersion('2.0.1.2.3.js')).toEqual('2.0.1');
    expect(filenameToVersion('1.2.2.dogs.js')).toEqual('1.2.2');
    expect(function () {
      filenameToVersion('notVersionedFile.js');
    }).toThrow();
    expect(function () {
      filenameToVersion('migration-2.1.0.js');
    }).toThrow();
  });

  it('should lookup all files inside a dir and return semVers', async () => {
    const result = await getAvailableMigrations(`${__dirname}/sample-scripts`);
    const expectedResult = [
      '0.0.1',
      '1.0.0',
      '1.0.1',
      '1.1.0',
      '1.2.2',
      '2.0.0',
      '2.1.0',
      '3.0.0',
    ];
    expect(result).toEqual(expectedResult);
  });

  it('should convert a given semVer to a valid file name', async () => {
    const simplifyVersion = (version: string) => {
      return version.replace(/\.0$/, '').replace(/\.0$/, '');
    };
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('0.0.1')
      )
    ).toEqual('0.0.1-initial.js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('1.0.1')
      )
    ).toEqual('1.0.1[contentful].js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('1.1.0')
      )
    ).toEqual('1.1-undefined.js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('1.2.2')
      )
    ).toEqual('1.2.2.dogs.js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('1.0.0')
      )
    ).toEqual('1-dog.js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('2.1.0')
      )
    ).toEqual('2.1._.js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('2.0.0')
      )
    ).toEqual('2.js');
    expect(
      await findSemVerFile(
        `${__dirname}/sample-scripts`,
        simplifyVersion('3.0.0')
      )
    ).toEqual('3.my-migration.0.js');
  });
});
