import { styled } from '../../styles';

export const StyledDropdownMenu = styled('div', {
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  minWidth: 224,
  padding: '$small',
  overflow: 'auto',
  zIndex: '$popover',

  '& > .manifest-separator': {
    mx: '-$small',
    my: '$small',
  },
});

export const StyledDropdownItem = styled('button', {
  all: 'unset',
  alignItems: 'center',
  border: 0,
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'flex',
  padding: '0.375rem 0.625rem',
  transition: '$color',
  typography: '$subtext',

  '&:hover, &:focus': {
    backgroundColor: '$background-secondary',
  },

  variants: {
    isDisabled: {
      true: {
        opacity: 0.32,
        pointerEvents: 'none',
      },
    },
  },
});

export const StyledDropdownItemText = styled('span', {
  display: 'block',
  flex: '1 1 0%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const StyledDropdownItemIcon = styled('span', {
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,

  variants: {
    placement: {
      end: {
        marginLeft: '$x-small',
      },
      start: {
        marginRight: '$x-small',
      },
    },
  },
});
