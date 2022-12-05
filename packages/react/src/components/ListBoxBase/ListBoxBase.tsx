import * as React from 'react';
import { useListBox } from '@react-aria/listbox';
import { mergeRefs } from '@react-aria/utils';
import type { ListState } from '@react-stately/list';
import type { AriaListBoxProps } from '@react-types/listbox';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { ListBoxContext } from '../ListBoxContext';
import { LIST_BOX_ITEM } from '../ListBoxItem';
import { LIST_BOX_SECTION } from '../ListBoxSection';
import { useStyles } from './ListBoxBase.styles';

export type ListBoxBaseElement = 'div';

export interface ListBoxBaseOptions<T extends As = ListBoxBaseElement>
  extends Options<T>,
    AriaListBoxProps<object>,
    StyleProps {
  /**
   * The collection list state.
   */
  state: ListState<object>;
}

export type ListBoxBaseProps<T extends As = ListBoxBaseElement> = Props<ListBoxBaseOptions<T>>;

export const ListBoxBase = createComponent<ListBoxBaseOptions>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, state, ...other } = props;

  const listboxRef = React.useRef<HTMLDivElement>(null);

  const { listBoxProps } = useListBox(other, state, listboxRef);
  const { selectionMode } = state.selectionManager;

  const context = React.useMemo(() => ({ state }), [state]);

  const { className } = useStyles({ css });

  return (
    <ListBoxContext.Provider value={context}>
      <Comp
        {...listBoxProps}
        ref={mergeRefs(listboxRef, forwardedRef)}
        className={cx(className, classNameProp, 'manifest-listbox')}
      >
        {[...state.collection].map((item) => {
          if (item.type === 'section') {
            return <LIST_BOX_SECTION key={item.key} item={item} />;
          }

          return <LIST_BOX_ITEM key={item.key} item={item} selectionMode={selectionMode} />;
        })}
      </Comp>
    </ListBoxContext.Provider>
  );
});
