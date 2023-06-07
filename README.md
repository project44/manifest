<div align="center">
  <a href="https://project44.github.io/manifest/ "><img src="apps/docs/public/images/logo.png" width="200" height="200" /></a>
</div>

<h1 align="center">Manifest Design System</h1>

> Manifest Design System is the open source implementation of the project44 design language, used to
> build consistent, accessible and delightful products at project44. While the design language is
> closed source, the technology is open and contributions are welcomed and encouraged.

<div align="center">

[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@project44-manifest/react/latest.svg)](https://bundlephobia.com/result?p=@project44-manifest/react@latest)
[![LICENSE](https://img.shields.io/apm/l/atomic-design-ui.svg?style=flat)](https://github.com/project44/manifest/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@project44-manifest/react/latest.svg?label=@project44-manifest/react)](https://www.npmjs.com/package/@project44-manifest/react)
[![CI](https://github.com/project44/manifest/actions/workflows/ci.yml/badge.svg)](https://github.com/project44/manifest/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

</div>

## Documentation

For usage guidelines and full documentation please visit our
[documentation website](https://project44.github.io/manifest/).

## Getting Started

> Please refer the individual packages READMEs for installation and usage instructions.

### Install Turborepo

Manifest uses [Turborepo](https://turbo.build) as it's build system and repo management tool. We
suggest installing Turborepo globally with npm:

```sh
npm install -g turborepo
```

### Install dependencies and build turbo repository

```sh
yarn && yarn build
```

### Run a command

Once `Turborepo` is installed, the following commands are available:

| Command             | Purpose                           |
| ------------------- | --------------------------------- |
| `yarn build`        | Builds all projects.              |
| `yarn format:write` | Format all projects.              |
| `yarn format`       | Check formatting on all projects. |
| `yarn lint:write`   | Lints all projects.               |
| `yarn lint`         | Lints linting in all projects.    |
| `yarn test`         | Runs test in all projects.        |
| `yarn typecheck`    | Type checks all projects.         |

Tasks can all be run on individual apps - you can view a list of available project by running

```
yarn workspaces list
```

```sh
yarn workspace <subapp-name> <command>
```

## Project structure

1. Apps - Contains Storybook and Manifest documentation website.
2. Packages - All typescript code that is intended to be used as a package and consumed by client
   applications.

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
