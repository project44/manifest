import type { DOMProps, StyleProps } from '../../types';
import type { AriaCheckboxProps } from '@react-types/checkbox';
import * as React from 'react';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './Checkbox.styles';
import { useToggleState } from '@react-stately/toggle';

type CheckboxElement = React.ElementRef<'label'>;

interface CheckboxProps extends AriaCheckboxProps, DOMProps, StyleProps {
  /**
   * The label of the checkbox
   */
  chidlren?: React.ReactNode;
}

const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>((props, forwardedRef) => {
  const {
    autoFocus,
    children,
    className: classNameProp,
    css,
    isDisabled,
    isIndeterminate,
    ...other
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const isChecked = state.isSelected;

  const { inputProps } = useCheckbox(props, state, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({ isDisabled });

  const { className } = useStyles({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
    isIndeterminate,
  });

  const classes = cx(className, classNameProp, {
    'manifest-checkbox': true,
    'manifest-checkbox--checked': isChecked,
    'manifest-checkbox--disabled': isDisabled,
    'manifest-checkbox--indeterminate': isIndeterminate,
  });

  return (
    <label {...mergeProps(hoverProps, other)} className={classes} ref={forwardedRef}>
      <input
        {...mergeProps(inputProps, focusProps)}
        className="manifest-checkbox__input"
        ref={inputRef}
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
    </label>
  );
});

if (__DEV__) {
  Checkbox.displayName = 'ManifestCheckbox';
}

export { Checkbox };
export type { CheckboxProps };
