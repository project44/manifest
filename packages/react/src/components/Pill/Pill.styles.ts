import { css, pxToRem } from '../../styles';

export const useStyles = css({
  $$backgroundColor: 'tranparent',

  alignItems: 'center',
  backgroundColor: '$$backgroundColor',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'inline-flex',
  padding: '2px',
  position: 'relative',

  '.manifest-pill__icon': {
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

  '.manifest-pill__text': {
    backgroundColor: '$$backgroundColor',
    borderRadius: '$full',
    paddingLeft: '$x-small',
    paddingRight: pxToRem(6),
    width: 'max-content',
  },

  variants: {
    colorScheme: {
      indigo: {
        $$backgroundColor: '$colors$palette-indigo-50',

        '.manifest-pill__text': {
          color: '$palette-indigo-700',
        },

        '.manifest-pill__icon': {
          backgroundColor: '$palette-indigo-700',
        },
      },
      red: {
        $$backgroundColor: '$colors$palette-red-50',

        '.manifest-pill__text': {
          color: '$palette-red-600',
        },

        '.manifest-pill__icon': {
          backgroundColor: '$palette-red-600',
        },
      },
    },
    isCollapsible: {
      true: {
        '.manifest-pill__text': {
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          left: 24,
          position: 'absolute',
          paddingLeft: pxToRem(2),
          py: pxToRem(3),
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
