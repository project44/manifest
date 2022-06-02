import { Primitive } from '@radix-ui/react-primitive';
import { styled } from '../../styles';

export const Box = styled(Primitive.div, { boxSizing: 'border-box', margin: 0, minWidth: 0 });
