import { MenuItem } from '@project44-manifest/react-menu';
import { styled } from '@project44-manifest/react-styles';

export const StyledMenuItem = styled(MenuItem, {
  variants: {
    isOpen: {
      true: {},
      false: {},
    },
  },
});
