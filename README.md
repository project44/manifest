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

> Please refer the individual packages READMEs for installation and usage instructions.

Manifest uses [Turborepo](https://turbo.build/repo) as it's build system and
[Yarn](https://classic.yarnpkg.com/en/docs/workspaces/) for dependency management.

To install all the dependencies run the following command:

```sh
yarn install
```

Once all the packages are installed, you'll need to compile the source code. Building the code
ensures that workspaces that reference other workspaces use the correct source code, preventing
errors in our linter and [TypeScript](https://www.typescriptlang.org/) compiler.

```sh
yarn build
```

Now you're all set! Here are some other common commands that you may find useful:

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

To run a command for a single workspace use the `--filter` tag provided by turbo.

```sh
yarn turbo run <command> --filter=<workspace_name>
```

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
