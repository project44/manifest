import { focusVisible, styled } from '../../styles';

export const StyledLink = styled(
  'a',
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

    variants: {
      isHovered: {
        true: {
          textDecoration: 'underline',
        },
      },
    },
  },
  focusVisible,
);
