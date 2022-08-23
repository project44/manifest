import type { ButtonSize, ButtonVariant } from '../Button';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { ButtonGroupContext } from './ButtonGroup.context';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './ButtonGroup.styles';

export interface ButtonGroupProps extends StyleProps {
  /**
   * The buttons within the group.
   */
  children?: React.ReactNode;
  /**
   * Whether the buttons in the button group are all disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the buttons in the button are attached.
   */
  isAttached?: boolean;
  /**
   * The size of the buttons in the group.
   *
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * The group variant
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

export const ButtonGroup = createComponent<'div', ButtonGroupProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isDisabled,
    isAttached,
    size,
    variant,
    ...other
  } = props;

  const { className } = useStyles({ css, isAttached });

  const classes = cx(className, classNameProp, {
    ['manifest-button-group']: true,
    [`manifest-button-group--attached`]: isAttached,
  });

  return (
    <Comp {...other} className={classes} ref={forwardedRef}>
      <ButtonGroupContext.Provider value={{ isDisabled, size, variant }}>
        {children}
      </ButtonGroupContext.Provider>
    </Comp>
  );
});
