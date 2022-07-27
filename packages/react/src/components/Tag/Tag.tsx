import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { useStyles } from './Tag.styles';

type TagElement = React.ElementRef<'div'>;

interface TagProps extends DOMProps, StyleProps {
  /**
   * The tag label.
   */
  children?: React.ReactNode;
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

  const { className } = useStyles({ css, isRemovable });

  return (
    <div {...other} className={cx(className, classNameProp, 'manifest-tag')} ref={forwardedRef}>
      <Typography className="manifest-tag__text" variant="caption">
        {children}
      </Typography>
      {isRemovable && (
        <IconButton
          aria-label="remove"
          className="manifest-tag__button"
          onClick={onRemove}
          size="small"
          variant="tertiary"
        >
          <Icon className="manifest-tag__icon" icon="clear" />
        </IconButton>
      )}
    </div>
  );
});

if (__DEV__) {
  Tag.displayName = 'ManifestTag';
}

export { Tag };
export type { TagProps };
