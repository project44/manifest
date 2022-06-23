import { styled } from '../../styles';
import { Typography } from '../Typography';

export const StyledIcon = styled('span', {
  alignItems: 'center',
  borderRadius: '$full',
  color: '$white',
  display: 'flex',
  fontSize: '$medium',
  justifyContent: 'center',
  size: 20,

  '> .material-icons': {
    fontSize: '$medium',
  },
});

export const StyledText = styled(Typography, {
  borderBottomRightRadius: '$full',
  borderTopRightRadius: '$full',
  left: 24,
  padding: '3px 6px 3px 2px',
  position: 'absolute',
  width: 'max-content',
});

export const StyledPill = styled('div', {
  $$backgroundColor: 'tranparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'inline-flex',
  padding: '2px',
  position: 'relative',

  [`& ${StyledText}`]: {
    backgroundColor: '$$backgroundColor',
  },

  variants: {
    colorScheme: {
      indigo: {
        $$backgroundColor: '$colors$palette-indigo-50',

        [`& ${StyledText}`]: {
          color: '$palette-indigo-700',
        },

        [`& ${StyledIcon}`]: {
          backgroundColor: '$palette-indigo-700',
        },
      },
      red: {
        $$backgroundColor: '$colors$palette-red-50',

        [`& ${StyledText}`]: {
          color: '$palette-red-600',
        },

        [`& ${StyledIcon}`]: {
          backgroundColor: '$palette-red-600',
        },
      },
    },
    isOpen: {
      true: {
        borderBottomRightRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      },
    },
  },

  defaultVariants: {
    colorScheme: 'indigo',
  },
});
