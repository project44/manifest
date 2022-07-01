import { css } from '@project44-manifest/styles';

export const useAvatarStyles = css({
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

  '.manifest-avatar--fallback': {
    alignItems: 'center',
    color: '$text-secondary',
    display: 'flex',
    fontFamily: '$text',
    fontSize: '$$avatarFontSize',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$$avatarLineHeight',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },

  '.manifest-avatar--image': {
    borderRadius: 'inherit',
    boxSizing: 'border-box',
    height: '100%',
    objectFit: 'cover',
    verticalAlign: 'middle',
    width: '100%',
  },

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
        $$avatarLineHeight: '$0.875rem',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';
