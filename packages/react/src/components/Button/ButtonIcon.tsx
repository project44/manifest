import * as React from 'react';
import { CSS, cx, VariantProps } from '../../styles';
import { StyledButtonIcon } from './Button.styles';

export interface ButtonIconProps extends VariantProps<typeof StyledButtonIcon> {
  /**
   * Class name applied to the button icon.
   */
  className?: string;
  /**
   * Styles applied to the button icon.
   */
  css?: CSS;
}

export const ButtonIcon = React.memo<React.PropsWithChildren<ButtonIconProps>>(props => {
  const { className: classNameProp, placement, ...other } = props;

  const className = cx(
    'manifest-button-icon',
    {
      [`manifest-button-icon__${placement}`]: placement,
    },
    classNameProp,
  );

  return <StyledButtonIcon className={className} placement={placement} {...other} />;
});
