import { Cube } from '@project44-manifest/react-icons';
import { keyframes, pxToRem, styled } from '@project44-manifest/react-styles';

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const StyledSpinner = styled(Cube, {
  animation: `${rotate} 1.25s`,
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',

  variants: {
    size: {
      large: {
        fontSize: pxToRem(75),
      },
      medium: {
        fontSize: '$x-large',
      },
      small: {
        fontSize: '$medium',
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },

  '@media (prefers-reduced-motion)': {
    animation: `${rotate} 7s`,
  },
});
