import { focusVisible, styled } from '../../styles';

export const StyledCheckboxContainer = styled(
  'div',
  {
    $$checkboxBackgroundColor: '$colors$background-primary',
    $$checkboxBorderColor: '$colors$palette-grey-500',
    $$checkboxSize: '1.125rem',

    alignItems: 'center',
    backgroundColor: '$$checkboxBackgroundColor',
    border: '2px solid $$checkboxBorderColor',
    borderRadius: '$small',
    color: '$contrast-primary',
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    size: '$$checkboxSize',
    transition: '$color',
    userSelect: 'none',
    verticalAlign: 'top',

    [`& .manifest-icon`]: {
      fontSize: '$$checkboxSize',
    },

    variants: {
      isHovered: {
        true: {
          $$checkboxBorderColor: '$colors$palette-grey-600',
        },
      },
      isChecked: {
        true: {
          $$checkboxBackgroundColor: '$colors$primary',
          $$checkboxBorderColor: '$colors$primary',
        },
      },
      isDisabled: {
        true: {
          cursor: 'not-allowed',
          opacity: 0.38,
        },
      },
    },

    compoundVariants: [
      {
        isChecked: true,
        isHovered: true,
        css: {
          $$checkboxBorderColor: '$colors$primary',
        },
      },
    ],
  },
  focusVisible,
);

export const StyledCheckboxLabel = styled('label', {
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

export const StyledCheckboxGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  [`& ${StyledCheckboxLabel}:not(:first-child)`]: {
    marginTop: '$medium',
  },
});

export const StyledCheckboxText = styled('span', {
  fontFamily: '$text',
  fontSize: '$small',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  marginLeft: '$small',
});
