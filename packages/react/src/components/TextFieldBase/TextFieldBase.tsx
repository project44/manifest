import type { FocusableProps, ValidationState } from '@react-types/shared';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { FormControl } from '../FormControl';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './TextFieldBase.styles';

export type TextFieldBaseElement = 'div';

export interface TextFieldBaseOptions<T extends As = TextFieldBaseElement>
	extends Options<T>,
		FocusableProps,
		StyleProps {
	/**
	 * Icon displayed at the end of the text field.
	 */
	endIcon?: React.ReactNode;
	/**
	 * Helper text to append to the form control input element.
	 */
	helperText?: React.ReactNode;
	/**
	 * Props passed to the helper text.
	 */
	helperTextProps?: React.HTMLAttributes<HTMLElement>;
	/**
	 * The ref passed to the input element.
	 */
	inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
	/**
	 * Props passed to the input element.
	 */
	inputProps?:
		| React.InputHTMLAttributes<HTMLInputElement>
		| React.TextareaHTMLAttributes<HTMLTextAreaElement>;
	/**
	 * Whether the input is disabled.
	 */
	isDisabled?: boolean;
	/**
	 * Whether the input can be selected but not changed by the user.
	 */
	isReadOnly?: boolean;
	/**
	 * Whether user input is required on the input before form submission.
	 */
	isRequired?: boolean;
	/**
	 * Label of the input element
	 */
	label?: React.ReactNode;
	/**
	 * Props passed to the label.
	 */
	labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
	/**
	 * Whether the textfield should support multiline input (textarea).
	 */
	multiline?: boolean;
	/**
	 * Icon displayed at the start of the text field.
	 */
	startIcon?: React.ReactNode;
	/**
	 * Whether the input should display its "valid" or "invalid" visual styling.
	 */
	validationState?: ValidationState;
}

export type TextFieldBaseProps<T extends As = TextFieldBaseElement> = Props<
	TextFieldBaseOptions<T>
>;

export const TextFieldBase = createComponent<TextFieldBaseOptions>((props, forwardedRef) => {
	const {
		as,
		autoFocus,
		className: classNameProp,
		css,
		endIcon,
		helperText,
		helperTextProps,
		inputProps = {},
		inputRef,
		isDisabled,
		isRequired,
		label,
		labelProps,
		multiline = false,
		startIcon,
		validationState,
	} = props;

	const Comp = as ? as : multiline ? 'textarea' : 'input';
	const isInvalid = validationState === 'invalid';

	const fieldRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

	const { focusProps, isFocused, isFocusVisible } = useFocusRing({
		autoFocus,
		isTextInput: true,
	});
	const { isHovered, hoverProps } = useHover({ isDisabled });

	const { className } = useStyles({
		hasEndIcon: !!endIcon,
		hasStartIcon: !!startIcon,
		isDisabled,
		isFocused,
		isFocusVisible,
		isHovered,
		isInvalid,
		css,
	});

	const classes = cx(className, classNameProp, {
		'manifest-textfield-base': true,
		'manifest-textfield-base--disabled': isDisabled,
		'manifest-textfield-base--invalid': isInvalid,
	});

	return (
		<FormControl
			className={classes}
			helperText={helperText}
			helperTextProps={helperTextProps}
			isRequired={isRequired}
			label={label}
			labelProps={labelProps}
			validationState={validationState}
		>
			<div className="manifest-textfield-base__wrapper" ref={forwardedRef}>
				{startIcon && (
					<span
						className={cx('manifest-textfield-base__icon', 'manifest-textfield-base__icon--start')}
					>
						{startIcon}
					</span>
				)}

				<Comp
					{...mergeProps(inputProps, focusProps, hoverProps)}
					className="manifest-textfield-base__input"
					ref={mergeRefs(fieldRef, inputRef as typeof fieldRef) as any}
					rows={multiline ? 1 : undefined}
				/>

				{endIcon && (
					<span
						className={cx('manifest-textfield-base__icon', 'manifest-textfield-base__icon--end')}
					>
						{endIcon}
					</span>
				)}
			</div>
		</FormControl>
	);
});
