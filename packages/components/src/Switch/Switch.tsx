import type { AriaSwitchProps } from '@react-types/switch';
import * as React from 'react';
import { CSS, cx, useSwitchStyles } from './Switch.styles';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';

/**
 * -----------------------------------------------------------------------------------------------
 * Switch
 * -----------------------------------------------------------------------------------------------
 */

type SwitchElement = React.ElementRef<'label'>;
type SwitchNativeProps = Omit<React.ComponentPropsWithoutRef<'label'>, keyof AriaSwitchProps>;

interface SwitchProps extends SwitchNativeProps, AriaSwitchProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Switch = React.forwardRef<SwitchElement, SwitchProps>((props, forwardedRef) => {
  const { autoFocus, children, className: classNameProp, css, isDisabled, ...other } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const isChecked = state.isSelected;

  const { inputProps } = useSwitch({ ...other, autoFocus, children, isDisabled }, state, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  const { className } = useSwitchStyles({
    css,
    isChecked,
    isDisabled,
    isFocusVisible,
    isHovered,
  });

  return (
    <label
      {...mergeProps(hoverProps, other)}
      className={cx('manifest-switch', className, classNameProp)}
      ref={forwardedRef}
    >
      <input
        {...mergeProps(inputProps, focusProps)}
        className="manifest-switch--input"
        ref={inputRef}
      />

      <div className="manifest-switch--control">
        <span className="manifest-switch--indicator" />
      </div>

      {children && (
        <Typography className="manifest-switch--text" variant="subtext">
          {children}
        </Typography>
      )}
    </label>
  );
});

if (__DEV__) {
  Switch.displayName = 'ManifestSwitch';
}

Switch.toString = () => '.manifest-switch';

export { Switch };
export type { SwitchProps };
