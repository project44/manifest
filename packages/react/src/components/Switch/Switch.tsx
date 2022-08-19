import type { AriaSwitchProps } from '@react-types/switch';
import * as React from 'react';
import { CSS, cx } from '../../styles';
import { useHover, usePress } from '@react-aria/interactions';
import { createComponent } from '@project44-manifest/system';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useStyles } from './Switch.styles';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';

export interface SwitchProps extends AriaSwitchProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

export const Switch = createComponent<'label', SwitchProps>((props, forwardedRef) => {
  const {
    as: Comp = 'label',
    autoFocus,
    children,
    className: classNameProp,
    css,
    isDisabled,
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const isChecked = state.isSelected;

  const { inputProps } = useSwitch(props, state, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });
  const { pressProps } = usePress({ isDisabled: inputProps.disabled });

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
    <Comp {...mergeProps(hoverProps, pressProps)} className={classes} ref={forwardedRef}>
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
    </Comp>
  );
});
