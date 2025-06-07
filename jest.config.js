import { createRequire } from 'node:module';
import { pathsToModuleNameMapper } from 'ts-jest';

const require = createRequire(import.meta.url);
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('jest').Config} */
const config = {
  bail: true,
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
};

export default config;
