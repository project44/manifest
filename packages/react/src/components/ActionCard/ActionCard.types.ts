import type { CSS } from '@project44-manifest/react-styles';

export type ActionCardElement = 'a';

export interface ActionCardProps {
  /**
   * Theme aware style object
   */
  css?: CSS;

  /**
   * The href link to navigate to when the card is clicked
   */
  href: string;
}
