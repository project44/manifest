import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  boxSizing: 'border-box',
  display: 'grid',

  variants: {
    columnGap: {
      large: {
        columnGap: '$large',
      },
      medium: {
        columnGap: '$medium',
      },
      small: {
        columnGap: '$small',
      },
      'x-large': {
        columnGap: '$x-large',
      },
      'x-small': {
        columnGap: '$x-small',
      },
    },
    gap: {
      large: {
        gap: '$large',
      },
      medium: {
        gap: '$medium',
      },
      small: {
        gap: '$small',
      },
      'x-large': {
        gap: '$x-large',
      },
      'x-small': {
        gap: '$x-small',
      },
    },
    rowGap: {
      large: {
        rowGap: '$large',
      },
      medium: {
        rowGap: '$medium',
      },
      small: {
        rowGap: '$small',
      },
      'x-large': {
        rowGap: '$x-large',
      },
      'x-small': {
        rowGap: '$x-small',
      },
    },
  },
});
