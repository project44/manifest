# Vessel - Development configuration module

Pre-packaged configs for Manifest Design System. Inspired by [@beemo/dev](https://github.com/beemojs/dev).

## Installation

```bash
yarn add --dev @beemo/cli @beemo/core @manifest/vessel
```

## Setup

Create a `.config/beemo.ts` file in the root of your project that configures
`@manifest/vessel` as the configuration module. Be sure to enable all drivers and any
settings.

```ts
// .config/beemo.ts
export default {
  module: '@manifest/vessel',
  drivers: ['babel', 'eslint', 'jest', 'prettier', 'typescript'],
  settings: {},
};
```

### Settings

The following Beemo `settings` can be defined and will be passed to applicable drivers.

- `node` (`boolean`) - Current project will target Node.js instead of the browser. Defaults to
  `false`.
- `projects` (`boolean | string[]`) - Enable Jest projects. If `true` is passed, will be resolved
  using workspaces, otherwise requires an array of explicit strings. Defaults to `false`.
- `next` (`boolean`) - Enable Next.js for all drivers. Defaults to `false`.
- `react` (`boolean | classic | automatic`) - Enable React and JSX support for all drivers. Defaults
  to `false`.

### Overrides

If you would like to override a driver config, create a `.config/beemo/<driver>.ts` file in the root
of the project.
[View the official Beemo docs for more information](https://beemo.dev/docs/consumer#overriding-configs).

```ts
// .config/beemo/eslint.ts
export default {
  rules: {
    'no-param-reassign': 'off',
  },
};
```

## Drivers

The following drivers are directly supported in this configuration module, and automatically passed
common command line options when being ran.

- Babel
- ESLint
- Jest
- Prettier
- TypeScript
