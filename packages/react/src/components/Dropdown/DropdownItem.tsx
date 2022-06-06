import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import {
  StyledDropdownItem,
  StyledDropdownItemIcon,
  StyledDropdownItemText,
} from './Dropdown.styles';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';

type DropdownItemElement = React.ElementRef<typeof StyledDropdownItem>;
type DropdownItemNativeProps = React.ComponentPropsWithRef<typeof StyledDropdownItem>;

export interface DropdownItemProps
  extends ManifestProps,
    VariantProps<typeof StyledDropdownItem>,
    Omit<DropdownItemNativeProps, 'onSelect'> {
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * Callback executed on item select.
   */
  onSelect?: (event: Event) => void;
}

export const DropdownItem = React.forwardRef<DropdownItemElement, DropdownItemProps>(
  (props, forwardedRef) => {
    const { children, className, endIcon, isDisabled, onSelect, startIcon, ...other } = props;

    return (
      <DropdownPrimitive.Item asChild disabled={!!isDisabled} onSelect={onSelect}>
        <StyledDropdownItem
          {...other}
          className={cx('manifest-dropdown--item', className)}
          isDisabled={isDisabled}
          ref={forwardedRef}
        >
          {startIcon && (
            <StyledDropdownItemIcon
              className="manifest-dropdown--item__start-icon"
              placement="start"
            >
              {startIcon}
            </StyledDropdownItemIcon>
          )}
          <StyledDropdownItemText className="manifest-dropdown--item__text">
            {children}
          </StyledDropdownItemText>
          {endIcon && (
            <StyledDropdownItemIcon className="manifest-dropdown--item__end-icon" placement="end">
              {endIcon}
            </StyledDropdownItemIcon>
          )}
        </StyledDropdownItem>
      </DropdownPrimitive.Item>
    );
  },
);

DropdownItem.displayName = 'DropdownItem';
