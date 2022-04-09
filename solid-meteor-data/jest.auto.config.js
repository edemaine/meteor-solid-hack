import config from './jest.config.js';
const {testPathIgnorePatterns, ...rest} = config;
export default {
  ...rest,
  testPathIgnorePatterns: ['/node_modules', '/bench'],
  setupFiles: ['<rootDir>/tests/autoMode.js'],
};
