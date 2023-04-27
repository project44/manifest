import { styled } from '@project44-manifest/react-styles';
import { MenuItem } from '../MenuItem';

export const StyledMenuItem = styled(MenuItem, {
  variants: {
    isOpen: {
      true: {
        '.manifest-menu-item__label': {
          opacity: 1,
        },
      },
      false: {
        '.manifest-menu-item__label': {
          opacity: 0,
        },
      },
    },
  },
});
