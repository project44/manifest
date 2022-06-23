import { focus, styled } from '../../styles';
import { Typography } from '../Typography';

export const StyledSwitch = styled(
  'div',
  {
    $$switchBackgroundColor: '$colors$palette-grey-500',

    alignItems: 'center',
    backgroundColor: '$$switchBackgroundColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$white',
    display: 'inline-flex',
    height: '1.5rem',
    margin: 0,
    padding: 0,
    position: 'relative',
    width: '2.75rem',

    variants: {
      isChecked: {
        true: {
          $$switchBackgroundColor: '$colors$primary',
        },
      },
      isHovered: {
        true: {
          $$switchBackgroundColor: '$colors$palette-grey-600',
        },
      },
    },
  },
  focus,
);

export const StyledSwitchIndicator = styled('span', {
  backgroundColor: '$white',
  borderRadius: '$full',
  display: 'block',
  size: '1.125rem',
  transform: 'translateX(3px)',
  transition: '$transform',
  willChange: 'transform',

  variants: {
    isChecked: {
      true: {
        transform: 'translateX(23px)',
      },
    },
  },
});

export const StyledSwitchLabel = styled('label', {
  alignItems: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.58,
        pointerEvents: 'none',
      },
    },
  },
});

export const StyledSwitchText = styled(Typography, { marginLeft: '$small' });
