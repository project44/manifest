import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useDateRangePicker } from '@react-aria/datepicker';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useDateRangePickerState } from '@react-stately/datepicker';
import type { DateValue } from '@react-types/calendar';
import type { AriaDateRangePickerProps } from '@react-types/datepicker';
import { Calendar as CalendarIcon } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { CalendarRange } from '../CalendarRange';
import { DefinedRange } from '../CalendarRanges';
import { useStyles } from '../DatePicker/DatePicker.styles';
import { FormControl } from '../FormControl';
import { Overlay, Placement } from '../Overlay';
import { Popover } from '../Popover';
import { Typography } from '../Typography';

export type DateRangePickerElement = 'div';

export interface DateRangePickerOptions<T extends As = DateRangePickerElement>
  extends Options<T>,
    AriaDateRangePickerProps<DateValue>,
    StyleProps {
  /**
   * The ref of the element to append the overlay to.
   */
  containerRef?: React.RefObject<HTMLElement>;
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

  /**
   * Controls what the closed trigger shows after picking an item from the
   * ranges rail. Falls back to `'range'`'s text as soon as the user edits
   * the calendar manually. Has no effect when `showRanges` is false.
   *
   * - `'range'` (default) — original behavior: always the resolved date
   *   range, e.g. "Jun 1, 2026 - Jun 7, 2026".
   * - `'preset'` — just the preset label, e.g. "Last 7 Days".
   * - `'presetWithRange'` — the preset label plus the resolved range, e.g.
   *   "Last 7 Days (Jun 1, 2026 - Jun 7, 2026)".
   *
   * @default 'range'
   * @example
   * <DateRangePicker showRanges rangeDisplayMode="preset" />
   * <DateRangePicker showRanges rangeDisplayMode="presetWithRange" />
   */
  rangeDisplayMode?: 'preset' | 'presetWithRange' | 'range';

  /**
   * Called when the user picks an item from the ranges rail (not called for
   * manual day-by-day selection on the calendar table). Fires before
   * `onChange` for the same pick, so a consumer can stash the preset's
   * stable `key` in a ref and read it back inside its own `onChange`
   * handler — useful for persisting which preset produced a given range
   * without re-deriving it by comparing dates against their own preset
   * list.
   */
  onRangeSelect?: (range: DefinedRange) => void;
}

export type DateRangePickerProps<T extends As = DateRangePickerElement> = Props<
  DateRangePickerOptions<T>
>;

export const DateRangePicker = createComponent<DateRangePickerOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    autoFocus,
    className: classNameProp,
    containerRef: containerRefProp,
    css,
    helperText,
    helperTextProps = {},
    isDisabled,
    isReadOnly,
    isRequired,
    ranges,
    showCalendar = true,
    showRanges = false,
    rangeDisplayMode = 'range',
    onRangeSelect: onRangeSelectProp,
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
    onClose: () => void state.setOpen(false),
    overlayRef: popoverRef,
    placement,
    shouldFlip,
    targetRef: containerRef,
  });

  const isInvalid = validationState === 'invalid';

  const { buttonProps, isPressed } = useButton({ ...triggerProps, isDisabled }, triggerRef);
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const handleClose = React.useCallback(() => void state.setOpen(false), [state]);

  // Tracks the label of the last-clicked ranges-rail preset so the trigger
  // can show it instead of (or alongside) the resolved date range when
  // rangeDisplayMode isn't 'range'. presetSelectedRef flags a value change as
  // "came from a preset click" so the effect below can tell it apart from a
  // manual calendar-table pick and clear the label in that case.
  const presetSelectedRef = React.useRef<DefinedRange | undefined>(undefined);
  const [selectedRangeLabel, setSelectedRangeLabel] = React.useState<string | undefined>();

  const handleRangeSelect = React.useCallback(
    (range: DefinedRange) => {
      if (rangeDisplayMode !== 'range') {
        presetSelectedRef.current = range;
        setSelectedRangeLabel(range.label);
      }
      onRangeSelectProp?.(range);
    },
    [rangeDisplayMode, onRangeSelectProp],
  );

  React.useEffect(() => {
    // No-op in the default 'range' mode — every other DateRangePicker
    // consumer in the codebase must see zero behavior change from this
    // feature.
    if (rangeDisplayMode === 'range') return;
    const preset = presetSelectedRef.current;
    presetSelectedRef.current = undefined;
    // Only keep the label if the accepted value actually matches the preset
    // that was picked — guards against a controlled consumer rejecting or
    // not updating `value` after a preset click (same-reference or ignored
    // update), which would otherwise leave a stale preset label showing once
    // a later manual edit changes the dates.
    if (
      preset &&
      state.value?.start &&
      state.value?.end &&
      state.value.start.compare(preset.value.start) === 0 &&
      state.value.end.compare(preset.value.end) === 0
    ) {
      return;
    }
    setSelectedRangeLabel(undefined);
  }, [state.value, rangeDisplayMode]);

  const { className } = useStyles({
    hasStartIcon: Boolean(startIcon),
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

    const [fromDate, toDate] = [start, end].map((date) => {
      if (!date) {
        return undefined;
      }

      return `${new Date(date.year, date.month - 1, date.day).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`;
    });

    const rangeText = fromDate && toDate ? `${fromDate} - ${toDate}` : placeholder;

    if (selectedRangeLabel) {
      if (rangeDisplayMode === 'presetWithRange') {
        return `${selectedRangeLabel} (${rangeText})`;
      }
      if (rangeDisplayMode === 'preset') {
        return selectedRangeLabel;
      }
    }

    return rangeText;
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
        ref={mergeRefs(containerRef, forwardedRef)}
        className="manifest-datepicker__wrapper"
      >
        {startIcon && (
          <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--start')}>
            {startIcon}
          </span>
        )}

        <button
          {...mergeProps(buttonProps, focusProps, hoverProps)}
          ref={triggerRef}
          className="manifest-datepicker__input"
        >
          <Typography variant="subtext">{getDisplayValue()}</Typography>
        </button>

        <span className={cx('manifest-datepicker__icon', 'manifest-datepicker__icon--end')}>
          <CalendarIcon />
        </span>

        <Overlay containerRef={containerRefProp} isOpen={state.isOpen}>
          <Popover
            {...mergeProps(dialogProps, overlayProps)}
            ref={popoverRef}
            className="manifest-datepicker__popover"
            isOpen={state.isOpen}
            onClose={handleClose}
          >
            <CalendarRange
              className="manifest-datepicker__calendar"
              {...calendarProps}
              ranges={ranges}
              showCalendar={showCalendar}
              showRanges={showRanges}
              onRangeSelect={
                rangeDisplayMode === 'range' && !onRangeSelectProp ? undefined : handleRangeSelect
              }
            />
          </Popover>
        </Overlay>
      </Comp>
    </FormControl>
  );
});

DateRangePicker.displayName = 'DateRangePicker';
