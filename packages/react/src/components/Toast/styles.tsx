import { css } from '../../styles';

export const useStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$small $large',
  color: '$palette-white',
  boxShadow: '$medium',
  borderRadius: '$small',
  width: 'max-content',
  maxWidth: '100%',

  '.manifest-toast_body': {
    display: 'flex',
    padding: '$x-small 0',
    width: 'max-content',
  },

  '.manifest-toast_controls': {
    display: 'flex',
    padding: '$x-small 0',
  },

  '.manifest-toast_actions': {
    display: 'flex',
    marginLeft: '$small',

    '> button': {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      margin: '0 $x-small',
      fontWeight: '$semibold',
      color: '$pallete-white',
    },
  },

  '.manifest-toast_close': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '$x-small',
    padding: '0 $x-small',
    background: 'none',
    border: 'none',
    color: '$palette-white',
  },

  defaultVariants: {
    variant: 'default',
  },

  variants: {
    variant: {
      default: {
        background: '$palette-black',
      },
      error: {
        background: '$palette-red-700',
      },
      warning: {
        background: '$palette-red-500',
      },
      success: {
        background: '$palette-green-500',
      },
    },
  },
});
