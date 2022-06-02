import { styled } from '../../styles';

export const StyledAvatarFallback = styled('span', { textTransform: 'uppercase' });

export const StyledAvatarImage = styled('img', {
  boxSizing: 'border-box',
  height: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  width: '100%',
});

export const StyledAvatar = styled('span', {
  $$avatarFontSize: '$fontSizes$small',
  $$avatarLineHeight: '$lineHeights$medium',

  alignItems: 'center',
  backgroundColor: '$background-secondary',
  border: 'none',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'flex',
  flexShrink: 0,
  fontFamily: '$text',
  fontSize: '$$avatarFontSize',
  fontWeight: '$semibold',
  letterSpacing: '$medium',
  lineHeight: '$$avatarLineHeight',
  justifyContent: 'center',
  margin: 0,
  outline: 'none',
  overflow: 'hidden',
  padding: 0,
  position: 'relative',
  verticalAlign: 'middle',
  userSelect: 'none',

  variants: {
    size: {
      medium: {
        $$avatarFontSize: '$fontSizes$small',
        $$avatarLineHeight: '$lineHeights$medium',

        size: 40,
      },
      small: {
        $$avatarFontSize: '$fontSizes$x-small',
        $$avatarLineHeight: '$lineHeights$small',

        size: 28,
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});
