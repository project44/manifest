import { focusVisible, styled } from '../../styles';

export const StyledToggleContainer = styled(
  'div',
  {
    $$toggleBackgroundColor: '$colors$palette-grey-500',
    $$toggleIndiciatorSize: '1.125rem',

    alignItems: 'center',
    backgroundColor: '$$toggleBackgroundColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$white',
    cursor: 'pointer',
    display: 'inline-flex',
    height: 24,
    margin: 0,
    minWidth: 44,
    padding: 0,
    position: 'relative',
    transition: '$default',
    width: 44,

    '&::before': {
      backgroundColor: '$white',
      borderRadius: '$full',
      boxSizing: 'border-box',
      content: '""',
      display: 'inline-block',
      size: '$$toggleIndiciatorSize',
      transform: 'translateX(3px)',
      transition: '$default',
      zIndex: 1,
    },

    variants: {
      isChecked: {
        true: {
          $$toggleBackgroundColor: '$colors$primary',

          '&::before': {
            transform: 'translateX(23px)',
            borderColor: '$white',
          },
        },
      },
      isDisabled: {
        true: {
          cursor: 'not-allowed',
          opacity: 0.38,
        },
      },
      isHovered: {
        true: {
          $$toggleBackgroundColor: '$colors$palette-grey-600',
        },
      },
    },

    compoundVariants: [
      {
        isChecked: true,
        isHovered: true,
        css: {
          $$toggleBackgroundColor: '$colors$primary',
        },
      },
    ],
  },
  focusVisible,
);

export const StyledToggleLabel = styled('label', {
  alignItems: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  width: 'auto',

  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const StyledToggleText = styled('span', {
  fontFamily: '$text',
  fontSize: '$small',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  marginLeft: '$small',
});
