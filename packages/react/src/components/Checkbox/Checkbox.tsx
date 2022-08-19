import type { AriaCheckboxProps } from '@react-types/checkbox';
import * as React from 'react';
import { useHover, usePress } from '@react-aria/interactions';
import { createComponent } from '@project44-manifest/system';
import { CSS, cx } from '../../styles';
import { Icon } from '../Icon';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useStyles } from './Checkbox.styles';
import { useToggleState } from '@react-stately/toggle';

export interface CheckboxProps extends AriaCheckboxProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

export const Checkbox = createComponent<'label', CheckboxProps>((props, forwardedRef) => {
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
  const { pressProps } = usePress({ isDisabled: inputProps.disabled });

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
    <Comp {...mergeProps(hoverProps, pressProps)} className={classes} ref={forwardedRef}>
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
    </Comp>
  );
});
