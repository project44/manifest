import type { AriaMenuProps } from '@react-types/menu';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { DropdownContext, useDropdownContext } from '../Dropdown/Dropdown.context';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { _DropdownItem } from '../DropdownItem';
import { _DropdownSection } from '../DropdownSection';
import { useMenu } from '@react-aria/menu';
import { useStyles } from './DropdownMenu.styles';
import { useTreeState } from '@react-stately/tree';

export type DropdownMenuElement = 'ul';
export type DropdownMenuOptions<T extends As = DropdownMenuElement> = Options<T> &
	AriaMenuProps<object> &
	StyleProps;
export type DropdownMenuProps<T extends As = DropdownMenuElement> = Props<DropdownMenuOptions<T>>;

export const DropdownMenu = createComponent<DropdownMenuOptions>((props, forwardedRef) => {
	const { as: Comp = 'ul', className: classNameProp, css, ...other } = props;

	const { menuRef, menuProps: contextProps } = useDropdownContext() as DropdownContext;

	const completeProps = { ...mergeProps(contextProps, other) };

	const state = useTreeState(completeProps);
	const { menuProps } = useMenu(completeProps, state, menuRef);

	const { className } = useStyles({ css });

	return (
		<Comp
			{...menuProps}
			className={cx(className, classNameProp, 'manifest-dropdown')}
			ref={mergeRefs(menuRef, forwardedRef)}
		>
			{[...state.collection].map((item) => {
				if (item.type === 'section') {
					return (
						<_DropdownSection
							key={item.key}
							item={item}
							state={state}
							onAction={completeProps.onAction}
						/>
					);
				}

				return (
					<_DropdownItem
						key={item.key}
						item={item}
						state={state}
						onAction={completeProps.onAction}
					/>
				);
			})}
		</Comp>
	);
});
