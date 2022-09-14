import type { AriaButtonProps } from '@react-types/button';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './PaginationItem.styles';

export type PaginationItemElement = 'button';

export interface PaginationItemOptions<T extends As = PaginationItemElement>
  extends Options<T>,
    AriaButtonProps,
    StyleProps {
  /**
   * Whether the pagination item is active.
   */
  isActive?: boolean;
}

export type PaginationItemProps<T extends As = PaginationItemElement> = Props<
  PaginationItemOptions<T>
>;

export const PaginationItem = createComponent<PaginationItemOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'button',
    autoFocus,
    children,
    className: classNameProp,
    isActive,
    isDisabled,
  } = props;

  const itemRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    { ...props, elementType: 'button', isDisabled },
    itemRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { className } = useStyles({
    isActive,
    isDisabled,
    isFocusVisible,
    isHovered,
    isPressed,
  });

  const classes = cx(className, classNameProp, {
    'manifest-pagination-item': true,
    'manifest-pagination-item--disabled': true,
    'manifest-pagination-item--selected': isActive,
  });

  return (
    <Comp
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      className={classes}
      ref={mergeRefs(itemRef, forwardedRef)}
    >
      {children}
    </Comp>
  );
});
