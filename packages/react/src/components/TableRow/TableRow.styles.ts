import { css } from '../../styles';

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
