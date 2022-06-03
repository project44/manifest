import { ManifestProps } from '../../types';
import { styled } from '../../styles';

export interface BoxProps extends ManifestProps, React.ComponentPropsWithoutRef<typeof Box> {}

export const Box = styled('div', { boxSizing: 'border-box', margin: 0, minWidth: 0 });
