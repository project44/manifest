'use strict';

const tool = process.beemo.tool;
const _tool$config$settings = tool.config.settings,
      esm = _tool$config$settings.esm,
      react = _tool$config$settings.react,
      targets = _tool$config$settings.targets;
const config = {
  babelrc: true,
  babelrcRoots: tool.project.getWorkspaceGlobs({
    relative: true
  }),
  comments: false,
  plugins: ['@babel/plugin-proposal-export-default-from', '@babel/plugin-proposal-export-namespace-from', ['babel-plugin-transform-dev', {
    evaluate: false
  }], ['@babel/plugin-proposal-decorators', {
    legacy: true
  }], ['@babel/plugin-proposal-class-properties', {
    loose: true
  }], ['@babel/plugin-proposal-private-methods', {
    loose: true
  }], ['@babel/plugin-proposal-private-property-in-object', {
    loose: true
  }]],
  presets: [['@babel/preset-env', {
    bugfixes: true,
    exclude: ['@babel/plugin-transform-regenerator', '@babel/plugin-transform-async-to-generator'],
    loose: true,
    modules: esm ? false : 'auto',
    shippedProposals: true,
    targets: targets ? targets : {
      node: 'current'
    },
    useBuiltIns: false
  }], ['@babel/preset-typescript', {
    allowDeclareFields: true
  }], ['@babel/preset-react', {
    development: process.env.NODE_ENV !== "production",
    runtime: react === 'automatic' ? 'automatic' : 'classic'
  }]]
};
module.exports = config;
//# sourceMappingURL=babel2.js.map
