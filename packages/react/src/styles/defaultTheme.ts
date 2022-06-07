import { theme as designTokens } from '@manifest/design-tokens';
import { utils } from './utils';

const {
  borderWidths,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
} = designTokens;

const media = {
  lg: `(min-width: ${breakpoints.large})`,
  md: `(min-width: ${breakpoints.medium})`,
  sm: `(min-width: ${breakpoints.small})`,
  xl: `(min-width: ${breakpoints['x-large']})`,
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
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
};

export const defaultTheme = {
  prefix: 'manifest',
  media,
  theme,
  utils,
};
