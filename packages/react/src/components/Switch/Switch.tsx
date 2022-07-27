import type { DOMProps, StyleProps } from '../../types';
import type { AriaSwitchProps } from '@react-types/switch';
import * as React from 'react';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './Switch.styles';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';

type SwitchElement = React.ElementRef<'label'>;

interface SwitchProps extends AriaSwitchProps, DOMProps, StyleProps {
  /**
   * The label of the radio
   */
  chidlren?: React.ReactNode;
}

const Switch = React.forwardRef<SwitchElement, SwitchProps>((props, forwardedRef) => {
  const { autoFocus, children, className: classNameProp, css, isDisabled, ...other } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const isChecked = state.isSelected;

  const { inputProps } = useSwitch({ ...other, autoFocus, children, isDisabled }, state, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  const { className } = useStyles({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
  });

  const classes = cx(className, classNameProp, {
    'manifest-switch': true,
    'manifest-switch--checked': isChecked,
    'manifest-switch--disabled': isDisabled,
  });

  return (
    <label {...mergeProps(hoverProps, other)} className={classes} ref={forwardedRef}>
      <input
        {...mergeProps(inputProps, focusProps)}
        className="manifest-switch__input"
        ref={inputRef}
      />

      <div className="manifest-switch__control">
        <span className="manifest-switch__indicator" />
      </div>

      {children && (
        <Typography className="manifest-switch__text" variant="subtext">
          {children}
        </Typography>
      )}
    </label>
  );
});

if (__DEV__) {
  Switch.displayName = 'ManifestSwitch';
}

export { Switch };
export type { SwitchProps };
