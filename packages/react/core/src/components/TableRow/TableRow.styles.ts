import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  overflow: 'visible',

  variants: {
    isHovered: {
      true: {
        '.manifest-table-cell': {
          backgroundColor: '$palette-grey-50',
        },
      },
    },
  },
});
