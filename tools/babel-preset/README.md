# babel-preset-manifest

> A Babel preset with built-in TypeScript support.

![build status](https://img.shields.io/github/workflow/status/project44/manifest/Pipeline)
![npm version](https://img.shields.io/npm/v/jest-preset-manifest)
![npm license](https://img.shields.io/npm/l/jest-preset-manifest)

## Installation

```bash
yarn add --dev babel-preset-manifest
```

## Usage

Extend the preset in your root `jest.config.js`.

```js
module.exports = {
  presets: ['manifest'],
};
```

## Setup

Add the preset to your root `babel.config.js`.

```js
module.exports = {
  presets: ['manifest'],
};
```

## Options

The following options can be passed to the preset.

- `decorators` (`boolean`) - Enable TypeScript decorators. If true, will toggle Babel into loose
  mode. Defaults to `false`.
- `loose` (`boolean`) - Turn on Babel loose mode for all plugins. Defaults to `false`.
- `modules` (`boolean`) - Force transpilation to use ECMA script module syntax. Defaults to `false`
  (`auto` modules).
- `react` (`boolean | classic | automatic`) - Enable the React plugin and the defined JSX runtime.
  Defaults to `false`.
- `targets` (`Record<string, string> | string[] | string`) - Override the target environment.
  Defaults to Node.js `current`.
