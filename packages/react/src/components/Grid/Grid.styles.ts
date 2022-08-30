import { css } from '../../styles';

export const useStyles = css({
  boxSizing: 'border-box',
  display: 'grid',

  variants: {
    columnGap: {
      lg: {
        columnGap: '$large',
      },
      md: {
        columnGap: '$medium',
      },
      sm: {
        columnGap: '$small',
      },
      xl: {
        columnGap: '$x-large',
      },
      xs: {
        columnGap: '$x-small',
      },
    },
    gap: {
      lg: {
        gap: '$large',
      },
      md: {
        gap: '$medium',
      },
      sm: {
        gap: '$small',
      },
      xl: {
        gap: '$x-large',
      },
      xs: {
        gap: '$x-small',
      },
    },
    rowGap: {
      lg: {
        rowGap: '$large',
      },
      md: {
        rowGap: '$medium',
      },
      sm: {
        rowGap: '$small',
      },
      xl: {
        rowGap: '$x-large',
      },
      xs: {
        rowGap: '$x-small',
      },
    },
  },
});
