/**
 * Make the stitches ConfigType available to for theme typing.
 */
declare namespace ConfigType {
  /** Theme interface. */
  export type Theme<T = {}> = {
    [Scale in keyof T]: {
      [Token in keyof T[Scale]]: T[Scale][Token] extends boolean | number | string
        ? T[Scale][Token]
        : boolean | number | string;
    };
  } & {
    borderWidths?: { [token in number | string]: boolean | number | string };
    colors?: { [token in number | string]: boolean | number | string };
    fonts?: { [token in number | string]: boolean | number | string };
    fontSizes?: { [token in number | string]: boolean | number | string };
    fontWeights?: { [token in number | string]: boolean | number | string };
    letterSpacings?: { [token in number | string]: boolean | number | string };
    lineHeights?: { [token in number | string]: boolean | number | string };
    radii?: { [token in number | string]: boolean | number | string };
    shadows?: { [token in number | string]: boolean | number | string };
    sizes?: { [token in number | string]: boolean | number | string };
    space?: { [token in number | string]: boolean | number | string };
    transitions?: { [token in number | string]: boolean | number | string };
    zIndices?: { [token in number | string]: boolean | number | string };
  };
}

export interface Theme {
  className?: string;
  theme?: ConfigType.Theme;
}
