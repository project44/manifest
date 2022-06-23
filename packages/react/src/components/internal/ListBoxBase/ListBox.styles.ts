import { styled } from '../../../styles';
import { Typography } from '../../Typography';

export const StyledListBox = styled('div', {
  boxSizing: 'border-box',
  margin: 0,
  outline: 'none',
  padding: 0,
  position: 'relative',
});

export const StyledListBoxItem = styled('div', {
  $$listBoxItemBackgroundColor: 'transparent',

  alignItems: 'center',
  backgroundColor: '$$listBoxItemBackgroundColor',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  cursor: 'pointer',
  display: 'flex',
  outline: 'none',
  padding: '$small',
  position: 'relative',
  transition: '$color',
  typography: '$subtext',

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.57,
      },
    },
    isFocused: {
      true: {
        $$listBoxItemBackgroundColor: '$colors$background-secondary',
      },
    },
    isHovered: {
      true: {
        $$listBoxItemBackgroundColor: '$colors$background-secondary',
      },
    },
    isPressed: {
      true: {
        $$listBoxItemBackgroundColor: '$colors$background-secondary',
      },
    },
    isSelected: {
      true: {
        $$listBoxItemBackgroundColor: '$colors$background-secondary',
      },
    },
  },
});

export const StyledListBoxItemText = styled(Typography, {
  display: 'block',
  flex: '1 1 0%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const StyledListBoxItemIcon = styled('span', {
  alignSelf: 'center',
  color: '$text-secondary',
  display: 'inline-flex',
  flexShrink: 0,

  variants: {
    placement: {
      end: {
        marginLeft: '$small',
      },
      start: {
        marginRight: '$small',
      },
    },
  },
});

export const StyledListBoxSection = styled('div', { margin: 0, padding: 0 });

export const StyledListBoxSectionTitle = styled(Typography, {
  color: '$text-tertiary',
  px: '$x-small',
});
