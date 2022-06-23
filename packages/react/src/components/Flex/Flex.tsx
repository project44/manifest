import { ManifestProps } from '../../types';
import { styled } from '../../styles';

export interface FlexProps extends ManifestProps, React.ComponentPropsWithoutRef<typeof Flex> {}

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    align: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
    },
    direction: {
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
