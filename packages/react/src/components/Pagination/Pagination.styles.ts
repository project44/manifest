import { Primitive } from '@radix-ui/react-primitive';
import { focus, styled } from '../../styles';

export const StyledPagination = styled(Primitive.div, {
  alignItems: 'center',
  boxSizing: 'border-box',
  columnGap: '$x-small',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  rowGap: '$small',
});

export const StyledPaginationButton = styled(
  Primitive.button,
  {
    $$paginationBackgroundColor: '$colors$palette-grey-50',

    alignItems: 'center',
    appearance: 'none',
    backgroundColor: '$$paginationBackgroundColor',
    border: '1px solid $colors$palette-grey-200',
    borderRadius: '$small',
    boxSizing: 'border-box',
    color: '$text-secondary',
    cursor: 'pointer',
    display: 'inline-flex',
    margin: 0,
    outline: 0,
    position: 'relative',
    padding: '$xx-small $small',
    transition: '$color',
    textDecoration: 'none',
    userSelect: 'none',
    width: 'auto',

    '&:disabled': {
      backgroundColor: 'transparent',
      opacity: 0.38,
      pointerEvents: 'none',
    },

    '&:hover': {
      backgroundColor: '$palette-grey-100',
    },

    variants: {
      isActive: {
        true: {
          $$paginationBackgroundColor: '$colors$palette-grey-200',

          '&:hover': {
            backgroundColor: '$$paginationBackgroundColor',
          },
        },
      },
    },
  },
  focus,
);

export const StyledPaginationEllipsis = styled(Primitive.div, {
  height: 'auto',
  padding: '$xx-small $small',
  textAlign: 'center',
});
