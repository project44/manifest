# Contributing to Manifest

Thank you so much for your interest in contributing to Manifest! Before you begin please take a
moment to review our contribution guidelines.

## Code of Conduct

We believe in providing a safe and positive environment for all contributors and expect all
community members to help maintain that culture. Please review our
[code of conduct](./CODE_OF_CONDUCT.md) to understand our do's and dont's.

## Versioning

Manifest Design System packages follow [semantic versioning](https://semver.org/).

## Prerequisites

Before contributing to Manifest Design System, you should make sure to have the following tools
installed:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Pull Requests

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)

Before working on an issue or feature please review any tickets, pr's, and discussions to be certain
that no one is actively working on the same issue or feature.

### Making a Pull Request

1. Fork and clone the repository
2. Create a new branch off of main
3. Install dependencies by running `yarn` in the project root
4. Build the code with `yarn build`
5. Write your code
6. Start storybook dev environment `yarn dev`
7. Ensure code is tested and tests pass with `yarn test`
8. Ensure your code passes formatting rules with `yarn format`
9. Lint your code with `yarn lint`
10. Check your typescript types with `yarn typecheck`
11. Generate a changeset with `yarn changeset`
12. Profit

## Commit Conventions

Manifest follows [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing
commit messages. This helps in automatically generating changelogs and ensuring our git history is
easily searchable.

## Development

Before you begin development, please make sure that you have [Node](https://nodejs.org/en/) and
[Yarn](https://yarnpkg.com/) setup on your machine.

1. Install dependencies

```sh
yarn install
```

2. Build packages

```sh
yarn build
```

3. Start development server

```sh
yarn dev
```

## Testing

We use [jest](https://jestjs.io/) as our test runner along with
[react testing library](https://testing-library.com/docs/react-testing-library/intro/) for our react
code base. Please be sure to add or update unit tests for any code changes. Run `yarn run test` to
run jest.

It is also recommended to verify you changes by running the local development server.

## Code Formatting

For code formatting we use [Prettier](https://prettier.io/), run `yarn run format` to automatically
format your code.

## Linting

Code linting is controlled by [ESLint](https://eslint.org/) and can be run with `yarn run lint`.

## Type Checking

Our codebase is written in [Typescript](https://www.typescriptlang.org/) and can be check by running
`yarn run typecheck`.

## Releasing

Releases are controlled automatically via [changesets](https://github.com/changesets/changesets) in
our github workflows.

## License

By contributing your code to the [manifest](https://github.com/project44/manifest) GitHub
repository, you agree to license your contribution under the [MIT license](/LICENSE).
