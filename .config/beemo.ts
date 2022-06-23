import { BeemoConfig } from '@beemo/core';

const config: BeemoConfig = {
  module: '@manifest/vessel',
  drivers: [
    ['babel', { configStrategy: 'none' }],
    ['typescript', { buildFolder: 'dts', declarationOnly: true }],
    'eslint',
    'jest',
    'prettier',
  ],
  settings: {
    react: true,
  },
};

export default config;
