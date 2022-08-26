import type { AriaComboBoxProps } from '@react-types/combobox';
import type { Placement } from '@react-types/overlays';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { ListBoxBase, ListBoxBaseProps } from '../internal/ListBoxBase';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { useButton } from '@react-aria/button';
import { useComboBox } from '@react-aria/combobox';
import { useComboBoxState } from '@react-stately/combobox';
import { useFilter } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './Combobox.styles';

export interface ComboboxProps extends AriaComboBoxProps<object>, StyleProps {
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
   * The placement of the menu with respect to its anchor element.
   *
   * @default 'bottom'
   */
  placement?: Placement;
  /**
   * The size of the combobox
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Whether the menu should automatically flip direction when space is limited.
   *
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * Icon displayed at the start of the combobox.
   */
  startIcon?: React.ReactElement;
}

export const Combobox = createComponent<'div', ComboboxProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    autoFocus,
    className: classNameProp,
    css,
    isDisabled,
    helperText,
    helperTextProps: helperTextPropsProp = {},
    label,
    labelProps: labelPropsProp = {},
    menuTrigger = 'input',
    offset = 4,
    placement = 'bottom',
    validationState,
    size = 'medium',
    shouldFlip = true,
    startIcon,
  } = props;

  const isInvalid = validationState === 'invalid';

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    menuTrigger: 'focus',
  });

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
  } = useComboBox(
    {
      ...props,
      buttonRef,
      inputRef,
      listBoxRef,
      menuTrigger,
      popoverRef,
    },
    state,
  );

  const { buttonProps } = useButton({ ...triggerProps, isDisabled }, buttonRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus,
    isTextInput: true,
    within: true,
  });

  const { className } = useStyles({
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isPlaceholder: !state.selectedItem,
    size,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-combobox': true,
    'manifest-combobox--disabled': isDisabled,
    'manifest-combobox--invalid': isInvalid,
    [`manifest-combobox--${size}`]: size,
  });

  const containerDimensions = containerRef.current?.getBoundingClientRect();

  return (
    <FormControl
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <Comp
        {...mergeProps(hoverProps, focusProps)}
        className={classes}
        ref={mergeRefs(containerRef, forwardedRef)}
      >
        {startIcon && (
          <span className={cx('manifest-combobox__icon', 'manifest-combobox__icon--start')}>
            {startIcon}
          </span>
        )}

        <input {...inputProps} className="manifest-combobox__input" ref={inputRef} />

        <span
          {...buttonProps}
          className={cx('manifest-combobox__icon', 'manifest-combobox__icon--end')}
          ref={buttonRef}
        >
          <Icon icon="expand_more" />
        </span>

        {state.isOpen && (
          <Popover
            className="manifest-combobox__popover"
            css={{ left: containerDimensions?.left, width: containerDimensions?.width }}
            offset={offset}
            placement={placement}
            ref={popoverRef}
            shouldFlip={shouldFlip}
            targetRef={containerRef}
          >
            <ListBoxBase
              {...(listBoxProps as ListBoxBaseProps)}
              className="manifest-combobox__list-box"
              disallowEmptySelection
              ref={listBoxRef}
              state={state}
            />
          </Popover>
        )}
      </Comp>
    </FormControl>
  );
});
