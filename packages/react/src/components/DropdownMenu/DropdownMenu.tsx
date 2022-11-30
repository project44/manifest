import { useMenu } from '@react-aria/menu';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useTreeState } from '@react-stately/tree';
import type { AriaMenuProps } from '@react-types/menu';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useDropdownContext } from '../Dropdown/Dropdown.context';
import { DROPDOWN_ITEM } from '../DropdownItem';
import { DROPDOWN_SECTION } from '../DropdownSection';
import { useStyles } from './DropdownMenu.styles';

export type DropdownMenuElement = 'ul';
export type DropdownMenuOptions<T extends As = DropdownMenuElement> = AriaMenuProps<object> &
  Options<T> &
  StyleProps;
export type DropdownMenuProps<T extends As = DropdownMenuElement> = Props<DropdownMenuOptions<T>>;

export const DropdownMenu = createComponent<DropdownMenuOptions>((props, forwardedRef) => {
  const { as: Comp = 'ul', className: classNameProp, css, ...other } = props;

  const { menuRef, menuProps: contextProps } = useDropdownContext()!;

  const completeProps = { ...mergeProps(contextProps, other) };

  const state = useTreeState(completeProps);
  const { menuProps } = useMenu(completeProps, state, menuRef);

  const { className } = useStyles({ css });

  return (
    <Comp
      {...menuProps}
      ref={mergeRefs(menuRef, forwardedRef)}
      className={cx(className, classNameProp, 'manifest-dropdown')}
    >
      {[...state.collection].map((item) => {
        if (item.type === 'section') {
          return (
            <DROPDOWN_SECTION
              key={item.key}
              item={item}
              state={state}
              onAction={completeProps.onAction}
            />
          );
        }

        return (
          <DROPDOWN_ITEM
            key={item.key}
            item={item}
            state={state}
            onAction={completeProps.onAction}
          />
        );
      })}
    </Comp>
  );
});
