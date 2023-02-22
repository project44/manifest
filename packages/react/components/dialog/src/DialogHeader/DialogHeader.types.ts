import type { IconButton } from '@project44-manifest/react-button';
import type { CSS } from '@project44-manifest/react-styles';
import type { Typography } from '@project44-manifest/react-typography';

export type DialogHeaderElement = 'div';

export interface DialogHeaderProps {
  /**
   * Theme aware style object
   */
  css?: CSS;
  /**
   * Props bassed to the button component.
   */
  buttonProps?: React.ComponentProps<typeof IconButton>;
  /**
   * Props bassed to the typography component.
   */
  typographyProps?: React.ComponentProps<typeof Typography>;
}
