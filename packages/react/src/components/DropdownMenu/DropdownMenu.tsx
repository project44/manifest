import type { DOMProps, StyleProps } from '../../types';
import type { AriaMenuProps } from '@react-types/menu';
import * as React from 'react';
import { DropdownContext, useDropdownContext } from '../Dropdown/Dropdown.context';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { DropdownItem } from '../internal/DropdownItem';
import { DropdownSection } from '../internal/DropdownSection';
import { useMenu } from '@react-aria/menu';
import { useStyles } from './DropdownMenu.styles';
import { useTreeState } from '@react-stately/tree';

type DropdownMenuElement = React.ElementRef<'ul'>;

interface DropdownMenuProps extends AriaMenuProps<object>, DOMProps, StyleProps {}

const DropdownMenu = React.forwardRef<DropdownMenuElement, DropdownMenuProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, ...other } = props;

    const { menuRef, menuProps: contextProps } = useDropdownContext() as DropdownContext;

    const completeProps = { ...mergeProps(contextProps, other) };

    const state = useTreeState(completeProps);
    const { menuProps } = useMenu(completeProps, state, menuRef);

    const { className } = useStyles({ css });

    return (
      <ul
        {...menuProps}
        className={cx(className, classNameProp, 'manifest-dropdown')}
        ref={mergeRefs(menuRef, forwardedRef)}
      >
        {[...state.collection].map(item => {
          if (item.type === 'section') {
            return (
              <DropdownSection
                key={item.key}
                item={item}
                state={state}
                onAction={completeProps.onAction}
              />
            );
          }

          let menuItem = (
            <DropdownItem
              key={item.key}
              item={item}
              state={state}
              onAction={completeProps.onAction}
            />
          );

          if (item.wrapper) {
            menuItem = item.wrapper(menuItem);
          }

          return menuItem;
        })}
      </ul>
    );
  },
);

if (__DEV__) {
  DropdownMenu.displayName = 'ManifestDropdownMenu';
}

export { DropdownMenu };
export { DropdownMenuProps };
