import type { CSS } from '@project44-manifest/react-styles';

export type FlexElement = 'div';

export interface FlexProps {
  /**
   * The alignment of the container's children.
   */
  align?: 'baseline' | 'center' | 'end' | 'start';
  /** Theme aware style object */
  css?: CSS;
  /**
   * The gap between rows and columns.
   */
  gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * The justification of the container's children.
   */
  justify?: 'around' | 'between' | 'center' | 'end' | 'start';
  /**
   * The orientation of the container's children.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether the container's should wrap when overflown.
   */
  wrap?: boolean;
}
