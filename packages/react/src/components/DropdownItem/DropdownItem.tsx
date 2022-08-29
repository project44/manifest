import type { DOMProps, StyleProps } from '../../types';
import type { FocusableProps } from '@react-types/shared';
import type { Node } from '@react-types/shared';
import type { TreeState } from '@react-stately/tree';
import * as React from 'react';
import { useHover, usePress } from '@react-aria/interactions';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useMenuItem } from '@react-aria/menu';
import { useStyles } from './DropdownItem.styles';
import { DropdownContext, useDropdownContext } from '../Dropdown';

export interface DropdownItemProps<T extends object = object>
  extends DOMProps,
    StyleProps,
    FocusableProps {
  /**
   * The content of the item.
   */
  children?: React.ReactNode;
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Whether the item is virtualized.
   */
  isVirtualized?: boolean;
  /**
   * Item object in the collection.
   */
  item: Node<T>;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * Collection state.
   */
  state: TreeState<T>;
  /**
   * Callback executed on item select.
   */
  onAction?(key: React.Key): void;
}

export const DropdownItem: React.FC<DropdownItemProps> = props => {
  const {
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

  const itemRef = React.useRef<HTMLLIElement>(null);

  const isFocused = state.selectionManager.focusedKey === item.key;
  const isDisabled = state.disabledKeys.has(key);
  const isSelected = state.selectionManager.isSelected(key);

  const { onClose, closeOnSelect } = useDropdownContext() as DropdownContext;

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
    () => startIconProp ?? (item.props.startIcon as React.ReactElement),
    [startIconProp, item.props.startIcon],
  );

  const { className } = useStyles({
    css,
    isDisabled,
    isFocused,
    isHovered,
    isPressed,
    isSelected,
  });

  const classes = cx(className, classNameProp, {
    'manifest-dropdown-item': true,
    'manifest-dropdown-item--disabled': isDisabled,
    'manifest-dropdown-item--selected': isSelected,
    'manifest-dropdown-item--selectable': state.selectionManager.selectionMode !== 'none',
  });

  return (
    <li
      {...mergeProps(menuItemProps, pressProps, focusProps, hoverProps)}
      className={classes}
      ref={itemRef}
    >
      {startIcon && (
        <span className={cx('manifest-dropdown-item__icon', 'manifest-dropdown-item__icon--start')}>
          {startIcon}
        </span>
      )}

      <Typography {...labelProps} className="manifest-dropdown-item__text" variant="subtext">
        {rendered}
      </Typography>

      <span className={cx('manifest-dropdown-item__icon', 'manifest-dropdown-item__icon--end')}>
        <Icon icon="check" />
      </span>
    </li>
  );
};
