import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { styled } from '../../styles';

export const StyledAvatarFallback = styled(Fallback, {
  alignItems: 'center',
  color: '$text-secondary',
  display: 'flex',
  fontFamily: '$text',
  fontSize: 'inherit',
  fontWeight: '$semibold',
  letterSpacing: '$medium',
  lineHeight: 'inherit',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export const StyledAvatarImage = styled(Image, {
  borderRadius: 'inherit',
  boxSizing: 'border-box',
  height: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  width: '100%',
});

export const StyledAvatar = styled(Root, {
  $$avatarSize: '2.5rem',
  $$avatarFontSize: '$small',
  $$avatarLineHeight: '$medium',

  alignItems: 'center',
  backgroundColor: '$background-secondary',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  overflow: 'hidden',
  size: '$$avatarSize',
  verticalAlign: 'middle',

  variants: {
    size: {
      medium: {
        $$avatarSize: '2.5rem',
        $$avatarFontSize: '$fontSizes$small',
        $$avatarLineHeight: '$lineHeights$medium',
      },
      small: {
        $$avatarSize: '1.75rem',
        $$avatarFontSize: '$fontSizes$x-small',
        $$avatarLineHeight: '$lineHeights$small',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});
