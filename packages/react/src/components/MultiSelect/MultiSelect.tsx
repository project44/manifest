import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { Stack } from '@project44-manifest/react-layout';
import { Overlay, Placement, useOverlayPosition } from '@project44-manifest/react-overlay';
import { Popover } from '@project44-manifest/react-popover';
import { cx } from '@project44-manifest/react-styles';
import { useMultiSelect } from '../../hooks';
import { useMultiSelectState } from '../../state';
import { As, createComponent, Options, Props } from '../../system';
import type { AriaMultiSelectProps, StyleProps } from '../../types';
import { FormControl } from '../FormControl';
import { HiddenMultiSelect } from '../HiddenMultiSelect';
import { Icon } from '../Icon';
import { ListBoxBase, ListBoxBaseProps } from '../ListBoxBase';
import { Tag } from '../Tag';
import { Typography } from '../Typography';
import { useStyles } from './MultiSelect.styles';

export type MultiSelectElement = 'label';

export interface MultiSelectOptions<T extends As = MultiSelectElement>
  extends Options<T>,
    AriaMultiSelectProps<object>,
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
   * Icon displayed at the start of the text field.
   *
   * @example
   * <Combobox startIcon={<Icon />} />
   */
  startIcon?: React.ReactElement;
}

export type MultiSelectProps<T extends As = MultiSelectElement> = Props<MultiSelectOptions<T>>;

export const MultiSelect = createComponent<MultiSelectOptions>((props, forwardedRef) => {
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
    startIcon,
  } = props;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const state = useMultiSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps } =
    useMultiSelect(props, state, triggerRef);

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

  const handleRemove = (key: React.Key) => () => void state.selectionManager.toggleSelection(key);

  const { className } = useStyles({
    hasStartIcon: Boolean(startIcon),
    isActive: state.isOpen,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItems,
    isPressed,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-multi-select': true,
    'manifest-multi-select--disabled': isDisabled,
    'manifest-multi-select--invalid': isInvalid,
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
      <Comp ref={mergeRefs(containerRef, forwardedRef)} className="manifest-multi-select__wrapper">
        {startIcon && (
          <span className={cx('manifest-multi-select__icon', 'manifest-multi-select__icon--start')}>
            {startIcon}
          </span>
        )}

        <HiddenMultiSelect
          autoComplete={autoComplete}
          isDisabled={isDisabled}
          label={label}
          name={name}
          state={state}
          triggerRef={triggerRef}
        />

        <button
          {...mergeProps(buttonProps, focusProps, hoverProps, { autoFocus })}
          ref={triggerRef}
          className="manifest-multi-select__input"
        >
          {state.selectedItems.length > 0 ? (
            <Stack css={{ flexWrap: 'wrap' }} gap="x-small" orientation="horizontal">
              {state.selectedItems?.map((item) => (
                <Tag key={item.key} isRemovable onRemove={handleRemove(item.key)}>
                  {item.textValue}
                </Tag>
              ))}
            </Stack>
          ) : (
            <Typography {...valueProps} variant="subtext">
              {placeholder}
            </Typography>
          )}
        </button>

        <span className={cx('manifest-multi-select__icon', 'manifest-multi-select__icon--end')}>
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
              className="manifest-multi-select__list-box"
              state={state}
            />
          </Popover>
        </Overlay>
      </Comp>
    </FormControl>
  );
});
