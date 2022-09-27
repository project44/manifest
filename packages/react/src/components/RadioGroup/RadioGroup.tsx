import type { AriaRadioGroupProps } from '@react-types/radio';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { RadioGroupContext } from './RadioGroup.context';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { useStyles } from './RadioGroup.styles';

export type RadioGroupElement = 'div';

export interface RadioGroupOptions<T extends As = RadioGroupElement>
	extends Options<T>,
		AriaRadioGroupProps,
		StyleProps {
	/**
	 * The layout orientation of the radio group.
	 *
	 * @default 'vertical'
	 */
	orientation?: 'horizontal' | 'vertical';
}

export type RadioGroupProps<T extends As = RadioGroupElement> = Props<RadioGroupOptions<T>>;

export const RadioGroup = createComponent<RadioGroupOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		className: classNameProp,
		children,
		css,
		orientation = 'vertical',
		...other
	} = props;

	const state = useRadioGroupState(props);
	const { radioGroupProps } = useRadioGroup(props, state);

	const { className } = useStyles({ css, orientation });

	const classes = cx(className, classNameProp, {
		'manifest-radio-group': true,
		[`manifest-radio-group--${orientation}`]: orientation,
	});

	return (
		<Comp {...mergeProps(radioGroupProps, other)} className={classes} ref={forwardedRef}>
			<RadioGroupContext.Provider value={{ state }}>{children}</RadioGroupContext.Provider>
		</Comp>
	);
});
