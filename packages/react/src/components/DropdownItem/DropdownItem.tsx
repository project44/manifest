import * as React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useMenuItem } from '@react-aria/menu';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { TreeState } from '@react-stately/tree';
import type { FocusableProps, ItemProps, Node } from '@react-types/shared';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useDropdownContext } from '../Dropdown';
import { Typography } from '../Typography';
import { useStyles } from './DropdownItem.styles';

export type DropdownItemElement = 'li';

export interface DropdownItemOptions<T extends As = DropdownItemElement>
	extends Options<T>,
		FocusableProps,
		StyleProps {
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
	item: Node<object>;
	/**
	 * Icon added before the button text.
	 */
	startIcon?: React.ReactElement;
	/**
	 * Collection state.
	 */
	state: TreeState<object>;
	/**
	 * Callback executed on item select.
	 */
	onAction?: (key: React.Key) => void;
}

export type DropdownItemProps<T extends As = DropdownItemElement> = ItemProps<object> &
	Omit<Props<DropdownItemOptions<T>>, 'isVirtualized' | 'item' | 'state'>;

/** @private */
export const DropdownItem = createComponent<DropdownItemOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'li',
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
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		() => startIconProp ?? (item.props.startIcon as React.ReactElement),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
		<Comp
			{...mergeProps(menuItemProps, pressProps, focusProps, hoverProps)}
			ref={mergeRefs(itemRef, forwardedRef)}
			className={classes}
		>
			{startIcon && (
				<span className={cx('manifest-dropdown-item__icon', 'manifest-dropdown-item__icon--start')}>
					{startIcon}
				</span>
			)}

			<Typography {...labelProps} className="manifest-dropdown-item__text" variant="subtext">
				{rendered}
			</Typography>
		</Comp>
	);
});
