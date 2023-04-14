import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { StyledTag } from './Tag.styles';
import type { TagElement, TagProps } from './Tag.types';

export const Tag = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    className: classNameProp,
    children,
    css,
    iconProps = {},
    isRemovable,
    onRemove,
    ...other
  } = props;

  const className = cx('manifest-tag', classNameProp);

  return (
    <StyledTag {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <Typography className="manifest-tag__text" variant="caption">
        {children}
      </Typography>
      {isRemovable && (
        <Icon {...iconProps} className="manifest-tag__icon" icon="clear" onClick={onRemove} />
      )}
    </StyledTag>
  );
}) as ForwardRefComponent<TagElement, TagProps>;
