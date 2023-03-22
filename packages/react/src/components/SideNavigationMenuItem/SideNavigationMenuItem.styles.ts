import { styled } from '@project44-manifest/react-styles';
import { MenuItem } from '../MenuItem';

export const StyledMenuItem = styled(MenuItem, {
  variants: {
    isOpen: {
      true: {},
      false: {},
    },
  },
});
