# Contributing to Manifest

Thank you so much for your interest in contributing to Manifest! Before you begin please take a
moment to review our contribution guidelines.

## Code of Conduct

We believe in providing a safe and positive environment for all contributors and expect all
community members to help maintain that culture. Please review our
[code of conduct](./CODE_OF_CONDUCT.md) to understand our do's and dont's.

## Prerequisites

Before contributing to Manifest Design System, you should make sure to have the following tools
installed:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Moonrepo](https://moonrepo.dev)

## Versioning

We adhere to [semantic versioning](https://semver.org/) for versioning our packages, utilizing
[changesets](https://github.com/changesets/changesets) for version bumping and releasing.

## Branching

Our `main` should remain stable, pull request generally should be opened against this branch. For
major releases or breaking changes, please use the `next` branch.

When naming branches, please follow our `<type>/<scope>` convention.

**Type**

Must be one of the following:

| Type       | Purpose                                                        |
| ---------- | -------------------------------------------------------------- |
| `build`    | Changes that affect the build system or external dependencies. |
| `ci`       | Changes to our CI configuration.                               |
| `docs`     | Documentation only changes.                                    |
| `feat`     | A new feature.                                                 |
| `fix`      | A bug fix.                                                     |
| `perf`     | A code change that improves performance.                       |
| `refactor` | A code change that neither fixes a bug nor adds a feature.     |
| `style`    | Changes that do not affect the meaning of the code .           |
| `test`     | Adding missing tests or correcting existing tests.             |

**Scope**

The scope should be a kebab-cased id representing the changes to be made.

## Commit Messages

We follow the
[conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/#specification)
for commit messages. This ensures our commits and readable and scannable.

### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that
includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a
[closing reference to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
if any.

**Examples**

```
feat(button): adding loading indicator
```

```
fix(button): increase the padding of the button

The padding in our react styles does not match the design system specification
```

### Revert

If the commit reverts a previous commit, it should begin with revert: , followed by the header of
the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the
SHA of the commit being reverted.

### Type

Must be one of the following:

| Type       | Purpose                                                        |
| ---------- | -------------------------------------------------------------- |
| `build`    | Changes that affect the build system or external dependencies. |
| `ci`       | Changes to our CI configuration.                               |
| `docs`     | Documentation only changes.                                    |
| `feat`     | A new feature.                                                 |
| `fix`      | A bug fix.                                                     |
| `perf`     | A code change that improves performance.                       |
| `refactor` | A code change that neither fixes a bug nor adds a feature.     |
| `style`    | Changes that do not affect the meaning of the code.            |
| `test`     | Adding missing tests or correcting existing tests.             |

### Scope (optional)

The scope should be the name of the package affected (as perceived by the person reading the
changelog generated from commit messages.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The
body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about Breaking Changes and is also the place to reference
GitHub issues that this commit Closes.

Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest
of the commit message is then used for this.

## Pull Request

Before working on an issue or feature please review any tickets, pr's, and discussions to be certain
that no one is actively working on the same issue or feature.

### Making a Pull Request

1. Fork the repository

2. Clone your fork locally

```sh
git clone https://github.com/<your username>/manifest.git
cd manifest
```

3. Add upstream remotes

```sh
git remote add upstream https://github.com/project44/manifest.git
```

4. Create a new branch off of `main`.

5. Make and commit your changes.

### Changelog

We use [changesets](https://github.com/changesets/changesets) for changelog and release management.

1. Add a changet

```sh
yarn changeset
```

2. Select the packages to be included in the release.

3. Select the [semvar bump type](https://semver.org/).

4. Add a message that will be added to the changelog.

For changes that do not require a package release (e.g. doc site changes, ci, etc..) add an empty
changeset:

```sh
yarn changeset add --empty
```

5. Commit the newly generate changelog.

## Development

When working with react components and packages, we have provided a
[storybook](https://storybook.js.org/) development server to use for validation.

```sh
yarn storybook
```

## Creating components

If you need to create a new component packages, we have provided a script that will bootstrap the
new component package for you.

```
moon generate component ./packages/react/components/<component-name>
```

## Testing

We use [jest](https://jestjs.io/) as our test runner along with
[react testing library](https://testing-library.com/docs/react-testing-library/intro/) for our react
code base. Please be sure to add or update unit tests for any code changes. Run `moon run :test` to
run jest.

## Code Style

We use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to help maintain our
coding style. We recommend enabling linting in your editor for the best developer experience.

You may run code style checks manually with the following commands:

| Command            | Purpose              |
| ------------------ | -------------------- |
| `moon run :format` | Format all projects. |
| `moon run :lint`   | Lints all projects.  |

## License

By contributing your code to the [manifest](https://github.com/project44/manifest) GitHub
repository, you agree to license your contribution under the [MIT license](/LICENSE).
