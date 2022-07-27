import { css } from '../../styles';

export const useStyles = css({
  borderBottom: '1px solid $colors$border-primary',
  color: '$text-primary',
  overflow: 'hidden',
  padding: '$medium $large',
  textOverflow: 'ellipsis',
  typography: '$subtext',
  verticalAlign: 'inherit',
  whiteSpace: 'nowrap',

  variants: {
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
      justify: {
        textAlign: 'justify',
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
});
