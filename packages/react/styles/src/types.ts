export type StitchesTheme<T = {}> = {
  [Scale in keyof T]: {
    [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
      ? T[Scale][Token]
      : boolean | number | string;
  };
} & {
  fonts?: { [token in number | string]: boolean | number | string };
  fontSizes?: { [token in number | string]: boolean | number | string };
  fontWeights?: { [token in number | string]: boolean | number | string };
  lineHeights?: { [token in number | string]: boolean | number | string };
  letterSpacings?: { [token in number | string]: boolean | number | string };
  space?: { [token in number | string]: boolean | number | string };
  radii?: { [token in number | string]: boolean | number | string };
  zIndices?: { [token in number | string]: boolean | number | string };
  borderWeights?: { [token in number | string]: boolean | number | string };
  colors?: { [token in number | string]: boolean | number | string };
  shadows?: { [token in number | string]: boolean | number | string };
  breakpoints?: { [token in number | string]: boolean | number | string };
};
