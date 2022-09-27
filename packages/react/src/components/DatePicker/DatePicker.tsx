import type { AriaDatePickerProps } from '@react-types/datepicker';
import type { DateValue } from '@react-types/calendar';
import type { Placement } from '@react-types/overlays';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { Calendar } from '../Calendar';
import { cx } from '../../styles';
import { Overlay } from '../Overlay';
import { Popover } from '../Popover';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useDatePicker } from '@react-aria/datepicker';
import { useDatePickerState } from '@react-stately/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { useStyles } from './DatePicker.styles';

export type DatePickerElement = 'div';

export interface DatePickerOptions<T extends As = DatePickerElement>
	extends Options<T>,
		AriaDatePickerProps<DateValue>,
		StyleProps {
	/**
	 * Helper text to append to the form control input element.
	 */
	helperText?: React.ReactNode;
	/**
	 * Props passed to the helper text.
	 */
	helperTextProps?: React.HTMLAttributes<HTMLElement>;
	/**
	 * Label of the input element
	 */
	label?: React.ReactNode;
	/**
	 * Props passed to the label.
	 */
	labelProps?: React.HTMLAttributes<HTMLElement>;
	/**
	 * The additional offset applied along the main axis between the element and its
	 * anchor element.
	 *
	 * @default 4
	 */
	offset?: number;
	/**
	 * The placement of the element with respect to its anchor element.
	 *
	 * @default 'bottom'
	 */
	placement?: Placement;
	/**
	 * Temporary text that occupies the text input when it is empty.
	 */
	placeholder?: string;
	/**
	 * Whether the element should flip its orientation (e.g. top to bottom or left to right) when
	 * there is insufficient room for it to render completely.
	 *
	 * @default true
	 */
	shouldFlip?: boolean;
	/**
	 * The size of the combobox
	 *
	 * @default 'medium'
	 */
	size?: 'medium' | 'small';
	/**
	 * Icon displayed at the start of the text field.
	 *
	 * @example
	 * <Combobox startIcon={<Icon />} />
	 */
	startIcon?: React.ReactElement;
}

export type DatePickerProps<T extends As = DatePickerElement> = Props<DatePickerOptions<T>>;

export const DatePicker = createComponent<DatePickerOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		autoFocus,
		className: classNameProp,
		css,
		helperText,
		helperTextProps = {},
		isDisabled,
		isReadOnly,
		isRequired,
		label,
		labelProps: labelPropsProp = {},
		offset = 4,
		placeholder,
		placement = 'bottom start',
		shouldFlip = true,
		size,
		startIcon,
		validationState,
	} = props;

	const state = useDatePickerState(props);

	const containerRef = React.useRef<HTMLDivElement>(null);
	const triggerRef = React.useRef<HTMLButtonElement>(null);
	const popoverRef = React.useRef<HTMLDivElement>(null);

	const {
		groupProps,
		labelProps,
		buttonProps: triggerProps,
		dialogProps,
		calendarProps,
		descriptionProps,
		errorMessageProps,
	} = useDatePicker(props, state, triggerRef);

	const { overlayProps } = useOverlayPosition({
		isOpen: state.isOpen,
		offset,
		onClose: () => state.setOpen(false),
		overlayRef: popoverRef,
		placement,
		shouldFlip,
		targetRef: containerRef,
	});

	const isInvalid = validationState === 'invalid';

	const { buttonProps, isPressed } = useButton({ ...triggerProps, isDisabled }, triggerRef);
	const { isFocused, isFocusVisible, focusProps } = useFocusRing({ autoFocus });
	const { hoverProps, isHovered } = useHover({ isDisabled });

	const { className } = useStyles({
		hasStartIcon: !!startIcon,
		isActive: state.isOpen,
		isDisabled,
		isFocused,
		isFocusVisible,
		isHovered,
		isInvalid,
		isPlaceholder: !state.value,
		isPressed,
		isReadOnly,
		size,
		css,
	});

	const classes = cx(className, classNameProp, {
		'manifest-datepicker': true,
		'manifest-datepicker--disabled': isDisabled,
		'manifest-datepicker--invalid': isInvalid,
		[`manifest-datepicker--${size}`]: size,
	});

	const displayValue = state.value
		? `${state.value.month} / ${state.value.day} / ${state.value.year}`
		: placeholder;

	return (
		<FormControl
			className={classes}
			helperText={helperText}
			helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
			isRequired={isRequired}
			label={label}
			labelProps={mergeProps(labelProps, labelPropsProp)}
			validationState={validationState}
		>
			<Comp
				{...groupProps}
				className="manifest-datepicker__wrapper"
				ref={mergeRefs(containerRef, forwardedRef)}
			>
				{startIcon && (
					<span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--start')}>
						{startIcon}
					</span>
				)}

				<button
					{...mergeProps(buttonProps, focusProps, hoverProps)}
					className="manifest-datepicker__input"
					ref={triggerRef}
				>
					<Typography variant="subtext">{displayValue}</Typography>
				</button>

				<span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')}>
					<Icon icon="calendar_month" />
				</span>

				<Overlay isOpen={state.isOpen}>
					<Popover
						{...mergeProps(dialogProps, overlayProps)}
						className="manifest-datepicker__popover"
						isOpen={state.isOpen}
						onClose={() => state.setOpen(false)}
						ref={popoverRef}
					>
						<Calendar className="manifest-datepicker__calendar" {...calendarProps} />
					</Popover>
				</Overlay>
			</Comp>
		</FormControl>
	);
});
