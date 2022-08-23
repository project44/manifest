import type { AriaMenuProps } from '@react-types/menu';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { DropdownContext, useDropdownContext } from '../Dropdown/Dropdown.context';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { DropdownItem } from '../internal/DropdownItem';
import { DropdownSection } from '../internal/DropdownSection';
import { useMenu } from '@react-aria/menu';
import { useStyles } from './DropdownMenu.styles';
import { useTreeState } from '@react-stately/tree';

export interface DropdownMenuProps extends AriaMenuProps<object>, StyleProps {}

export const DropdownMenu = createComponent<'ul', DropdownMenuProps>((props, forwardedRef) => {
  const { as: Comp = 'ul', className: classNameProp, css, ...other } = props;

  const { menuRef, menuProps: contextProps } = useDropdownContext() as DropdownContext;

  const completeProps = { ...mergeProps(contextProps, other) };

  const state = useTreeState(completeProps);
  const { menuProps } = useMenu(completeProps, state, menuRef);

  const { className } = useStyles({ css });

  return (
    <Comp
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
    </Comp>
  );
});
