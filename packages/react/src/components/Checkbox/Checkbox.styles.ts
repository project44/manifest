import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { focus, styled } from '../../styles';

export const StyledCheckbox = styled(
  CheckboxPrimitive.Root,
  {
    $$checkboxSize: '1.125rem',

    alignItems: 'center',
    backgroundColor: '$background-primary',
    border: '2px solid $palette-grey-500',
    borderRadius: '$small',
    color: '$contrast-primary',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    size: '$$checkboxSize',
    transition: '$color',
    userSelect: 'none',
    verticalAlign: 'top',

    '&:disabled': {
      opacity: 0.38,
      pointerEvents: 'none',
    },

    '&:hover': {
      borderColor: '$palette-grey-600',
    },

    '&[data-state="checked"]': {
      backgroundColor: '$primary',
      borderColor: '$primary',
    },

    [`& .manifest-icon`]: {
      fontSize: '$$checkboxSize',
    },
  },
  focus,
);

export const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export const StyledCheckboxLabel = styled('label', {
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  variants: {
    isDisabled: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
});

export const StyledCheckboxText = styled('span', {
  fontFamily: '$text',
  fontSize: '$small',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  marginLeft: '$small',
});
