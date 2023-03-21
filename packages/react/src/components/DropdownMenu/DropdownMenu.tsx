import * as React from 'react';
import { useMenu } from '@react-aria/menu';
import { useTreeState } from '@react-stately/tree';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '../../utils';
import { useDropdownContext } from '../Dropdown';
import { DROPDOWN_ITEM } from '../DropdownItem';
import { DROPDOWN_SECTION } from '../DropdownSection';
import { StyledDropdownMenu } from './DropdownMenu.styles';
import type { DropdownMenuElement, DropdownMenuProps } from './DropdownMenu.types';

export const DropdownMenu = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, ...other } = props;

  const { menuRef, menuProps: contextProps } = useDropdownContext()!;

  const completeProps = React.useMemo(
    () => ({ ...mergeProps(contextProps, other) }),
    [contextProps, other],
  );

  const state = useTreeState(completeProps);
  const { menuProps } = useMenu(completeProps, state, menuRef);

  const handleAction = React.useCallback(
    (key: React.Key) => {
      completeProps.onAction?.(key);
    },
    [completeProps],
  );

  return (
    <StyledDropdownMenu
      {...menuProps}
      ref={mergeRefs(menuRef, forwardedRef)}
      as={as}
      className={cx('manifest-dropdown', classNameProp)}
      css={css}
    >
      {[...state.collection].map((item) => {
        if (item.type === 'section') {
          return (
            <DROPDOWN_SECTION key={item.key} item={item} state={state} onAction={handleAction} />
          );
        }

        return <DROPDOWN_ITEM key={item.key} item={item} state={state} onAction={handleAction} />;
      })}
    </StyledDropdownMenu>
  );
}) as ForwardRefComponent<DropdownMenuElement, DropdownMenuProps>;
