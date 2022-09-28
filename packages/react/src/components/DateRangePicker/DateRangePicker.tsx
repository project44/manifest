import type { AriaDateRangePickerProps } from '@react-types/datepicker';
import type { DateValue } from '@react-types/calendar';
import type { Placement } from '@react-types/overlays';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { CalendarRange } from '../CalendarRange';
import { cx } from '../../styles';
import { DefinedRange } from '../CalendarRanges';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Overlay } from '../Overlay';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useDateRangePicker } from '@react-aria/datepicker';
import { useDateRangePickerState } from '@react-stately/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { useStyles } from '../DatePicker/DatePicker.styles';

export type DateRangePickerElement = 'div';

export interface DateRangePickerOptions<T extends As = DateRangePickerElement>
	extends Options<T>,
		AriaDateRangePickerProps<DateValue>,
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

	/**
	 * Allows to show or hide the calendar of the component
	 *
	 * @default true
	 * @example
	 * <DateRangePicker showCalendar={false} />
	 */
	showCalendar?: boolean;

	/**
	 * Allows to pass or avoid the ranges to the component and shoen them instead of the predefined ones
	 *
	 * @default false
	 * @example
	 * <DateRangePicker showRanges={false} />
	 */
	showRanges?: boolean;

	/**
	 * Brings the list of ranges defined to the component
	 */
	ranges?: DefinedRange[];
}

export type DateRangePickerProps<T extends As = DateRangePickerElement> = Props<
	DateRangePickerOptions<T>
>;

export const DateRangePicker = createComponent<DateRangePickerOptions>((props, forwardedRef) => {
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
		ranges,
		showCalendar = true,
		showRanges = false,
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

	const state = useDateRangePickerState(props);

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
	} = useDateRangePicker(props, state, triggerRef);

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

	const getDisplayValue = () => {
		const { start, end } = state.value;

		const fromDate = start ? `${start.month} / ${start.day} / ${start.year}` : undefined;
		const toDate = end ? `${end.month} / ${end.day} / ${end.year}` : undefined;

		return fromDate && toDate ? `${fromDate} - ${toDate}` : placeholder;
	};

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
					<Typography variant="subtext">{getDisplayValue()}</Typography>
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
						<CalendarRange
							className="manifest-datepicker__calendar"
							{...calendarProps}
							showCalendar={showCalendar}
							showRanges={showRanges}
							ranges={ranges}
						/>
					</Popover>
				</Overlay>
			</Comp>
		</FormControl>
	);
});
