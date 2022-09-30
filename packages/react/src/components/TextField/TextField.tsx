import * as React from 'react';
import { useTextField } from '@react-aria/textfield';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Props } from '@project44-manifest/system';
import { TextFieldBase, TextFieldBaseElement, TextFieldBaseOptions } from '../TextFieldBase';
import { useStyles } from './TextField.styles';

export interface TextFieldOptions<T extends As = TextFieldBaseElement>
	extends TextFieldBaseOptions<T> {
	/**
	 * The default value (uncontrolled).
	 */
	defaultValue?: string;
	/**
	 * Temporary text that occupies the text input when it is empty.
	 */
	placeholder?: string;
	/**
	 * The size of the combobox
	 *
	 * @default 'medium'
	 */
	size?: 'medium' | 'small';
	/**
	 * The current value (controlled).
	 */
	value?: string;
	/**
	 * Handler that is called when the value changes.
	 */
	onChange?: (value: string) => void;
}

export type TextFieldProps<T extends As = TextFieldBaseElement> = Props<TextFieldOptions<T>>;

export const TextField = createComponent<TextFieldOptions>((props, forwardedRef) => {
	const {
		className: classNameProp,
		helperTextProps = {},
		inputProps: inputPropsProp = {},
		inputRef,
		labelProps: labelPropsProp = {},
		onChange,
		size = 'medium',
		...other
	} = props;

	const fieldRef = React.useRef<HTMLInputElement>(null);

	const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
		{ ...props, inputElementType: 'input', onChange },
		fieldRef,
	);

	const { className } = useStyles({ size });

	const classes = cx(className, classNameProp, {
		'manifest-textfield': true,
		[`manifest-textfield--${size}`]: size,
	});

	return (
		<TextFieldBase
			{...other}
			ref={forwardedRef}
			className={classes}
			helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
			inputProps={mergeProps(inputProps, inputPropsProp)}
			inputRef={
				mergeRefs(fieldRef, inputRef as typeof fieldRef) as React.RefObject<HTMLInputElement>
			}
			labelProps={mergeProps(labelProps, labelPropsProp)}
		/>
	);
});
