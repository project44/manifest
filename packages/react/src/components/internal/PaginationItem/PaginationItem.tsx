import { DOMProps, StyleProps } from '../../../types';
import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../../styles';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './PaginationItem.styles';

type PaginationItemElement = React.ElementRef<'button'>;

interface PaginationItemProps extends AriaButtonProps, DOMProps, StyleProps {
  /**
   * The content of the item.
   */
  children?: React.ReactNode;
  /**
   * Whether the pagination item is active.
   */
  isActive?: boolean;
}

const PaginationItem = React.forwardRef<PaginationItemElement, PaginationItemProps>(
  (props, forwardedRef) => {
    const { autoFocus, children, className: classNameProp, isActive, isDisabled } = props;

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
      <button
        {...mergeProps(buttonProps, focusProps, hoverProps)}
        className={classes}
        ref={mergeRefs(itemRef, forwardedRef)}
      >
        {children}
      </button>
    );
  },
);

export { PaginationItem };
export type { PaginationItemProps };
