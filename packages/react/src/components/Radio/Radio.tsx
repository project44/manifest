import type { AriaRadioProps } from '@react-types/radio';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { RadioGroupContext, useRadioGroupContext } from '../RadioGroup';
import { useHover, usePress } from '@react-aria/interactions';
import { cx } from '@project44-manifest/react-styles';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useRadio } from '@react-aria/radio';
import { useStyles } from './Radio.styles';

export type RadioElement = 'label';
export type RadioOptions<T extends As = RadioElement> = Options<T> & AriaRadioProps & StyleProps;
export type RadioProps<T extends As = RadioElement> = Props<RadioOptions<T>>;

export const Radio = createComponent<RadioOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'label',
		autoFocus,
		children,
		css,
		className: classNameProp,
		isDisabled,
	} = props;

	const inputRef = React.useRef<HTMLInputElement>(null);

	const { state } = useRadioGroupContext() as RadioGroupContext;

	const { inputProps } = useRadio(props, state, inputRef);
	const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
	const { isHovered, hoverProps } = useHover({ isDisabled });
	const { pressProps } = usePress({ isDisabled: inputProps.disabled });

	const { className } = useStyles({
		css,
		isChecked: inputProps.checked,
		isDisabled: inputProps.disabled,
		isFocusVisible,
		isHovered,
	});

	const classes = cx(className, classNameProp, {
		'manifest-radio': true,
		'manifest-radio--checked': inputProps.checked,
		'manifest-radio--disabled': inputProps.disabled,
	});

	return (
		<Comp {...mergeProps(hoverProps, pressProps)} className={classes} ref={forwardedRef}>
			<input
				{...mergeProps(inputProps, focusProps)}
				className="manifest-radio__input"
				ref={inputRef}
			/>

			<div className="manifest-radio__control">
				<span className="manifest-radio__indicator" />
			</div>

			{children && (
				<Typography className="manifest-radio__text" variant="subtext">
					{children}
				</Typography>
			)}
		</Comp>
	);
});
