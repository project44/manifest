import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useOverlayPosition } from '@react-aria/overlays';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useSelectState } from '@react-stately/select';
import type { AriaSelectProps } from '@react-types/select';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { ListBoxBase, ListBoxBaseProps } from '../ListBoxBase';
import { Overlay, Placement } from '../Overlay';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { useStyles } from './Select.styles';

export type SelectElement = 'label';

export interface SelectOptions<T extends As = SelectElement>
  extends Options<T>,
    AriaSelectProps<object>,
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
   * The maxHeight specified for the overlay element.
   * By default, it will take all space up to the current viewport height.
   */
  maxHeight?: number;
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

export type SelectProps<T extends As = SelectElement> = Props<SelectOptions<T>>;

export const Select = createComponent<SelectOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    autoComplete,
    autoFocus,
    className: classNameProp,
    containerRef: containerRefProp,
    css,
    isDisabled,
    isRequired,
    helperText,
    helperTextProps = {},
    label,
    labelProps: labelPropsProp = {},
    name,
    maxHeight,
    offset = 4,
    placeholder,
    placement = 'bottom start',
    shouldFlip = true,
    validationState,
    size = 'medium',
    startIcon,
  } = props;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const state = useSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps } =
    useSelect(props, state, triggerRef);

  const { overlayProps } = useOverlayPosition({
    isOpen: state.isOpen,
    maxHeight,
    offset,
    onClose: state.close,
    overlayRef: popoverRef,
    placement,
    shouldFlip,
    scrollRef: listBoxRef,
    targetRef: containerRef,
  });

  const isInvalid = validationState === 'invalid';

  const { buttonProps, isPressed } = useButton(triggerProps, triggerRef);
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const handleClose = React.useCallback(() => void state.close(), [state]);

  const { className } = useStyles({
    hasStartIcon: Boolean(startIcon),
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    isPressed,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-select': true,
    'manifest-select--disabled': isDisabled,
    'manifest-select--invalid': isInvalid,
    [`manifest-select--${size}`]: size,
  });

  const containerDimensions = containerRef.current?.getBoundingClientRect();

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
      <Comp ref={mergeRefs(containerRef, forwardedRef)} className="manifest-select__wrapper">
        {startIcon && (
          <span className={cx('manifest-select__icon', 'manifest-select__icon--start')}>
            {startIcon}
          </span>
        )}

        <HiddenSelect
          autoComplete={autoComplete}
          isDisabled={isDisabled}
          label={label}
          name={name}
          state={state}
          triggerRef={triggerRef}
        />

        <button
          {...mergeProps(buttonProps, focusProps, hoverProps)}
          ref={triggerRef}
          className="manifest-select__input"
        >
          <Typography {...valueProps} variant="subtext">
            {state.selectedItem ? state.selectedItem.rendered : placeholder}
          </Typography>
        </button>

        <span className={cx('manifest-select__icon', 'manifest-select__icon--end')}>
          <Icon icon="expand_more" />
        </span>

        <Overlay containerRef={containerRefProp} isOpen={state.isOpen && !isDisabled}>
          <Popover
            {...overlayProps}
            ref={popoverRef}
            className="manifest-combobox__popover"
            css={{ left: containerDimensions?.left, width: containerDimensions?.width }}
            isOpen={state.isOpen}
            onClose={handleClose}
          >
            <ListBoxBase
              {...(menuProps as ListBoxBaseProps)}
              ref={listBoxRef}
              disallowEmptySelection
              className="manifest-select__list-box"
              state={state}
            />
          </Popover>
        </Overlay>
      </Comp>
    </FormControl>
  );
});

Select.displayName = 'Select';
