import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { focus, styled } from '../../styles';

export const StyledRadio = styled(
  RadioGroupPrimitive.Item,
  {
    $$radioSize: '1.125rem',

    alignItems: 'center',
    backgroundColor: '$white',
    border: '3px solid $colors$palette-grey-500',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$white',
    display: 'inline-flex',
    justifyContent: 'center',
    size: '$$radioSize',
    transition: '$color',

    '&:disabled': {
      opacity: 0.38,
      pointerEvents: 'none',
    },

    '&:hover': {
      borderColor: '$palette-grey-600',
    },

    '&[data-state=checked]': {
      backgroundColor: '$primary',
      borderColor: 'transparent',
    },
  },
  focus,
);

export const StyledRadioIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  position: 'relative',

  '&::after': {
    backgroundColor: '$white',
    borderRadius: '$full',
    content: '""',
    display: 'block',
    size: '0.625rem',
  },
});

export const StyledRadioGroup = styled(RadioGroupPrimitive.Root, {
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  margin: 0,
  padding: 0,

  variants: {
    orientation: {
      horizontal: {
        flexFlow: 'row wrap',
      },
      vertical: {
        flexFlow: 'column wrap',
      },
    },
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

export const StyledRadioLabel = styled('label', {
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

export const StyledRadioText = styled('span', {
  fontFamily: '$text',
  fontSize: '$small',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  marginLeft: '$small',
});
