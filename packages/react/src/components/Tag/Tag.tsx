import * as React from 'react';
import { StyledDismissIcon, StyledTag, StyledTagText } from './Tag.styles';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';

type TagElement = React.ElementRef<typeof StyledTag>;
type TagNativeProps = React.ComponentPropsWithRef<typeof StyledTag>;

export interface TagProps extends ManifestProps, VariantProps<typeof StyledTag>, TagNativeProps {
  /**
   * Whether the tag is dismissible.
   *
   * @default false
   */
  isDismissible?: boolean;
  /**
   * Callback function fired when the dismiss icon is clicked.
   */
  onDismiss?: React.EventHandler<any>;
}

export const Tag = React.forwardRef<TagElement, TagProps>((props, forwardedRef) => {
  const { children, className, isDismissible, onDismiss, ...other } = props;

  const handleDismiss = React.useCallback(
    (event: React.MouseEvent<HTMLSpanElement>) => {
      event.stopPropagation();

      onDismiss?.(event);
    },
    [onDismiss],
  );

  return (
    <StyledTag {...other} className={cx('manifest-tag', className)} ref={forwardedRef}>
      <StyledTagText className="manifest-tag--text" variant="caption">
        {children}
      </StyledTagText>
      {isDismissible && (
        <StyledDismissIcon
          aria-label="dismiss"
          className="manifest-tag--dismiss-icon"
          icon="clear"
          onClick={handleDismiss}
        />
      )}
    </StyledTag>
  );
});

Tag.displayName = 'Tag';
