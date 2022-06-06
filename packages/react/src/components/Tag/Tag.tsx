import * as React from 'react';
import { StyledRemoveButton, StyledRemoveIcon, StyledTag, StyledTagText } from './Tag.styles';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';

type TagElement = React.ElementRef<typeof StyledTag>;
type TagNativeProps = React.ComponentPropsWithRef<typeof StyledTag>;

export interface TagProps
  extends ManifestProps,
    Omit<VariantProps<typeof StyledTag>, 'isClickable'>,
    TagNativeProps {
  /**
   * Callback function fired when the tag is clicked.
   */
  onClick?(): void;
  /**
   * Callback function fired when the remove icon is clicked.
   */
  onRemove?(): void;
}

export const Tag = React.forwardRef<TagElement, TagProps>((props, forwardedRef) => {
  const { children: childrenProp, className, isDisabled, onClick, onRemove, ...other } = props;

  const children = (
    <StyledTagText className="manifest-tag--text" variant="caption">
      {childrenProp}
    </StyledTagText>
  );

  if (onClick) {
    return (
      <StyledTag
        {...(other as React.ComponentPropsWithRef<'button'>)}
        as="button"
        className={cx('manifest-tag', className)}
        disabled={!!isDisabled}
        isClickable={!!onClick}
        isDisabled={isDisabled}
        onClick={onClick}
        ref={forwardedRef as React.RefObject<HTMLButtonElement>}
        type="button"
      >
        {children}
      </StyledTag>
    );
  }

  return (
    <StyledTag {...other} className={cx('manifest-tag', className)} ref={forwardedRef}>
      {children}
      {onRemove && (
        <StyledRemoveButton
          aria-label="remove"
          className="manifest-tag--remove"
          onClick={onRemove}
          size="small"
          variant="tertiary"
        >
          <StyledRemoveIcon className="manifest-tag--remove__icon" icon="clear" />
        </StyledRemoveButton>
      )}
    </StyledTag>
  );
});

Tag.displayName = 'Tag';
