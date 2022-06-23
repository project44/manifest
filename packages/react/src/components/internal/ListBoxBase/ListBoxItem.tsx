import type { FocusableProps } from '@react-types/shared';
import type { ManifestProps } from '../../../types';
import type { Node } from '@react-types/shared';
import * as React from 'react';
import { ListBoxContext, useListBoxContext } from './ListBox.context';
import { StyledListBoxItem, StyledListBoxItemIcon, StyledListBoxItemText } from './ListBox.styles';
import { cx } from '../../../styles';
import { mergeProps } from '@react-aria/utils';
import { useHover } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';

export interface ListBoxItemItemProps<T extends object = object>
  extends ManifestProps,
    FocusableProps {
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
   * Callback executed on item select.
   */
  onAction?(key: React.Key): void;
}

/**
 * @private The rendered component for the react-aria collection Item.
 */
export const ListBoxItem: React.FC<ListBoxItemItemProps> = props => {
  const {
    as,
    className,
    css,
    endIcon: endIconProp,
    isVirtualized,
    item,
    startIcon: startIconProp,
  } = props;

  const { rendered, key } = item;

  const itemRef = React.useRef<HTMLDivElement>(null);

  const { state } = useListBoxContext() as ListBoxContext;

  const { optionProps, labelProps, isFocused, isDisabled, isPressed, isSelected } = useOption(
    {
      'aria-label': item['aria-label'],
      key,
      isVirtualized,
    },
    state,
    itemRef,
  );
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const endIcon = React.useMemo(
    () => endIconProp ?? (item.props.endIcon as React.ReactElement),
    [endIconProp, item.props.endIcon],
  );

  const startIcon = React.useMemo(
    () => startIconProp ?? (item.props.startIcon as React.ReactElement),
    [startIconProp, item.props.startIcon],
  );

  return (
    <StyledListBoxItem
      {...mergeProps(optionProps, hoverProps)}
      as={as}
      className={cx('manifest-dropdown--item', className)}
      css={css}
      isDisabled={isDisabled}
      isHovered={isHovered}
      isFocused={isFocused}
      isPressed={isPressed}
      isSelected={isSelected}
      ref={itemRef}
    >
      {startIcon && (
        <StyledListBoxItemIcon className="manifest-dropdown--item__start-icon" placement="start">
          {startIcon}
        </StyledListBoxItemIcon>
      )}
      <StyledListBoxItemText
        {...labelProps}
        className="manifest-dropdown--item__text"
        variant="subtext"
      >
        {rendered}
      </StyledListBoxItemText>
      {endIcon && (
        <StyledListBoxItemIcon className="manifest-dropdown--item__end-icon" placement="end">
          {endIcon}
        </StyledListBoxItemIcon>
      )}
    </StyledListBoxItem>
  );
};
