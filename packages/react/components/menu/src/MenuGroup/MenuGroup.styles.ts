import { ChevronDown } from '@project44-manifest/react-icons';
import { styled } from '@project44-manifest/react-styles';

export const StyledMenuGroup = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const StyledIcon = styled(ChevronDown, {
  color: '$text-secondary',
  transition: 'transform 100ms cubic-bezier(0.4, 0.14, 0.3, 1) 0ms',

  variants: {
    isExpanded: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});
