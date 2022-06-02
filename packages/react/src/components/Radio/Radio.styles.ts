import { focusVisible, styled } from '../../styles';

export const StyledRadioContainer = styled(
  'div',
  {
    $$radioBackgroundColor: '$colors$white',
    $$radioBorderColor: '$colors$palette-grey-500',
    $$radioIndiciatorSize: '0.625rem',
    $$radioSize: '1.125rem',

    alignItems: 'center',
    backgroundColor: '$$radioBackgroundColor',
    border: '3px solid $$radioBorderColor',
    borderRadius: '$full',
    boxSizing: 'border-box',
    color: '$white',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    size: '$$radioSize',
    transition: '$color',

    variants: {
      isChecked: {
        true: {
          $$radioBackgroundColor: '$colors$primary',
          $$radioBorderColor: 'transparent',

          '&::before': {
            background: 'currentColor',
            borderRadius: '$$radioIndiciatorSize',
            content: '""',
            display: 'inline-block',
            position: 'relative',
            size: '$$radioIndiciatorSize',
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
          $$radioBorderColor: '$colors$palette-grey-600',
        },
      },
    },

    compoundVariants: [
      {
        isChecked: true,
        isHovered: true,
        css: {
          $$radioBorderColor: '$colors$primary',
        },
      },
    ],
  },
  focusVisible,
);

export const StyledRadioLabel = styled('label', {
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

export const StyledRadioGroup = styled('div', {
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  margin: 0,
  padding: 0,

  variants: {
    orientation: {
      horizontal: {
        flexFlow: 'row wrap',
      },
      vertical: {
        flexFlow: 'column wrap',
      },
    },
  },

  defaultVariants: {
    orientation: 'vertical',
  },
});

export const StyledRadioText = styled('span', {
  fontFamily: '$text',
  fontSize: '$small',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  marginLeft: '$small',
});
