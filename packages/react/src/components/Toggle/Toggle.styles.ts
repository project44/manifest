import * as SwitchPrimitive from '@radix-ui/react-switch';
import { focusVisible, styled } from '../../styles';

export const StyledToggle = styled(
  SwitchPrimitive.Root,
  {
    $$toggleBackgroundColor: '$colors$palette-grey-500',

    all: 'unset',

    alignItems: 'center',
    backgroundColor: '$$toggleBackgroundColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$white',
    display: 'inline-flex',
    height: '1.5rem',
    margin: 0,
    padding: 0,
    position: 'relative',
    transition: '$default',
    width: '2.75rem',

    '&:disabled': {
      opacity: 0.38,
      pointerEvents: 'none',
    },

    '&:hover': {
      backgroundColor: '$palette-grey-600',
    },

    '&[data-state="checked"]': {
      backgroundColor: '$primary',
    },
  },
  focusVisible,
);

export const StyledToggleIndicator = styled(SwitchPrimitive.Thumb, {
  backgroundColor: '$white',
  borderRadius: '$full',
  display: 'block',
  size: '1.125rem',
  transform: 'translateX(3px)',
  transition: '$transform',
  willChange: 'transform',

  '&[data-state="checked"]': { transform: 'translateX(23px)' },
});

export const StyledToggleLabel = styled('label', {
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
      },
    },
  },
});

export const StyledToggleText = styled('span', {
  fontFamily: '$text',
  fontSize: '$small',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  marginLeft: '$small',
});
