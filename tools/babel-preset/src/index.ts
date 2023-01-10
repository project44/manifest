// eslint-disable-next-line no-underscore-dangle
declare const __DEV__: boolean;

export type PluginItem = string | [string, object];

export interface BabelPresetOptions {
  decorators?: boolean;
  loose?: boolean;
  modules?: boolean;
  react?: boolean | 'automatic' | 'classic';
  targets?: Record<string, string> | string[] | string;
}

export default function babelPresetManifest(api: unknown, options: BabelPresetOptions = {}) {
  const { decorators, loose, modules, react, targets } = options;

  let looseMode = loose ?? false;

  const plugins: PluginItem[] = [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    'babel-plugin-conditional-invariant',
    'babel-plugin-env-constants',
  ];

  if (decorators) {
    looseMode = true;

    plugins.unshift(
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
    );
  }

  const presets: PluginItem[] = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        exclude: [
          '@babel/plugin-transform-regenerator',
          '@babel/plugin-transform-async-to-generator',
        ],
        loose: looseMode,
        modules: modules ? false : 'auto',
        shippedProposals: true,
        targets: targets ?? { node: 'current' },
        useBuiltIns: false,
      },
    ],
    ['@babel/preset-typescript', { allowDeclareFields: true }],
  ];

  if (react) {
    presets.push([
      '@babel/preset-react',
      {
        development: __DEV__,
        runtime: react === 'automatic' ? 'automatic' : 'classic',
      },
    ]);
  }

  return {
    plugins,
    presets,
  };
}
