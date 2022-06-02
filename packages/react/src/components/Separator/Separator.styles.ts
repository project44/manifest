import { styled } from '../../styles';

export const StyledSeparator = styled('hr', {
  alignSelf: 'stretch',
  backgroundColor: '$border-primary',
  border: 'none',
  borderWidth: '$small',
  margin: 0,
  overflow: 'visible',

  variants: {
    orientation: {
      horizontal: {
        height: '1px',
        width: 'auto',
      },
      vertical: {
        height: 'auto',
        width: '1px',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
});
