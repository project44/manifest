import React, { ReactNode, useCallback, useState } from 'react';
import { AriaButtonProps } from '@react-aria/button';
import { ChevronDown } from '@project44-manifest/react-icons';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Dropdown, DropdownProps } from '../../../Dropdown';
import { LocalNavigationItem } from '../LocalNavigationItem';

export interface LocalNavigationDropdownItemProps extends Omit<DropdownProps, 'children'> {
  /** Should contain DropdownMenu with DropdownItems. */
  children: ReactNode;
  /** Theme aware style object. */
  css?: CSS;
  /** Props passed down to LocalNavigationItem. */
  localNavigationItemProps?: AriaButtonProps;
  /** Title of LocalNavigationItem. */
  title: ReactNode | string;
}

export const LocalNavigationDropdownItem = React.forwardRef((props, forwardedRef) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const {
    as,
    children,
    className: classNameProp,
    css,
    localNavigationItemProps,
    title,
    ...other
  } = props;
  const className = cx('manifest-local-navigation-dropdown-item', classNameProp);

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setIsMenuOpen(isOpen);
      other?.onOpenChange?.(isOpen);
    },
    [other],
  );

  return (
    <Dropdown {...(other as DropdownProps)} onOpenChange={handleOpenChange}>
      <LocalNavigationItem
        {...localNavigationItemProps}
        ref={forwardedRef}
        as={as}
        className={className}
        css={{ gap: '$small', pr: '$small', typography: '$subtext-bold', ...css }}
        isSelected={isMenuOpen}
      >
        {title}
        <ChevronDown
          css={{
            transform: `rotate(${isMenuOpen ? -180 : 0}deg)`,
            transformOrigin: '50% 54%',
            transition: 'transform 100ms',
          }}
          size="small"
        />
      </LocalNavigationItem>
      {children}
    </Dropdown>
  );
}) as ForwardRefComponent<'button', LocalNavigationDropdownItemProps>;
