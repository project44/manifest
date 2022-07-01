import { css } from '@project44-manifest/styles';

export const useFlexStyles = css({
  display: 'flex',

  variants: {
    align: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
    },
    orientation: {
      horizontal: { flexDirection: 'row' },
      vertical: { flexDirection: 'column' },
    },
    justify: {
      around: { justifyContent: 'space-around' },
      between: { justifyContent: 'space-between' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      start: { justifyContent: 'flex-start' },
    },
    wrap: {
      false: {},
      true: { flexWrap: 'wrap' },
    },
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';
