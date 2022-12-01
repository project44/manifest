import * as React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useRadio } from '@react-aria/radio';
import { mergeProps } from '@react-aria/utils';
import type { AriaRadioProps } from '@react-types/radio';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useRadioGroupContext } from '../RadioGroup';
import { Typography } from '../Typography';
import { useStyles } from './Radio.styles';

export type RadioElement = 'label';
export type RadioOptions<T extends As = RadioElement> = AriaRadioProps & Options<T> & StyleProps;
export type RadioProps<T extends As = RadioElement> = Props<RadioOptions<T>>;

export const Radio = createComponent<RadioOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'label',
    autoFocus,
    children,
    css,
    className: classNameProp,
    isDisabled,
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const { state } = useRadioGroupContext()!;

  const { inputProps } = useRadio(props, state, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({ isDisabled });
  const { pressProps } = usePress({ isDisabled: inputProps.disabled });

  const { className } = useStyles({
    css,
    isChecked: inputProps.checked,
    isDisabled: inputProps.disabled,
    isFocusVisible,
    isHovered,
  });

  const classes = cx(className, classNameProp, {
    'manifest-radio': true,
    'manifest-radio--checked': inputProps.checked,
    'manifest-radio--disabled': inputProps.disabled,
  });

  return (
    <Comp {...mergeProps(hoverProps, pressProps)} ref={forwardedRef} className={classes}>
      <input
        {...mergeProps(inputProps, focusProps)}
        ref={inputRef}
        className="manifest-radio__input"
      />

      <div className="manifest-radio__control">
        <span className="manifest-radio__indicator" />
      </div>

      {children && (
        <Typography className="manifest-radio__text" variant="subtext">
          {children}
        </Typography>
      )}
    </Comp>
  );
});
