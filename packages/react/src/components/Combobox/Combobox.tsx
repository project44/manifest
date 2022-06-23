import type { AriaComboBoxProps } from '@react-types/combobox';
import * as React from 'react';
import { comboboxStyles, CSS, cx } from './styles';
import { Item, Section } from '@react-stately/collections';
import { ListBoxBase, ListBoxBaseProps } from '../internal';
import { mergeProps, useLayoutEffect, useResizeObserver } from '@react-aria/utils';
import { FormControl } from '../FormControl';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { useComboBox } from '@react-aria/combobox';
import { useComboBoxState } from '@react-stately/combobox';
import { useFilter } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';

/**
 * -----------------------------------------------------------------------------------------------
 * Combobox
 * -----------------------------------------------------------------------------------------------
 */

type ComboboxAriaProps<T extends object = object> = AriaComboBoxProps<T>;
type ComboboxElement = React.ElementRef<'div'>;
type ComboboxElementNativeProps = Omit<
  React.ComponentPropsWithoutRef<'div'>,
  keyof ComboboxAriaProps
>;

interface ComboboxProps extends ComboboxElementNativeProps, ComboboxAriaProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
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

const Combobox = React.forwardRef<ComboboxElement, ComboboxProps>((props, forwardedRef) => {
  const {
    autoFocus,
    className: classNameProp,
    css,
    isDisabled,
    helperText,
    helperTextProps: helperTextPropsProp = {},
    label,
    labelProps: labelPropsProp = {},
    validationState,
    size = 'medium',
    startIcon: startIconProp,
  } = props;

  const isInvalid = validationState === 'invalid';

  const [popoverWidth, setPopoverWidth] = React.useState<number>(0);

  const iconRef = React.useRef<HTMLElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listBoxRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsEmptyCollection: true,
  });
  const { inputProps, listBoxProps, labelProps, descriptionProps, errorMessageProps } = useComboBox(
    {
      ...props,
      inputRef: inputRef,
      listBoxRef,
      menuTrigger: 'focus',
      popoverRef,
    },
    state,
  );

  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });

  let startIcon = startIconProp;

  if (startIcon) {
    startIcon = React.cloneElement(startIcon, { ref: iconRef });
  }

  const { className } = comboboxStyles({
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocusVisible,
    isHovered,
    isInvalid,
    size,
    css,
  });

  const handlResize = React.useCallback(() => {
    if (inputRef.current) {
      setPopoverWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef, setPopoverWidth]);

  useResizeObserver({
    ref: inputRef,
    onResize: handlResize,
  });

  useLayoutEffect(handlResize, [state.selectedKey, handlResize]);

  return (
    <FormControl
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
    >
      <div className={cx('manifest-combobox', className, classNameProp)} ref={forwardedRef}>
        {startIcon && (
          <span className={cx('manifest-combobox--icon', 'manifest-combobox--icon__start')}>
            {startIcon}
          </span>
        )}

        <input
          {...(mergeProps(inputProps, focusProps, hoverProps) as ComboboxElementNativeProps)}
          className="manifest-combobox--input"
          ref={inputRef}
        />

        <span className={cx('manifest-combobox--icon', 'manifest-combobox--icon__end')}>
          <Icon icon="expand_more" />
        </span>

        {state.isOpen && (
          <Popover
            className="manifest-combobox--popover"
            css={{ minWidth: popoverWidth, width: popoverWidth }}
            isOpen={state.isOpen}
            onClose={state.close}
            ref={popoverRef}
          >
            <ListBoxBase
              {...(listBoxProps as ListBoxBaseProps)}
              className="manifest-combobox--list-box"
              css={{ padding: '$small' }}
              disallowEmptySelection
              ref={listBoxRef}
              state={state}
            />
          </Popover>
        )}
      </div>
    </FormControl>
  );
});

if (__DEV__) {
  Combobox.displayName = 'ManifestCombobox';
}

Combobox.toString = () => '.manifest-combobox';

export { Combobox, Item as ComboboxItem, Section as ComboboxSection };
export type { ComboboxProps };
