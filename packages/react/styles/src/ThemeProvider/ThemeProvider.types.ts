import type { StitchesTheme } from '../stitches';

export interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * Whether to disable the baseline css.
   *
   * @default false;
   */
  disableCSSBaseline?: boolean;
  /**
   * Theme to apply to children elements.
   */
  theme?: StitchesTheme;
}
