import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { useStyles } from './Tag.styles';

export type TagElement = 'div';

export interface TagOptions<T extends As = TagElement> extends Options<T>, StyleProps {
  /**
   * Whether the tag is removeable.
   */
  isRemovable?: boolean;
  /**
   * Handler called on tag removable.
   */
  onRemove?: () => void;
}

export type TagProps<T extends As = TagElement> = Props<TagOptions<T>>;

export const Tag = createComponent<TagOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isRemovable,
    onRemove,
    ...other
  } = props;

  const { className } = useStyles({ css, isRemovable });

  return (
    <Comp {...other} ref={forwardedRef} className={cx(className, classNameProp, 'manifest-tag')}>
      <Typography className="manifest-tag__text" variant="caption">
        {children}
      </Typography>
      {isRemovable && (
        <Icon aria-label="remove" className="manifest-tag__icon" icon="clear" onClick={onRemove} />
      )}
    </Comp>
  );
});
