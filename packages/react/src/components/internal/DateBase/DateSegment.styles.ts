import { styled } from '../../../styles';

export const StyledDateSegment = styled('div', {
  $$textColor: '$colors$text-primary',

  borderRadius: '$small',
  boxSizing: 'content-box',
  color: '$$textColor',
  fontVariantNumeric: 'tabular-nums',
  outline: 0,
  px: '$x-small',
  textAlign: 'end',

  '&:focus': {
    backgroundColor: '$palette-grey-100',
    color: '$text-primary',
  },

  variants: {
    isPlaceHolder: {
      true: {
        $$textColor: '$colors$text-tertiary',
      },
    },
  },
});
