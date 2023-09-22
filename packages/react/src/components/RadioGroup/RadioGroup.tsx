import * as React from 'react';
import { useRadioGroup } from '@react-aria/radio';
import { mergeProps } from '@react-aria/utils';
import { useRadioGroupState } from '@react-stately/radio';
import type { AriaRadioGroupProps } from '@react-types/radio';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { RadioGroupContext } from './RadioGroup.context';
import { useStyles } from './RadioGroup.styles';

export type RadioGroupElement = 'div';

export interface RadioGroupOptions<T extends As = RadioGroupElement>
  extends Options<T>,
    AriaRadioGroupProps,
    StyleProps {
  /**
   * The layout orientation of the radio group.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

export type RadioGroupProps<T extends As = RadioGroupElement> = Props<RadioGroupOptions<T>>;

export const RadioGroup = createComponent<RadioGroupOptions>((props, forwardedRef) => {
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
  const { isDisabled: disabled, ...rest } = radioGroupProps;

  const context = React.useMemo(() => ({ state }), [state]);

  const { className } = useStyles({ css, orientation });

  const classes = cx(className, classNameProp, {
    'manifest-radio-group': true,
    [`manifest-radio-group--${orientation}`]: orientation,
  });

  return (
    <Comp
      {...mergeProps(radioGroupProps, { disabled, ...rest })}
      ref={forwardedRef}
      className={classes}>
      <RadioGroupContext.Provider value={context}>
        {children}
      </RadioGroupContext.Provider>
    </Comp>
  );
});
