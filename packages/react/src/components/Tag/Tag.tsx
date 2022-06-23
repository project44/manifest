import * as React from 'react';
import { CSS, cx, useTagStyles } from './Tag.styles';
import { Icon } from '../Icon';
import { IconButton } from '../Button';
import { Typography } from '../Typography';

/**
 * -----------------------------------------------------------------------------------------------
 * Tag
 * -----------------------------------------------------------------------------------------------
 */

type TagElement = React.ElementRef<'div'>;
type TagNativeProps = React.ComponentPropsWithRef<'div'>;

interface TagProps extends TagNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Whether the tag is removeable.
   */
  isRemovable?: boolean;
  /**
   * Handler called on tag removable.
   */
  onRemove?(): void;
}

const Tag = React.forwardRef<TagElement, TagProps>((props, forwardedRef) => {
  const { children, className: classNameProp, css, isRemovable, onRemove, ...other } = props;

  const { className } = useTagStyles({ css, isRemovable });

  return (
    <div {...other} className={cx('manifest-tag', className, classNameProp)} ref={forwardedRef}>
      <Typography className="manifest-tag--text" variant="caption">
        {children}
      </Typography>
      {isRemovable && (
        <IconButton
          aria-label="remove"
          className="manifest-tag--button"
          onPress={onRemove}
          size="small"
          variant="tertiary"
        >
          <Icon className="manifest-tag--icon" icon="clear" />
        </IconButton>
      )}
    </div>
  );
});

if (__DEV__) {
  Tag.displayName = 'ManifestTag';
}

Tag.toString = () => '.manifest-tag';

export { Tag };
export type { TagProps };
