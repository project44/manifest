# @project44-manifest/theme

> Themes for apply Manifest Design System design guidelines to JavaScript projects.

## Installation

```bash
yarn add @project44-manifest/theme
```

## Getting Started

The `@project44-manifest/theme` library provides a set of themes based on
[Manifest Design System design tokens](https://project44.github.io/manifest/core/design-tokens).

> Currently we only support a light theme, support for additional themes coming soon.

```ts
import { lightTheme } from '@project44-manifest/theme';
```

### Theme specification

The theme specification is based on the
[system-ui theme specification](https://github.com/system-ui/theme-specification) and follow the
Manifest Design System [design tokens](https://project44.github.io/manifest/core/design-tokens)
guidelines.

```json
{
  "borderWidths": {
    "large": "",
    "medium": "",
    "small": ""
  },
  "colors": {
    "background-danger": "",
    "background-primary": "",
    "background-secondary": "",
    "background-side-nav": "",
    "background-success": "",
    "background-surface": "",
    "background-tertiary": "",
    "background-top-nav": "",
    "background-warning": "",
    "border-danger": "",
    "border-disabled": "",
    "border-primary": "",
    "border-success": "",
    "border-warning": "",
    "brand-active": "",
    "brand-default": "",
    "brand-gradient": "",
    "brand-hover": "",
    "data-viz-danger-fill": "",
    "data-viz-danger-hover": "",
    "data-viz-danger-line": "",
    "data-viz-neutral-fill": "",
    "data-viz-neutral-hover": "",
    "data-viz-primary-fill": "",
    "data-viz-primary-fill-alt": "",
    "data-viz-primary-hover": "",
    "data-viz-primary-line": "",
    "data-viz-secondary-fill": "",
    "data-viz-secondary-fill-alt": "",
    "data-viz-secondary-hover": "",
    "data-viz-secondary-line": "",
    "data-viz-tertiary-fill": "",
    "data-viz-tertiary-fill-alt": "",
    "data-viz-tertiary-hover": "",
    "data-viz-tertiary-line": "",
    "data-viz-warning-fill": "",
    "data-viz-warning-hover": "",
    "data-viz-warning-line": "",
    "palette-black": "",
    "palette-blue-100": "",
    "palette-blue-200": "",
    "palette-blue-300": "",
    "palette-blue-400": "",
    "palette-blue-50": "",
    "palette-blue-500": "",
    "palette-blue-600": "",
    "palette-blue-700": "",
    "palette-blue-800": "",
    "palette-blue-900": "",
    "palette-brown-100": "",
    "palette-brown-200": "",
    "palette-brown-300": "",
    "palette-brown-400": "",
    "palette-brown-50": "",
    "palette-brown-500": "",
    "palette-brown-600": "",
    "palette-brown-700": "",
    "palette-brown-800": "",
    "palette-brown-900": "",
    "palette-green-100": "",
    "palette-green-200": "",
    "palette-green-300": "",
    "palette-green-400": "",
    "palette-green-50": "",
    "palette-green-500": "",
    "palette-green-600": "",
    "palette-green-700": "",
    "palette-green-800": "",
    "palette-green-900": "",
    "palette-grey-100": "",
    "palette-grey-200": "",
    "palette-grey-300": "",
    "palette-grey-400": "",
    "palette-grey-50": "",
    "palette-grey-500": "",
    "palette-grey-600": "",
    "palette-grey-700": "",
    "palette-grey-800": "",
    "palette-grey-900": "",
    "palette-indigo-100": "",
    "palette-indigo-200": "",
    "palette-indigo-300": "",
    "palette-indigo-400": "",
    "palette-indigo-50": "",
    "palette-indigo-500": "",
    "palette-indigo-600": "",
    "palette-indigo-700": "",
    "palette-indigo-800": "",
    "palette-indigo-900": "",
    "palette-orange-100": "",
    "palette-orange-200": "",
    "palette-orange-300": "",
    "palette-orange-400": "",
    "palette-orange-50": "",
    "palette-orange-500": "",
    "palette-orange-600": "",
    "palette-orange-700": "",
    "palette-orange-800": "",
    "palette-orange-900": "",
    "palette-pink-100": "",
    "palette-pink-200": "",
    "palette-pink-300": "",
    "palette-pink-400": "",
    "palette-pink-50": "",
    "palette-pink-500": "",
    "palette-pink-600": "",
    "palette-pink-700": "",
    "palette-pink-800": "",
    "palette-pink-900": "",
    "palette-purple-100": "",
    "palette-purple-200": "",
    "palette-purple-300": "",
    "palette-purple-400": "",
    "palette-purple-50": "",
    "palette-purple-500": "",
    "palette-purple-600": "",
    "palette-purple-700": "",
    "palette-purple-800": "",
    "palette-purple-900": "",
    "palette-red-100": "",
    "palette-red-200": "",
    "palette-red-300": "",
    "palette-red-400": "",
    "palette-red-50": "",
    "palette-red-500": "",
    "palette-red-600": "",
    "palette-red-700": "",
    "palette-red-800": "",
    "palette-red-900": "",
    "palette-white": "",
    "palette-yellow-100": "",
    "palette-yellow-200": "",
    "palette-yellow-300": "",
    "palette-yellow-400": "",
    "palette-yellow-50": "",
    "palette-yellow-500": "",
    "palette-yellow-600": "",
    "palette-yellow-700": "",
    "palette-yellow-800": "",
    "palette-yellow-900": "",
    "primary-active": "",
    "primary-default": "",
    "primary-hover": "",
    "text-contrast": "",
    "text-danger": "",
    "text-disabled": "",
    "text-primary": "",
    "text-secondary": "",
    "text-success": "",
    "text-tertiary": "",
    "text-warning": ""
  },
  "fonts": {
    "mono": "",
    "text": ""
  },
  "fontSizes": {
    "large": "",
    "medium": "",
    "small": "",
    "x-large": "",
    "x-small": "",
    "xx-large": ""
  },
  "fontWeights": {
    "bold": "",
    "regular": "",
    "semibold": ""
  },
  "letterSpacings": {
    "large": "",
    "medium": "",
    "small": "",
    "x-small": ""
  },
  "lineHeights": {
    "large": "",
    "medium": "",
    "small": "",
    "x-large": "",
    "x-small": "",
    "xx-large": ""
  },
  "radii": {
    "full": "",
    "small": ""
  },
  "shadows": {
    "large": "",
    "medium": "",
    "small": ""
  },
  "sizes": {
    "large": "",
    "medium": "",
    "small": "",
    "x-large": "",
    "x-small": ""
  },
  "space": {
    "large": "",
    "medium": "",
    "small": "",
    "x-large": "",
    "x-small": ""
  },
  "zIndices": {
    "dialog": "",
    "dropdown": "",
    "modal": "",
    "overlay": "",
    "popover": "",
    "sticky": "",
    "toast": "",
    "tooltip": ""
  }
}
```

## Contributing

Contributions are always welcome!! Please review our [Contribution Guide](/.github/CONTRIBUTING.md)
to get started.

## License

Licensed under the [MIT](/LICENSE).
