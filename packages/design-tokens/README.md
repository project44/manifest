# @project44-manifest/design-tokens

Design tokens for Manifest Design Sytem

## Installation

```sh
$ yarn add @project44-manifest/design-tokens
# or
$ npm install @project44-manifest/design-tokens
```

## Usage

Token constants can be imported directly:

```ts
import { COLOR_BACKGROUND_PRIMARY } from '@project44/design-tokens';
```

Or can via a theme object:

```ts
import { theme } from '@project44/design-tokens';

const background = theme.color['background-primary'];
```
