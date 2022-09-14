import type { AriaListBoxProps } from '@react-types/listbox';
import type { ListState } from '@react-stately/list';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
import { ListBoxContext } from '../ListBoxContext';
import { _ListBoxItem } from '../ListBoxItem';
import { _ListBoxSection } from '../ListBoxSection';
import { mergeRefs } from '@react-aria/utils';
import { useListBox } from '@react-aria/listbox';
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

  const { className } = useStyles({ css });

  return (
    <ListBoxContext.Provider value={{ state }}>
      <Comp
        {...listBoxProps}
        className={cx(className, classNameProp, 'manifest-listbox')}
        ref={mergeRefs(listboxRef, forwardedRef)}
      >
        {[...state.collection].map(item => {
          if (item.type === 'section') {
            return <_ListBoxSection key={item.key} item={item} />;
          }

          return <_ListBoxItem key={item.key} item={item} />;
        })}
      </Comp>
    </ListBoxContext.Provider>
  );
});
