import * as React from 'react';
import { Close } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '../../utils';
import { useDialogContext } from '../Dialog';
import { Typography, TypographyProps } from '../Typography';
import { StyledButton, StyledDialogHeader } from './DialogHeader.styles';
import type { DialogHeaderElement, DialogHeaderProps } from './DialogHeader.types';

export const DialogHeader = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    buttonProps = {},
    children,
    className: classNameProp,
    css,
    typographyProps = {},
    ...other
  } = props;

  const { isDismissable, onClose, titleProps } = useDialogContext();

  const className = cx('manifest-dialog-header', classNameProp);

  return (
    <StyledDialogHeader {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <Typography
        className="manifest-dialog-header__typography"
        role="heading"
        variant="title"
        {...(mergeProps(titleProps, typographyProps) as TypographyProps)} // TODO remove casting
      >
        {children}
      </Typography>
      {isDismissable && (
        <StyledButton
          className="manifest-dialog-header__button"
          variant="tertiary"
          onPress={onClose}
          {...buttonProps}
        >
          <Close />
        </StyledButton>
      )}
    </StyledDialogHeader>
  );
}) as ForwardRefComponent<DialogHeaderElement, DialogHeaderProps>;
