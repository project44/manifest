import { styled } from '../../styles';
import { Typography } from '../Typography';

export const StyledFormControlHelperText = styled(Typography, {
  color: '$text-tertiary',
  marginTop: '$xx-small',

  variants: {
    isInvalid: {
      true: {
        color: '$text-danger',
      },
    },
  },
});

export const StyledFormControl = styled('div', {
  border: 0,
  display: 'inline-flex',
  margin: 0,
  padding: 0,
  position: 'relative',
  width: '100%',

  variants: {
    orientation: {
      horizonal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizonal',
  },
});

export const StyledFormControlLabel = styled('label', {
  color: '$text-secondary',
  padding: 0,
  marginBottom: '$x-small',
  position: 'relative',
  typography: '$subtext',

  variants: {
    isInvalid: {
      true: {
        color: '$text-danger',
      },
    },
  },
});

export const StyledRequiredIndicator = styled('span');
