import type { CSS } from '@project44-manifest/react-styles';

export type SpinnerElement = 'svg';

export type SpinnerSize = 'large' | 'medium' | 'small';

export interface SpinnerProps {
  /**
   * Theme aware style object
   */
  css?: CSS;

  /**
   * The size of the spinner
   *
   * @default 'large'
   */
  size?: SpinnerSize;
}
