import type { DOMProps, StyleProps } from '../../../types';
import type { FocusableProps } from '@react-types/shared';
import type { Node } from '@react-types/shared';
import * as React from 'react';
import { ListBoxContext, useListBoxContext } from '../ListBoxContext';
import { cx } from '../../../styles';
import { mergeProps } from '@react-aria/utils';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import { useHover } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';
import { useStyles } from './ListBoxItem.styles';

interface ListBoxItemProps<T extends object = object> extends DOMProps, StyleProps, FocusableProps {
  /**
   * The content of the item.
   */
  children?: React.ReactNode;
  /**
   * Whether the item is virtualized.
   */
  isVirtualized?: boolean;
  /**
   * Item object in the collection.
   */
  item: Node<T>;
  /**
   * Icon added before the item text.
   */
  startIcon?: React.ReactElement;
  /**
   * Callback executed on item select.
   */
  onAction?(key: React.Key): void;
}

const ListBoxItem: React.FC<ListBoxItemProps> = props => {
  const { className: classNameProp, css, isVirtualized, item, startIcon: startIconProp } = props;

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
    'manifest-listbox-item': true,
    'manifest-listbox-item--disabled': isDisabled,
    'manifest-listbox-item--selected': isSelected,
  });

  return (
    <div {...mergeProps(optionProps, hoverProps)} className={classes} ref={itemRef}>
      {startIcon && (
        <span className={cx('manifest-listbox-item__icon', 'manifest-listbox-item__icon--start')}>
          {startIcon}
        </span>
      )}

      <Typography {...labelProps} className="manifest-listbox-item__text" variant="subtext">
        {rendered}
      </Typography>

      {isSelected && (
        <span className={cx('manifest-listbox-item__icon', 'manifest-listbox-item__icon--end')}>
          <Icon icon="check" />
        </span>
      )}
    </div>
  );
};

if (__DEV__) {
  ListBoxItem.displayName = 'ManifestListBoxItem';
}

export { ListBoxItem };
export type { ListBoxItemProps };
