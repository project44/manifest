'use strict';

const _process$beemo = process.beemo,
      context = _process$beemo.context,
      tool = _process$beemo.tool;
const react = tool.config.settings.react;
const config = {
  compilerOptions: {
    allowJs: true,
    allowSyntheticDefaultImports: true,
    declaration: false,
    esModuleInterop: true,
    experimentalDecorators: true,
    forceConsistentCasingInFileNames: true,
    lib: ['esnext'],
    module: 'esnext',
    moduleResolution: 'node',
    noEmitOnError: true,
    noImplicitReturns: true,
    pretty: true,
    removeComments: true,
    resolveJsonModule: true,
    skipLibCheck: true,
    sourceMap: true,
    strict: true,
    target: 'es2021'
  }
};
const options = config.compilerOptions;

if (tool.package.workspaces) {
  Object.assign(options, {
    composite: true,
    declaration: true,
    declarationMap: true,
    emitDeclarationOnly: true
  });
}

if (context.getRiskyOption('sourceMaps')) {
  options.sourceMap = true;
}

if (react) {
  if (options.lib) {
    options.lib.push('dom');
  } else {
    options.lib = ['dom'];
  }

  if (react === 'automatic') {
    options.jsx = process.env.NODE_ENV !== "production" ? 'react-jsx-dev' : 'react-jsx';
  } else {
    options.jsx = 'react';
  }
}

module.exports = config;
//# sourceMappingURL=typescript2.js.map
