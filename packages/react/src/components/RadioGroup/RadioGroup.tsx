import { DOMProps, StyleProps } from '../../types';
import type { AriaRadioGroupProps } from '@react-types/radio';
import * as React from 'react';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { RadioGroupContext } from './RadioGroup.context';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { useStyles } from './RadioGroup.styles';

type RadioGroupElement = React.ElementRef<'div'>;

interface RadioGroupProps extends AriaRadioGroupProps, DOMProps, StyleProps {
  /**
   * The radios within the group.
   */
  children?: React.ReactNode;
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

  const { className } = useStyles({ css, orientation });

  const classes = cx(className, classNameProp, {
    'manifest-radio-group': true,
    [`manifest-radio-group--${orientation}`]: orientation,
  });

  return (
    <div {...mergeProps(radioGroupProps, other)} className={classes} ref={forwardedRef}>
      <RadioGroupContext.Provider value={{ state }}>{children}</RadioGroupContext.Provider>
    </div>
  );
});

if (__DEV__) {
  RadioGroup.displayName = 'ManifestRadioGroup';
}

export { RadioGroup };
export type { RadioGroupProps };
