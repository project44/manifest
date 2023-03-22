import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  alignSelf: 'stretch',
  backgroundColor: '$border-primary',
  border: 'none',
  borderWidth: '1px',
  margin: 0,
  overflow: 'visible',

  variants: {
    orientation: {
      horizontal: {
        height: '1px',
        width: 'auto',
      },
      vertical: {
        height: 'auto',
        width: '1px',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
});
