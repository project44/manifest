import * as React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useMenuItem } from '@react-aria/menu';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '../../utils';
import { useDropdownContext } from '../Dropdown/Dropdown.context';
import { Typography } from '../Typography';
import { StyledDropdownItem } from './DropdownItem.styles';
import type { DropdownItemElement, DropdownItemOptions } from './DropdownItem.types';

/** @private */
export const DropdownItem = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    autoFocus,
    className: classNameProp,
    css,
    isVirtualized,
    item,
    onAction,
    startIcon: startIconProp,
    state,
  } = props;

  const { rendered, key } = item;
  const itemProps = item.props as typeof props;

  const itemRef = React.useRef<HTMLLIElement>(null);

  const isFocused = state.selectionManager.focusedKey === item.key;
  const isDisabled = state.disabledKeys.has(key);
  const isSelected = state.selectionManager.isSelected(key);

  const { onClose, closeOnSelect } = useDropdownContext()!;

  const { menuItemProps, labelProps } = useMenuItem(
    {
      'aria-label': item['aria-label'],
      closeOnSelect,
      key,
      isDisabled,
      isSelected,
      isVirtualized,
      onAction,
      onClose,
    },
    state,
    itemRef,
  );
  const { focusProps } = useFocusRing({
    autoFocus,
  });
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { pressProps, isPressed } = usePress({ isDisabled, ref: itemRef });

  const startIcon = React.useMemo(
    () => startIconProp ?? itemProps.startIcon!,
    [startIconProp, itemProps.startIcon],
  );

  const children =
    typeof rendered === 'string' ? (
      <Typography {...labelProps} className="manifest-dropdown-item__text" variant="subtext">
        {rendered}
      </Typography>
    ) : (
      rendered
    );

  const classes = cx('manifest-dropdown-item', classNameProp, itemProps.className, {
    'manifest-dropdown-item': true,
    'manifest-dropdown-item--disabled': isDisabled,
    'manifest-dropdown-item--selected': isSelected,
    'manifest-dropdown-item--selectable': state.selectionManager.selectionMode !== 'none',
  });

  return (
    <StyledDropdownItem
      {...mergeProps(menuItemProps, pressProps, focusProps, hoverProps)}
      ref={mergeRefs(itemRef, forwardedRef)}
      as={as}
      className={classes}
      css={{ ...css, ...itemProps.css }}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isHovered={isHovered}
      isPressed={isPressed}
      isSelected={isSelected}
    >
      {startIcon && (
        <span className={cx('manifest-dropdown-item__icon', 'manifest-dropdown-item__icon--start')}>
          {startIcon}
        </span>
      )}

      {children}
    </StyledDropdownItem>
  );
}) as ForwardRefComponent<DropdownItemElement, DropdownItemOptions>;

DropdownItem.displayName = 'DropdownItem';
