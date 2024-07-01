import * as React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useSwitch } from '@react-aria/switch';
import { mergeProps } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
import type { AriaSwitchProps } from '@react-types/switch';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { Typography } from '../Typography';
import { useStyles } from './Switch.styles';

export type SwitchElement = 'label';
export type SwitchProps<T extends As = SwitchElement> = Props<SwitchOptions<T>>;
export interface SwitchOptions<T extends As = SwitchElement>
  extends AriaSwitchProps,
    Options<T>,
    StyleProps {
  /**
   * The size of the component
   *
   * @default medium
   */
  size?: 'medium' | 'small';
}

export const Switch = createComponent<SwitchOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'label',
    autoFocus,
    children,
    className: classNameProp,
    css,
    isDisabled,
    size = 'medium',
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const isChecked = state.isSelected;

  const { inputProps } = useSwitch(props, state, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });
  const { pressProps, isPressed } = usePress({ isDisabled: inputProps.disabled });

  const { className } = useStyles({
    css,
    size,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
    isActive: isPressed,
  });

  const classes = cx(className, classNameProp, {
    'manifest-switch': true,
    'manifest-switch--checked': isChecked,
    'manifest-switch--disabled': isDisabled,
    [`manifest-switch--${size}`]: size,
  });

  return (
    <Comp {...mergeProps(hoverProps, pressProps)} ref={forwardedRef} className={classes}>
      <input
        {...mergeProps(inputProps, focusProps)}
        ref={inputRef}
        className="manifest-switch__input"
      />

      <div className="manifest-switch__control">
        <span className="manifest-switch__indicator" />
      </div>

      {children && (
        <Typography
          className="manifest-switch__text"
          variant={size === 'small' ? 'caption' : 'subtext'}
        >
          {children}
        </Typography>
      )}
    </Comp>
  );
});

Switch.displayName = 'Switch';
