# eslint-config-manifest

> ESLint configurations for Manifest Design System.

![build status](https://img.shields.io/github/workflow/status/project44/manifest/Pipeline)
![npm version](https://img.shields.io/npm/v/eslint-config-manifest)
![npm license](https://img.shields.io/npm/l/eslint-config-manifest)

## Installation

```bash
yarn add --dev eslint-config-manifest
```

## Usage

Extend the `manifest` config in your root `.eslintrc.js`.

```js
module.exports = {
  root: true,
  extends: ['manifest'],
};
```

If you are working on a React project, extend the `manifest/react` config.

```js
module.exports = {
  root: true,
  extends: ['manifest', 'manifest/react'],
};
```

If your project is using typescript, you must specify the path to your `tsconfig.json`.

```js
module.exports = {
  root: true,
  extends: ['manifest'],
  parserOptions: {
    project: 'tsconfig.json',
  },
};
```
