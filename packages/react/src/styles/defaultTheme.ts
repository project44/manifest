import { theme as designTokens } from '@manifest/design-tokens';
import { utils } from './utils';

const {
  borderWidth,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  radius,
  shadow,
  size,
  space,
  zIndex,
} = designTokens;

const media = {
  lg: `(min-width: ${size.large})`,
  md: `(min-width: ${size.medium})`,
  sm: `(min-width: ${size.small})`,
  xl: `(min-width: ${size['x-large']})`,
};

const createTransition = (properties: string[]) => {
  return properties.map(property => `${property} cubic-bezier(0.4, 0, 0.2, 1) 250ms`).join(',');
};

const transitions = {
  all: createTransition(['all']),
  color: createTransition([
    'color',
    'background-color',
    'border-color',
    'text-decoration-color',
    'fill',
    'stroke',
  ]),
  default: createTransition([
    'color',
    'background-color',
    'border-color',
    'text-decoration-color',
    'fill',
    'stroke',
    'opacity',
    'box-shadow',
    'transform',
    'filter',
    'backdrop-filter',
  ]),
  opacity: createTransition(['opacity']),
  shadow: createTransition(['box-shadow']),
  transform: createTransition(['transform']),
};

const theme = {
  borderWidth: borderWidth,
  colors: color,
  fonts: fontFamily,
  fontSizes: fontSize,
  fontWeights: fontWeight,
  letterSpacings: letterSpacing,
  lineHeights: lineHeight,
  radii: radius,
  shadows: shadow,
  sizes: size,
  space,
  transitions,
  zIndices: zIndex,
};

export const defaultTheme = {
  prefix: 'manifest',
  media,
  theme,
  utils,
};
