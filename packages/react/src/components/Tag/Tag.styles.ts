import { styled } from '../../styles';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

export const StyledTag = styled('div', {
  all: 'unset',

  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: 'none',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'inline-flex',
  height: '1.5rem',
  justifyContent: 'center',
  outline: 0,
  padding: 0,
  textDecoration: 'none',
  transition: '$color',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  variants: {
    isDisabled: {
      true: {
        opacity: 0.32,
        pointerEvents: 'none',
      },
    },
    isClickable: {
      true: {},
    },
    variant: {
      filled: {
        backgroundColor: '$palette-grey-100',
      },
      outlined: {
        border: '1px solid $palette-grey-200',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'outlined',
      isClickable: true,
      css: {
        '&:hover': {
          backgroundColor: '$palette-grey-50',
          borderColor: '$palette-grey-400',
        },

        '&:focus': {
          backgroundColor: '$palette-grey-100',
          borderColor: '$palette-grey-400',
        },

        '&:active': {
          backgroundColor: '$palette-grey-200',
          borderColor: '$palette-grey-400',
        },
      },
    },
    {
      variant: 'filled',
      isClickable: true,
      css: {
        '&:hover': {
          backgroundColor: '$palette-grey-200',
        },

        '&:focus': {
          backgroundColor: '$palette-grey-300',
        },

        '&:active': {
          backgroundColor: '$palette-grey-400',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'outlined',
  },
});

export const StyledRemoveButton = styled(IconButton, {
  marginRight: '$xx-small',

  variants: {
    size: {
      small: {
        padding: '0.125rem',
      },
    },
  },
});

export const StyledRemoveIcon = styled(Icon, {
  fontSize: '1rem',
  size: '1rem',
});

export const StyledTagText = styled(Typography, {
  color: 'inherit',
  overflow: 'hidden',
  px: '$x-small',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
