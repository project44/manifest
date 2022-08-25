// Bundled with Packemon: https://packemon.dev
// Platform: browser, Support: stable, Format: lib
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

const tokens = require('@project44-manifest/design-tokens');

const merge = require('lodash.merge');

const _interopDefault = e => e && e.__esModule ? e : {
  default: e
};

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null);

  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }

  n.default = e;
  return Object.freeze(n);
}

const tokens__namespace = /*#__PURE__*/_interopNamespace(tokens);

const merge__default = /*#__PURE__*/_interopDefault(merge);

const baseTheme = {
  borderWidths: {
    large: tokens__namespace.borderWidthLarge,
    medium: tokens__namespace.borderWidthMedium,
    small: tokens__namespace.borderWidthSmall
  },
  colors: {
    'palette-black': tokens__namespace.colorPaletteBlack,
    'palette-white': tokens__namespace.colorPaletteWhite,
    'palette-blue-50': tokens__namespace.colorPaletteBlue50,
    'palette-blue-100': tokens__namespace.colorPaletteBlue100,
    'palette-blue-200': tokens__namespace.colorPaletteBlue200,
    'palette-blue-300': tokens__namespace.colorPaletteBlue300,
    'palette-blue-400': tokens__namespace.colorPaletteBlue400,
    'palette-blue-500': tokens__namespace.colorPaletteBlue500,
    'palette-blue-600': tokens__namespace.colorPaletteBlue600,
    'palette-blue-700': tokens__namespace.colorPaletteBlue700,
    'palette-blue-800': tokens__namespace.colorPaletteBlue800,
    'palette-blue-900': tokens__namespace.colorPaletteBlue900,
    'palette-brown-50': tokens__namespace.colorPaletteBrown50,
    'palette-brown-100': tokens__namespace.colorPaletteBrown100,
    'palette-brown-200': tokens__namespace.colorPaletteBrown200,
    'palette-brown-300': tokens__namespace.colorPaletteBrown300,
    'palette-brown-400': tokens__namespace.colorPaletteBrown400,
    'palette-brown-500': tokens__namespace.colorPaletteBrown500,
    'palette-brown-600': tokens__namespace.colorPaletteBrown600,
    'palette-brown-700': tokens__namespace.colorPaletteBrown700,
    'palette-brown-800': tokens__namespace.colorPaletteBrown800,
    'palette-brown-900': tokens__namespace.colorPaletteBrown900,
    'palette-green-50': tokens__namespace.colorPaletteGreen50,
    'palette-green-100': tokens__namespace.colorPaletteGreen100,
    'palette-green-200': tokens__namespace.colorPaletteGreen200,
    'palette-green-300': tokens__namespace.colorPaletteGreen300,
    'palette-green-400': tokens__namespace.colorPaletteGreen400,
    'palette-green-500': tokens__namespace.colorPaletteGreen500,
    'palette-green-600': tokens__namespace.colorPaletteGreen600,
    'palette-green-700': tokens__namespace.colorPaletteGreen700,
    'palette-green-800': tokens__namespace.colorPaletteGreen800,
    'palette-green-900': tokens__namespace.colorPaletteGreen900,
    'palette-grey-50': tokens__namespace.colorPaletteGrey50,
    'palette-grey-100': tokens__namespace.colorPaletteGrey100,
    'palette-grey-200': tokens__namespace.colorPaletteGrey200,
    'palette-grey-300': tokens__namespace.colorPaletteGrey300,
    'palette-grey-400': tokens__namespace.colorPaletteGrey400,
    'palette-grey-500': tokens__namespace.colorPaletteGrey500,
    'palette-grey-600': tokens__namespace.colorPaletteGrey600,
    'palette-grey-700': tokens__namespace.colorPaletteGrey700,
    'palette-grey-800': tokens__namespace.colorPaletteGrey800,
    'palette-grey-900': tokens__namespace.colorPaletteGrey900,
    'palette-indigo-50': tokens__namespace.colorPaletteIndigo50,
    'palette-indigo-100': tokens__namespace.colorPaletteIndigo100,
    'palette-indigo-200': tokens__namespace.colorPaletteIndigo200,
    'palette-indigo-300': tokens__namespace.colorPaletteIndigo300,
    'palette-indigo-400': tokens__namespace.colorPaletteIndigo400,
    'palette-indigo-500': tokens__namespace.colorPaletteIndigo500,
    'palette-indigo-600': tokens__namespace.colorPaletteIndigo600,
    'palette-indigo-700': tokens__namespace.colorPaletteIndigo700,
    'palette-indigo-800': tokens__namespace.colorPaletteIndigo800,
    'palette-indigo-900': tokens__namespace.colorPaletteIndigo900,
    'palette-orange-50': tokens__namespace.colorPaletteOrange50,
    'palette-orange-100': tokens__namespace.colorPaletteOrange100,
    'palette-orange-200': tokens__namespace.colorPaletteOrange200,
    'palette-orange-300': tokens__namespace.colorPaletteOrange300,
    'palette-orange-400': tokens__namespace.colorPaletteOrange400,
    'palette-orange-500': tokens__namespace.colorPaletteOrange500,
    'palette-orange-600': tokens__namespace.colorPaletteOrange600,
    'palette-orange-700': tokens__namespace.colorPaletteOrange700,
    'palette-orange-800': tokens__namespace.colorPaletteOrange800,
    'palette-orange-900': tokens__namespace.colorPaletteOrange900,
    'palette-pink-50': tokens__namespace.colorPalettePink50,
    'palette-pink-100': tokens__namespace.colorPalettePink100,
    'palette-pink-200': tokens__namespace.colorPalettePink200,
    'palette-pink-300': tokens__namespace.colorPalettePink300,
    'palette-pink-400': tokens__namespace.colorPalettePink400,
    'palette-pink-500': tokens__namespace.colorPalettePink500,
    'palette-pink-600': tokens__namespace.colorPalettePink600,
    'palette-pink-700': tokens__namespace.colorPalettePink700,
    'palette-pink-800': tokens__namespace.colorPalettePink800,
    'palette-pink-900': tokens__namespace.colorPalettePink900,
    'palette-purple-50': tokens__namespace.colorPalettePurple50,
    'palette-purple-100': tokens__namespace.colorPalettePurple100,
    'palette-purple-200': tokens__namespace.colorPalettePurple200,
    'palette-purple-300': tokens__namespace.colorPalettePurple300,
    'palette-purple-400': tokens__namespace.colorPalettePurple400,
    'palette-purple-500': tokens__namespace.colorPalettePurple500,
    'palette-purple-600': tokens__namespace.colorPalettePurple600,
    'palette-purple-700': tokens__namespace.colorPalettePurple700,
    'palette-purple-800': tokens__namespace.colorPalettePurple800,
    'palette-purple-900': tokens__namespace.colorPalettePurple900,
    'palette-red-50': tokens__namespace.colorPaletteRed50,
    'palette-red-100': tokens__namespace.colorPaletteRed100,
    'palette-red-200': tokens__namespace.colorPaletteRed200,
    'palette-red-300': tokens__namespace.colorPaletteRed300,
    'palette-red-400': tokens__namespace.colorPaletteRed400,
    'palette-red-500': tokens__namespace.colorPaletteRed500,
    'palette-red-600': tokens__namespace.colorPaletteRed600,
    'palette-red-700': tokens__namespace.colorPaletteRed700,
    'palette-red-800': tokens__namespace.colorPaletteRed800,
    'palette-red-900': tokens__namespace.colorPaletteRed900,
    'palette-yellow-50': tokens__namespace.colorPaletteYellow50,
    'palette-yellow-100': tokens__namespace.colorPaletteYellow100,
    'palette-yellow-200': tokens__namespace.colorPaletteYellow200,
    'palette-yellow-300': tokens__namespace.colorPaletteYellow300,
    'palette-yellow-400': tokens__namespace.colorPaletteYellow400,
    'palette-yellow-500': tokens__namespace.colorPaletteYellow500,
    'palette-yellow-600': tokens__namespace.colorPaletteYellow600,
    'palette-yellow-700': tokens__namespace.colorPaletteYellow700,
    'palette-yellow-800': tokens__namespace.colorPaletteYellow800,
    'palette-yellow-900': tokens__namespace.colorPaletteYellow900,
    'data-viz-danger-fill': tokens__namespace.colorDataVizDangerFill,
    'data-viz-danger-hover': tokens__namespace.colorDataVizDangerHover,
    'data-viz-danger-line': tokens__namespace.colorDataVizDangerLine,
    'data-viz-neutral-fill': tokens__namespace.colorDataVizNeutralFill,
    'data-viz-neutral-hover': tokens__namespace.colorDataVizNeutralHover,
    'data-viz-primary-fill': tokens__namespace.colorDataVizPrimaryFill,
    'data-viz-primary-fill-alt': tokens__namespace.colorDataVizPrimaryFillAlt,
    'data-viz-primary-hover': tokens__namespace.colorDataVizPrimaryHover,
    'data-viz-primary-line': tokens__namespace.colorDataVizPrimaryLine,
    'data-viz-secondary-fill': tokens__namespace.colorDataVizSecondaryFill,
    'data-viz-secondary-fill-alt': tokens__namespace.colorDataVizSecondaryFillAlt,
    'data-viz-secondary-hover': tokens__namespace.colorDataVizSecondaryHover,
    'data-viz-secondary-line': tokens__namespace.colorDataVizSecondaryLine,
    'data-viz-tertiary-fill': tokens__namespace.colorDataVizTertiaryFill,
    'data-viz-tertiary-fill-alt': tokens__namespace.colorDataVizTertiaryFillAlt,
    'data-viz-tertiary-hover': tokens__namespace.colorDataVizTertiaryHover,
    'data-viz-tertiary-line': tokens__namespace.colorDataVizTertiaryLine,
    'data-viz-warning-fill': tokens__namespace.colorDataVizWarningFill,
    'data-viz-warning-hover': tokens__namespace.colorDataVizWarningHover,
    'data-viz-warning-line': tokens__namespace.colorDataVizWarningLine,
    // Adding empty values to preserve theme types.
    'brand-default': '',
    'brand-active': '',
    'brand-hover': '',
    'brand-gradient': '',
    'background-danger': '',
    'background-primary': '',
    'background-secondary': '',
    'background-side-nav': '',
    'background-success': '',
    'background-surface': '',
    'background-tertiary': '',
    'background-top-nav': '',
    'background-warning': '',
    'border-danger': '',
    'border-disabled': '',
    'border-primary': '',
    'border-success': '',
    'border-warning': '',
    'primary-default': '',
    'primary-active': '',
    'primary-hover': '',
    'text-contrast': '',
    'text-danger': '',
    'text-disabled': '',
    'text-primary': '',
    'text-secondary': '',
    'text-success': '',
    'text-tertiary': '',
    'text-warning': ''
  },
  fonts: {
    mono: tokens__namespace.fontFamilyMono,
    text: tokens__namespace.fontFamilyText
  },
  fontSizes: {
    large: tokens__namespace.fontSizeLarge,
    medium: tokens__namespace.fontSizeMedium,
    small: tokens__namespace.fontSizeSmall,
    'x-large': tokens__namespace.fontSizeXLarge,
    'x-small': tokens__namespace.fontSizeXSmall,
    'xx-large': tokens__namespace.fontSizeXxLarge
  },
  fontWeights: {
    bold: tokens__namespace.fontWeightBold,
    regular: tokens__namespace.fontWeightRegular,
    semibold: tokens__namespace.fontWeightSemibold
  },
  letterSpacings: {
    large: tokens__namespace.letterSpacingLarge,
    medium: tokens__namespace.letterSpacingMedium,
    small: tokens__namespace.letterSpacingSmall,
    'x-small': tokens__namespace.letterSpacingXSmall
  },
  lineHeights: {
    large: tokens__namespace.lineHeightLarge,
    medium: tokens__namespace.lineHeightMedium,
    small: tokens__namespace.lineHeightSmall,
    'x-large': tokens__namespace.lineHeightXLarge,
    'x-small': tokens__namespace.lineHeightXSmall,
    'xx-large': tokens__namespace.lineHeightXxLarge
  },
  radii: {
    full: tokens__namespace.radiusFull,
    small: tokens__namespace.radiusSmall
  },
  shadows: {
    large: tokens__namespace.shadowLarge,
    medium: tokens__namespace.shadowMedium,
    small: tokens__namespace.shadowSmall
  },
  sizes: {
    large: tokens__namespace.sizeLarge,
    medium: tokens__namespace.sizeMedium,
    small: tokens__namespace.sizeSmall,
    'x-large': tokens__namespace.sizeXLarge
  },
  space: {
    medium: tokens__namespace.spaceMedium,
    small: tokens__namespace.spaceSmall,
    large: tokens__namespace.spaceLarge,
    'x-large': tokens__namespace.spaceXLarge,
    'x-small': tokens__namespace.spaceXSmall
  },
  zIndices: {
    dropdown: tokens__namespace.zIndexDropdown,
    modal: tokens__namespace.zIndexModal,
    overlay: tokens__namespace.zIndexOverlay,
    popover: tokens__namespace.zIndexPopover,
    sticky: tokens__namespace.zIndexSticky,
    tooltip: tokens__namespace.zIndexTooltip
  }
};
const lightTheme = merge__default.default(baseTheme, {
  colors: {
    'background-danger': tokens__namespace.colorBackgroundDanger,
    'background-primary': tokens__namespace.colorBackgroundPrimary,
    'background-secondary': tokens__namespace.colorBackgroundSecondary,
    'background-side-nav': tokens__namespace.colorBackgroundSideNav,
    'background-success': tokens__namespace.colorBackgroundSuccess,
    'background-surface': tokens__namespace.colorBackgroundSurface,
    'background-tertiary': tokens__namespace.colorBackgroundTertiary,
    'background-top-nav': tokens__namespace.colorBackgroundTopNav,
    'background-warning': tokens__namespace.colorBackgroundWarning,
    'border-danger': tokens__namespace.colorBorderDanger,
    'border-disabled': tokens__namespace.colorBorderDisabled,
    'border-primary': tokens__namespace.colorBorderPrimary,
    'border-success': tokens__namespace.colorBorderSuccess,
    'border-warning': tokens__namespace.colorBorderWarning,
    'brand-default': tokens__namespace.colorBrandDefault,
    'brand-active': tokens__namespace.colorBrandActive,
    'brand-hover': tokens__namespace.colorBrandHover,
    'brand-gradient': tokens__namespace.colorBrandGradient,
    'primary-default': tokens__namespace.colorPrimaryDefault,
    'primary-active': tokens__namespace.colorPrimaryActive,
    'primary-hover': tokens__namespace.colorPrimaryHover,
    'text-contrast': tokens__namespace.colorTextContrast,
    'text-danger': tokens__namespace.colorTextDanger,
    'text-disabled': tokens__namespace.colorTextDisabled,
    'text-primary': tokens__namespace.colorTextPrimary,
    'text-secondary': tokens__namespace.colorTextSecondary,
    'text-success': tokens__namespace.colorTextSuccess,
    'text-tertiary': tokens__namespace.colorTextTertiary,
    'text-warning': tokens__namespace.colorTextWarning
  }
});
const BASE_FONT_SIZE = 16;

const pxToRem = value => `${value / BASE_FONT_SIZE}rem`;

exports.lightTheme = lightTheme;
exports.pxToRem = pxToRem;
//# sourceMappingURL=index.js.map
