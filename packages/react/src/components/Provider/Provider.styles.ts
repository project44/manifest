import { styled } from '@project44-manifest/react-styles';

export const StyledProvider = styled('div', {
  fontFamily: '$text',
  fontSize: '$medium',
  fontWeight: '$regular',
  letterSpacing: '$medium',
  lineHeight: '$medium',

  '&:lang(zh-Hans), &:lang(ja), &:lang(fr), &:lang(de), &:lang(es), &:lang(pt)': {
    fontFamily: '$character',
  },
});
