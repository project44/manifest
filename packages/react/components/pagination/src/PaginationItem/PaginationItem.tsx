import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledPaginationItem } from './PaginationItem.styles';
import type { PaginationItemElement, PaginationItemProps } from './PaginationItem.types';

export const PaginationItem = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    autoFocus,
    children,
    className: classNameProp,
    css,
    isActive,
    isDisabled,
    ...other
  } = props;

  const itemRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    { ...props, elementType: 'button', isDisabled },
    itemRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const className = cx('manifest-pagination-item', classNameProp, {
    'manifest-pagination-item--disabled': true,
    'manifest-pagination-item--selected': isActive,
  });

  return (
    <StyledPaginationItem
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      ref={mergeRefs(itemRef, forwardedRef)}
      {...other}
      as={as}
      className={className}
      css={css}
      isActive={isActive}
      isDisabled={isDisabled}
      isFocusVisible={isFocusVisible}
      isHovered={isHovered}
      isPressed={isPressed}
    >
      {children}
    </StyledPaginationItem>
  );
}) as ForwardRefComponent<PaginationItemElement, PaginationItemProps>;
