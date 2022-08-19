import type { AriaRadioGroupProps } from '@react-types/radio';
import * as React from 'react';
import { CSS, cx } from '../../styles';
import { createComponent } from '@project44-manifest/system';
import { mergeProps } from '@react-aria/utils';
import { RadioGroupContext } from './RadioGroup.context';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { useStyles } from './RadioGroup.styles';

export interface RadioGroupProps extends AriaRadioGroupProps {
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

export const RadioGroup = createComponent<'div', RadioGroupProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    className: classNameProp,
    children,
    css,
    orientation = 'vertical',
    ...other
  } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  const { className } = useStyles({ css, orientation });

  const classes = cx(className, classNameProp, {
    'manifest-radio-group': true,
    [`manifest-radio-group--${orientation}`]: orientation,
  });

  return (
    <Comp {...mergeProps(radioGroupProps, other)} className={classes} ref={forwardedRef}>
      <RadioGroupContext.Provider value={{ state }}>{children}</RadioGroupContext.Provider>
    </Comp>
  );
});
