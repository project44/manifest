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

### Install Moonrepo

Manifest uses [Moonrepo](https://moonrepo.dev) as it's build system and repo management tool. We
suggest installing moon globally with npm:

```sh
npm install -g @moonrepo/cli
```

### Install dependencies and setup workspaces

```sh
yarn && yarn setup
```

### Run a command

Moonrepo includes a builtin [toolchain](https://moonrepo.dev/docs/concepts/toolchain) which will
install and dedupe yarn dependencies automatically. This means that you shoudn't need to run any
install scripts before running commands via moonrepo.

Once `moonrepo` is installed, the following commands are available:

| Command               | Purpose                    |
| --------------------- | -------------------------- |
| `moon check --all`    | Runs all tasks             |
| `moon run :build`     | Builds all projects.       |
| `moon run :format`    | Format all projects.       |
| `moon run :lint`      | Lints all projects.        |
| `moon run :test`      | Runs test in all projects. |
| `moon run :typecheck` | Type checks all projects.  |

Tasks can all be run on individual projects, a list of projects can be found in
`.moon/workspace.yml`.

```sh
moon run <project>:<task>
```

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
