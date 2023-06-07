# @project44-manifest/design-tokens

Design Tokens for Manifest Design System, project44's design system.

For a full list of tokens, please see the
[documentation website](https://project44.github.io/manifest/core/design-tokens)

## Installation

```bash
yarn add @project44-manifest/design-tokens
```

## Usage

### Constants

Each token is represented as a constants and can be imported directly.

```js
import { colorPaletteBlue50 } from '@project44-manifest/design-tokens';
```

### Object

All tokens can be accessed via a javascript object, this is useful for composing themes.

```js
import { tokens } from '@project44-manifest/design-tokens';

console.log(tokens.color.palette.blue[50]);
```

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
