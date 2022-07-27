import type { ButtonSize, ButtonVariant } from '../Button';
import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { ButtonGroupContext } from './ButtonGroup.context';
import { cx } from '../../styles';
import { useStyles } from './ButtonGroup.styles';

type ButtonGroupElement = React.ElementRef<'div'>;

interface ButtonGroupProps extends DOMProps, StyleProps {
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

const ButtonGroup = React.forwardRef<ButtonGroupElement, ButtonGroupProps>(
  (props: ButtonGroupProps, forwardedRef) => {
    const {
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
      <div {...other} className={classes} ref={forwardedRef}>
        <ButtonGroupContext.Provider value={{ isDisabled, size, variant }}>
          {children}
        </ButtonGroupContext.Provider>
      </div>
    );
  },
);

if (__DEV__) {
  ButtonGroup.displayName = 'ManifestButtonGroup';
}

export { ButtonGroup };
export type { ButtonGroupProps };
