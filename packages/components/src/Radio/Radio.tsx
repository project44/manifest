import type { AriaRadioProps, AriaRadioGroupProps } from '@react-types/radio';
import type { RadioGroupState } from '@react-stately/radio';
import * as React from 'react';
import { CSS, cx, useRadioStyles, useRadioGroupStyles } from './Radio.styles';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useRadio } from '@react-aria/radio';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';

/**
 * -----------------------------------------------------------------------------------------------
 * RadioGroup Context
 * -----------------------------------------------------------------------------------------------
 */

interface RadioGroupContext {
  state: RadioGroupState;
}

const RadioGroupContext = React.createContext<RadioGroupContext | null>(null);

const useRadioGroupContext = () => React.useContext(RadioGroupContext);

/**
 * -----------------------------------------------------------------------------------------------
 * Radio
 * -----------------------------------------------------------------------------------------------
 */

type RadioElement = React.ElementRef<'label'>;
type RadioNativeProps = Omit<React.ComponentPropsWithoutRef<'label'>, keyof AriaRadioProps>;

interface RadioProps extends RadioNativeProps, AriaRadioProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Radio = React.forwardRef<RadioElement, RadioProps>((props, forwardedRef) => {
  const { autoFocus, children, css, className: classNameProp, isDisabled, ...other } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const { state } = useRadioGroupContext() as RadioGroupContext;

  const { inputProps } = useRadio(props, state, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({ isDisabled });

  const { className } = useRadioStyles({
    css,
    isChecked: inputProps.checked,
    isDisabled,
    isFocusVisible,
    isHovered,
  });

  return (
    <label
      {...mergeProps(hoverProps, other)}
      className={cx('manifest-radio', className, classNameProp)}
      ref={forwardedRef}
    >
      <input
        {...mergeProps(inputProps, focusProps)}
        className="manifest-radio--input"
        ref={inputRef}
      />

      <div className="manifest-radio--control">
        <span className="manifest-radio--indicator" />
      </div>

      {children && (
        <Typography className="manifest-radio--text" variant="subtext">
          {children}
        </Typography>
      )}
    </label>
  );
});

if (__DEV__) {
  Radio.displayName = 'ManifestRadio';
}

Radio.toString = () => '.manifest-radio';

/**
 * -----------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------
 */

type RadioGroupElement = React.ElementRef<'div'>;
type RadioGroupNativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, keyof AriaRadioGroupProps>;

interface RadioGroupProps extends RadioGroupNativeProps, AriaRadioGroupProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * The layout orientation of the radio group.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

const RadioGroup = React.forwardRef<RadioGroupElement, RadioGroupProps>((props, forwardedRef) => {
  const { className: classNameProp, children, css, orientation = 'vertical', ...other } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  const { className } = useRadioGroupStyles({ css, orientation });

  return (
    <div
      {...mergeProps(radioGroupProps, other)}
      className={cx('manifest-radio-group', className, classNameProp)}
      ref={forwardedRef}
    >
      <RadioGroupContext.Provider value={{ state }}>{children}</RadioGroupContext.Provider>
    </div>
  );
});

if (__DEV__) {
  RadioGroup.displayName = 'ManifestRadioGroup';
}

RadioGroup.toString = () => '.manifest-radio-group';

export { Radio, RadioGroup };
export type { RadioProps, RadioGroupProps };
