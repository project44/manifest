import type { CSS } from '@project44-manifest/react-styles';

export type TypographyElement = 'p';

export interface TypographyProps {
  /** Theme aware style object */
  css?: CSS;
  /** Whether the element is a paragraph and should have margin bottom */
  paragraph?: boolean;
  /**
   * The display variant of the text.
   *
   * @default 'body'
   */
  variant?: TypographyVariant;
}

export type TypographyVariant =
  | 'body'
  | 'bodyBold'
  | 'caption'
  | 'captionBold'
  | 'display'
  | 'heading'
  | 'subtext'
  | 'subtextBold'
  | 'subtitle'
  | 'title';
