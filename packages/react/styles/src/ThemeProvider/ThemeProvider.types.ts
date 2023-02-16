import type { CreateTheme, CSS } from '../stitches';

export type ThemeProviderElement = 'div';

export interface ThemeProviderProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Whether to disable the baseline css.
   *
   * @default false;
   */
  disableCSSBaseline?: boolean;
  /**
   * Theme to apply to children elements.
   */
  theme?: CreateTheme;
}
