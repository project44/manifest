<div align="center">
  <a href="https://www.manifestdesignsystem.com"><img src="apps/docs/public/images/logo.png" width="200" height="200" /></a>
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
[documentation website](https://www.manifestdesignsystem.com).

## Getting Started

Just getting started? Check out [`@project44-manifest/react`](./packages/react).

Need something more specific? You may want to check out these packages:

| Package name                                | Description                                    |
| ------------------------------------------- | ---------------------------------------------- |
| [`design tokens`](./packages/design-tokens) | The design tokens for Manifest Design System.  |
| [`react`](./packages/react)                 | React components, patterns and styling engine. |
| [`theme`](./packages/theme)                 | A theme implementing our design tokens.        |

Manifest uses [Turborepo](https://turbo.build/repo) as it's build system, to get started working
with repo install the dependencies and build the packages:

```sh
yarn && yarn build
```

To run a command for a single workspace use the `--filter` tag provided by turbo.

```sh
yarn turbo run --filter=@project44-manifest/react
```

Some common commands includes:

| Command                                                     | Purpose                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| `yarn turbo run dev --filter=@project44-manifest/storybook` | Starts a development server for the react components.      |
| `yarn turbo run dev --filter=@project44-manifest/doc`       | Starts a development server for the documentation website. |

The following commands will run in all packages:

| Command          | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `yarn build`     | Builds all the packages, tools and apps in the repo.                 |
| `yarn clean`     | Removes build assets and caches.                                     |
| `yarn coverage`  | Generate test coverage reports for each package.                     |
| `yarn dev`       | Runs development servers and watch for code changes within packages. |
| `yarn format`    | Check code formatting.                                               |
| `yarn lint`      | Run linting.                                                         |
| `yarn test`      | Run unit tests.                                                      |
| `yarn typecheck` | Validate TypeScript types.                                           |

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
