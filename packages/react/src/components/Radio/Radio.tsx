import { DOMProps, StyleProps } from '../../types';
import type { AriaRadioProps } from '@react-types/radio';
import * as React from 'react';
import { RadioGroupContext, useRadioGroupContext } from '../RadioGroup';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { Typography } from '../Typography';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useRadio } from '@react-aria/radio';
import { useStyles } from './Radio.styles';

type RadioElement = React.ElementRef<'label'>;

interface RadioProps extends AriaRadioProps, DOMProps, StyleProps {
  /**
   * The label of the radio
   */
  chidlren?: React.ReactNode;
}

const Radio = React.forwardRef<RadioElement, RadioProps>((props, forwardedRef) => {
  const { autoFocus, children, css, className: classNameProp, isDisabled, ...other } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const { state } = useRadioGroupContext() as RadioGroupContext;

  const { inputProps } = useRadio(props, state, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({ isDisabled });

  const { className } = useStyles({
    css,
    isChecked: inputProps.checked,
    isDisabled,
    isFocusVisible,
    isHovered,
  });

  const classes = cx(className, classNameProp, {
    'manifest-radio': true,
    'manifest-radio--checked': inputProps.checked,
    'manifest-radio--disabled': isDisabled,
  });

  return (
    <label {...mergeProps(hoverProps, other)} className={classes} ref={forwardedRef}>
      <input
        {...mergeProps(inputProps, focusProps)}
        className="manifest-radio__input"
        ref={inputRef}
      />

      <div className="manifest-radio__control">
        <span className="manifest-radio__indicator" />
      </div>

      {children && (
        <Typography className="manifest-radio__text" variant="subtext">
          {children}
        </Typography>
      )}
    </label>
  );
});

if (__DEV__) {
  Radio.displayName = 'ManifestRadio';
}

export { Radio };
export type { RadioProps };
