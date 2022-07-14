import { css } from '@project44-manifest/styles';

export const usePillStyles = css({
  $$backgroundColor: 'tranparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'inline-flex',
  padding: '2px',
  position: 'relative',

  '.manifest-pill--icon': {
    alignItems: 'center',
    borderRadius: '$full',
    color: '$palette-white',
    display: 'flex',
    fontSize: '$medium',
    justifyContent: 'center',
    size: 20,

    '> .manifest-icon': {
      fontSize: '$medium',
    },
  },

  '.manifest-pill--text': {
    backgroundColor: '$$backgroundColor',
    borderRadius: '$full',
    paddingLeft: '$x-small',
    paddingRight: '0.375rem',
    width: 'max-content',
  },

  variants: {
    colorScheme: {
      indigo: {
        $$backgroundColor: '$colors$palette-indigo-50',

        '.manifest-pill--text': {
          color: '$palette-indigo-700',
        },

        '.manifest-pill--icon': {
          backgroundColor: '$palette-indigo-700',
        },
      },
      red: {
        $$backgroundColor: '$colors$palette-red-50',

        '.manifest-pill--text': {
          color: '$palette-red-600',
        },

        '.manifest-pill--icon': {
          backgroundColor: '$palette-red-600',
        },
      },
    },
    isCollapsible: {
      true: {
        '.manifest-pill--text': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          left: 24,
          position: 'absolute',
          paddingLeft: '0.125rem',
          py: '0.1875rem',
        },
      },
    },
    isOpen: {
      true: {},
    },
  },

  compoundVariants: [
    {
      isCollapsible: true,
      isOpen: true,
      css: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  ],

  defaultVariants: {
    colorScheme: 'indigo',
  },
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';
