import { focus, styled } from '../../styles';
import { Primitive } from '@radix-ui/react-primitive';

export const StyledLink = styled(
  Primitive.a,
  {
    alignItems: 'baseline',
    borderRadius: '$small',
    color: '$primary',
    display: 'inline-flex',
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$medium',
    textDecoration: 'none',
    width: 'fitContent',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  focus,
);
