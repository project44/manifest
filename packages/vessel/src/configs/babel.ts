import type { BabelConfig } from '@beemo/driver-babel';

const { tool } = process.beemo;
const { esm, react, targets } = tool.config.settings;

const config: BabelConfig = {
  babelrc: true,
  babelrcRoots: tool.project.getWorkspaceGlobs({ relative: true }),
  comments: false,
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['babel-plugin-transform-dev', { evaluate: false }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        loose: true,
        modules: esm ? false : 'auto',
        shippedProposals: true,
        targets: targets ? targets : { node: 'current' },
        useBuiltIns: false,
      },
    ],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
    [
      '@babel/preset-react',
      {
        development: __DEV__,
        runtime: react === 'automatic' ? 'automatic' : 'classic',
      },
    ],
  ],
};

export default config;
