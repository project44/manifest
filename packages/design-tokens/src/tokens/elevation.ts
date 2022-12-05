import {
  shadowLarge,
  shadowMedium,
  shadowSmall,
  zIndexDialog,
  zIndexDropdown,
  zIndexModal,
  zIndexOverlay,
  zIndexPopover,
  zIndexSticky,
  zIndexToast,
  zIndexTooltip,
} from '../constants';

export const shadow = {
  large: shadowLarge,
  medium: shadowMedium,
  small: shadowSmall,
};

export const zIndex = {
  dialog: zIndexDialog,
  dropdown: zIndexDropdown,
  modal: zIndexModal,
  overlay: zIndexOverlay,
  popover: zIndexPopover,
  sticky: zIndexSticky,
  toast: zIndexToast,
  tooltip: zIndexTooltip,
};

export type ShadowTokens = typeof shadow;
export type ZIndexTokens = typeof zIndex;
