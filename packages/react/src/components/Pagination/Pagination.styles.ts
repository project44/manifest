import { focus, css } from '../../styles';

export const usePaginationStyles = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  columnGap: '$x-small',
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '$small',

  '.manifest-pagination--ellipsis': {
    backgroundColor: '$palette-grey-50',
    border: '1px solid $colors$palette-grey-200',
    borderRadius: '$small',
    boxSizing: 'border-box',
    display: 'inline-flex',
    margin: 0,
    outline: 0,
    position: 'relative',
    padding: '0.375rem 0.75rem',
  },
});

export const usePaginationButtonStyles = css(
  {
    $$backgroundColor: '$colors$palette-grey-50',

    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '$$backgroundColor',
    border: '1px solid $colors$palette-grey-200',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$text-secondary',
    cursor: 'pointer',
    display: 'inline-flex',
    margin: 0,
    outline: 0,
    position: 'relative',
    padding: '0.375rem 0.75rem',
    transition: '$color',
    textDecoration: 'none',
    userSelect: 'none',
    width: 'auto',

    '.manifest-icon': {
      fontSize: '1.125rem',
    },

    '.manifest-pagination-item--icon__end': {
      marginLeft: '$x-small',
    },

    '.manifest-pagination-item--icon__start': {
      marginRight: '$x-small',
    },

    variants: {
      isActive: {
        true: {
          $$backgroundColor: '$colors$palette-grey-200',
        },
      },
      isDisabled: {
        true: {
          opacity: 0.37,
          pointerEvents: 'none',
        },
      },
      isHovered: {
        true: {
          $$backgroundColor: '$colors$palette-grey-100',
        },
      },
      isPressed: {
        true: {},
      },
    },

    compoundVariants: [
      {
        isActive: true,
        isHovered: true,
        css: {
          $$backgroundColor: '$colors$palette-grey-200',
        },
      },
    ],
  },
  focus,
);

export type { CSS } from '../../styles';
export { cx } from '../../styles';
