import '@testing-library/jest-dom/extend-expect';

import { GlobalWithFetchMock } from 'jest-fetch-mock';

// @ts-ignore
const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
