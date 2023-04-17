import { pxToRem, styled } from '@project44-manifest/react-styles';

export const StyledDataTable = styled('div', {
  $$tableBackgroundColor: '$colors$background-primary',

  backgroundColor: '$$tableBackgroundColor',
  boxSizing: 'border-box',
  color: '$text-primary',
  border: '1px solid $border-primary',
  borderRadius: '$small',

  '.manifest-data-table__container': {
    maxWidth: '100%',
    overflow: 'auto',
    width: '100%',

    '&--sticky-header': {
      maxHeight: 'clamp(350px, calc(100vh - 0px), 9999px)',
    },

    '&--sticky-header, &--pagination': {
      maxHeight: 'clamp(350px, calc(100vh - 48px), 9999px)',
    },
  },

  '.manifest-data-table__checkbox': {
    alignItems: 'center',
    display: 'flex',
  },

  '.manifest-data-table__footer': {
    alignItems: 'center',
    borderTop: '1px solid $border-primary',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: pxToRem(48),
    px: pxToRem(12),

    '> .manifest-pagination': {
      width: '100%',
    },
  },

  '.manifest-table': {
    borderCollapse: 'separate',
    borderSpacing: 0,
    display: 'table',
    width: '100%',

    '&__cell': {
      borderBottom: '1px solid $border-primary',
      display: 'table-cell',
      fontSize: '$small',
      fontWeight: '$regular',
      lineHeight: '$small',
      padding: `${pxToRem(6)} ${pxToRem(12)}`,
      textAlign: 'left',
      verticalAlign: 'inherit',

      '&--pinned': {
        backgroundColor: '$$tableBackgroundColor',
        position: 'sticky',
        zIndex: 1,
      },
    },

    '&__cell--header': {
      fontSize: '$x-small',
      fontWeight: '$semibold',
      lineHeight: '$x-small',

      '&.manifest-table__cell--pinned': {
        zIndex: 2,
      },
    },

    '&__cell--sticky-header': {
      backgroundColor: '$$tableBackgroundColor',
      position: 'sticky',
      top: 0,
      zIndex: 1,
    },

    '&__header': {
      display: 'table-row-group',
    },

    '&__row': {
      color: 'inherit',
      display: 'table-row',
      verticalAlign: 'middle',
      outine: 0,
    },
  },

  '.manifest-table__heading': {
    appearance: 'none',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    borderRadius: '$small',
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: 'inherit',
    gap: '$small',
    lineHeight: 'inherit',
    mx: '-$x-small',
    padding: `$x-small ${pxToRem(6)}`,

    '&:hover': {
      backgroundColor: '$background-secondary',
    },
  },
});
