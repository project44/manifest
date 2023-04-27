import { styled } from '@project44-manifest/react-styles';
import { MenuGroup } from '../MenuGroup';

export const StyledMenuGroup = styled(MenuGroup, {
  variants: {
    isOpen: {
      true: {
        '.manifest-menu-item__label, .manifest-menu-item__icon--end': {
          opacity: 1,
        },
      },
      false: {
        '.manifest-menu-item__label, .manifest-menu-item__icon--end': {
          opacity: 0,
        },
      },
    },
  },
});
