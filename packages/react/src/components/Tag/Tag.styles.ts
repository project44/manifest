import { css } from '../../styles';

export const useTagStyles = css({
  alignItems: 'center',
  appearance: 'none',
  background: 'none',
  border: '1px solid $colors$palette-grey-200',
  borderRadius: '$small',
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'inline-flex',
  height: '1.5rem',
  justifyContent: 'center',
  outline: 0,
  padding: '0.1875rem $small',
  textDecoration: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  '.manifest-tag--button': {
    padding: 0,
    margin: 0,
    marginLeft: '$x-small',
    size: '1rem',
  },

  '.manifest-tag--icon': {
    fontSize: '$medium',
    size: '1rem',
  },

  '.manifest-tag--text': {
    color: 'inherit',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  variants: {
    isRemovable: {
      true: {
        paddingRight: '0.375rem',
      },
    },
  },
});

export type { CSS } from '../../styles';
export { cx } from '../../styles';
