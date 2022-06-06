import { styled } from '../../styles';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export const StyledTag = styled('div', {
  alignItems: 'center',
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
    variant: {
      filled: {
        backgroundColor: '$palette-grey-100',
      },
      outlined: {
        border: '1px solid $palette-grey-200',
      },
    },
  },

  defaultVariants: {
    variant: 'outlined',
  },
});

export const StyledDismissIcon = styled(Icon, {
  cursor: 'pointer',
  fontSize: '1rem',
  marginRight: '6px',
  size: '1rem',
});

export const StyledTagText = styled(Typography, {
  color: 'inherit',
  overflow: 'hidden',
  px: '$x-small',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
