import { css } from '../stitches';
import { pxToRem } from '../utils';

export const table = css({
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
});

export const tableBody = css({});

export const tableCell = css({
  $$paddingYDense: pxToRem(12),

  borderBottom: '1px solid $colors$border-primary',
  color: '$text-primary',
  overflow: 'hidden',
  padding: '$medium $large',
  textOverflow: 'ellipsis',
  typography: '$subtext',
  verticalAlign: 'inherit',
  whiteSpace: 'nowrap',

  variants: {
    isDense: {
      true: {
        padding: '$$paddingYDense $medium',
      },
    },
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

export const tableColumn = css({
  borderBottom: '1px solid $colors$border-primary',
  color: '$text-secondary',
  cursor: 'default',
  height: pxToRem(56),
  position: 'relative',
  px: '$large',
  typography: '$subtext-bold',
  userSelect: 'none',

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
    isActive: {
      true: {
        color: '$primary',
      },
    },
    isSortable: {
      true: {
        cursor: 'pointer',
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
});

export const tableFooter = css({});

export const tableHeader = css({
  borderBottom: '2px solid $colors$border$primary',
});

export const tableRow = css({
  overflow: 'visible',
});
