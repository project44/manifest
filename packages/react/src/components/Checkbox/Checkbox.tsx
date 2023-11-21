import * as React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
import type { AriaCheckboxProps } from '@react-types/checkbox';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { useStyles } from './Checkbox.styles';

export type CheckboxElement = 'label';
export type CheckboxOptions<T extends As = CheckboxElement> = AriaCheckboxProps &
  Options<T> &
  StyleProps;
export type CheckboxProps<T extends As = CheckboxElement> = Props<CheckboxOptions<T>>;

export const Checkbox = createComponent<CheckboxOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'label',
    autoFocus,
    children,
    className: classNameProp,
    css,
    isDisabled,
    isIndeterminate,
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const isChecked = state.isSelected;

  const { inputProps } = useCheckbox(props, state, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({ isDisabled });
  const { pressProps, isPressed } = usePress({ isDisabled: inputProps.disabled });

  const { className } = useStyles({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
    isIndeterminate,
    isActive: isPressed,
  });

  const classes = cx(className, classNameProp, {
    'manifest-checkbox': true,
    'manifest-checkbox--checked': isChecked,
    'manifest-checkbox--disabled': isDisabled,
    'manifest-checkbox--indeterminate': isIndeterminate,
  });

  return (
    <Comp {...mergeProps(hoverProps, pressProps)} ref={forwardedRef} className={classes}>
      <input
        {...mergeProps(inputProps, focusProps)}
        ref={inputRef}
        className="manifest-checkbox__input"
      />

      <div className="manifest-checkbox__control">
        <span className="manifest-checkbox__indicator">
          <Icon className="manifest-checkbox__icon" icon={isIndeterminate ? 'remove' : 'check'} />
        </span>
      </div>

      {children && (
        <Typography className="manifest-checkbox__text" variant="subtext">
          {children}
        </Typography>
      )}
    </Comp>
  );
});

Checkbox.displayName = 'Checkbox';
