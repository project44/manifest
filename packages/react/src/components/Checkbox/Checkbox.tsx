import type { AriaCheckboxProps } from '@react-types/checkbox';
import * as React from 'react';
import { CSS, cx, useCheckboxStyles } from './Checkbox.styles';
import { Icon } from '../Icon';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useToggleState } from '@react-stately/toggle';

/**
 * -----------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------
 */

type CheckboxElement = React.ElementRef<'label'>;
type CheckboxNativeProps = Omit<React.ComponentPropsWithoutRef<'label'>, keyof AriaCheckboxProps>;

interface CheckboxProps extends CheckboxNativeProps, AriaCheckboxProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
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

  const { className } = useCheckboxStyles({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
    isIndeterminate,
  });

  return (
    <label
      {...mergeProps(hoverProps, other)}
      className={cx('manifest-checkbox', className, classNameProp)}
      ref={forwardedRef}
    >
      <input
        {...mergeProps(inputProps, focusProps)}
        className="manifest-checkbox--input"
        ref={inputRef}
      />

      <div className="manifest-checkbox--control">
        <span className="manifest-checkbox--indicator">
          <Icon icon={isIndeterminate ? 'remove' : 'check'} />
        </span>
      </div>

      {children && (
        <Typography className="manifest-checkbox--text" variant="subtext">
          {children}
        </Typography>
      )}
    </label>
  );
});

if (__DEV__) {
  Checkbox.displayName = 'ManifestCheckbox';
}

Checkbox.toString = () => '.manifest-checkbox';

export { Checkbox };
export type { CheckboxProps };
