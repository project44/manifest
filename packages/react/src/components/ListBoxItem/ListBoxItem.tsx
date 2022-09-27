import type { Node, SelectionMode } from '@react-types/shared';
import type { FocusableProps } from '@react-types/shared';
import type { ItemProps } from '@react-types/shared';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { ListBoxContext, useListBoxContext } from '../ListBoxContext';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { Typography } from '../Typography';
import { useHover } from '@react-aria/interactions';
import { useOption } from '@react-aria/listbox';
import { useStyles } from './ListBoxItem.styles';
import { Checkbox } from '../Checkbox';

export type ListBoxItemElement = 'div';

export interface ListBoxItemOptions<T extends As = ListBoxItemElement>
	extends Options<T>,
		StyleProps,
		FocusableProps {
	/**
	 * Whether the item is virtualized.
	 */
	isVirtualized?: boolean;
	/**
	 * Item object in the collection.
	 */
	item: Node<object>;
	/**
	 * The type of selection that is allowed in the collection.
	 */
	selectionMode?: SelectionMode;
	/**
	 * Icon added before the item text.
	 */
	startIcon?: React.ReactElement;
}

export type ListBoxItemProps<T extends As = ListBoxItemElement> = ItemProps<object> &
	Omit<Props<ListBoxItemOptions<T>>, 'isVirtualized' | 'item' | 'selectionMode'>;

/** @private */
export const ListBoxItem = createComponent<ListBoxItemOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		className: classNameProp,
		css,
		isVirtualized,
		item,
		selectionMode,
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

	const startIcon = React.useMemo(() => {
		if (selectionMode === 'multiple') {
			return <Checkbox aria-labelledby={labelProps.id} isReadOnly isSelected={isSelected} />;
		} else {
			return startIconProp ?? (item.props.startIcon as React.ReactElement);
		}
	}, [labelProps, isSelected, selectionMode, startIconProp, item.props.startIcon]);

	const { className } = useStyles({
		css,
		isDisabled,
		isFocused,
		isHovered,
		isPressed,
		isSelected,
		selectionMode,
	});

	const classes = cx(className, classNameProp, {
		'manifest-listbox-item': true,
		'manifest-listbox-item--disabled': isDisabled,
		'manifest-listbox-item--selected': isSelected,
	});

	return (
		<Comp
			{...mergeProps(optionProps, hoverProps)}
			className={classes}
			ref={mergeRefs(itemRef, forwardedRef)}
		>
			{startIcon && (
				<span className={cx('manifest-listbox-item__icon', 'manifest-listbox-item__icon--start')}>
					{startIcon}
				</span>
			)}

			<Typography {...labelProps} className="manifest-listbox-item__text" variant="subtext">
				{rendered}
			</Typography>
		</Comp>
	);
});
