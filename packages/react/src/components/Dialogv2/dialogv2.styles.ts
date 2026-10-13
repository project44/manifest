import { pxToRem, styled } from '@project44-manifest/react-styles';

export const DialogV2Wrapper = styled('div', {
  display: 'flex',
  backgroundColor: '$background-primary',
  borderRadius: '$small',
  boxShadow: '$small',
  boxSizing: 'border-box',
  flexDirection: 'column',
  outline: 0,
  padding: '$large',
  position: 'relative',
  maxHeight: 'calc(100vh - 75px) !important',
  overflowY: 'auto',
  variants: {
    size: {
      small: {
        width: pxToRem(480),
      },
      medium: {
        width: pxToRem(640),
      },
      large: {
        width: pxToRem(960),
      },
    },
    edgeToEdge: {
      noPadding: {
        padding: '0px',
      },
    },
  },
  defaultVariants: {
    size: 'large',
    edgeToEdge: '',
  },
});
