import { Primitive } from '@radix-ui/react-primitive';
import { ManifestProps } from '../../types';
import { styled } from '../../styles';

export interface BoxProps extends ManifestProps, React.ComponentProps<typeof Box> {}

export const Box = styled(Primitive.div, { boxSizing: 'border-box', margin: 0, minWidth: 0 });
