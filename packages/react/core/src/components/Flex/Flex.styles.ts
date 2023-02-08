import { css } from '@project44-manifest/react-styles';

export const useStyles = css({
  display: 'flex',

  variants: {
    align: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
    },
    gap: {
      large: {
        gap: '$large',
      },
      medium: {
        gap: '$medium',
      },
      small: {
        gap: '$small',
      },
      'x-large': {
        gap: '$x-large',
      },
      'x-small': {
        gap: '$x-small',
      },
    },
    justify: {
      around: { justifyContent: 'space-around' },
      between: { justifyContent: 'space-between' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      start: { justifyContent: 'flex-start' },
    },
    orientation: {
      horizontal: { flexDirection: 'row' },
      vertical: { flexDirection: 'column' },
    },
    wrap: {
      false: {},
      true: { flexWrap: 'wrap' },
    },
  },
});
