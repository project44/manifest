import type { AriaListBoxProps } from '@react-types/listbox';
import type { ListState } from '@react-stately/list';
import type { StyleProps } from '../../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../../styles';
import { ListBoxContext } from '../ListBoxContext';
import { ListBoxItem } from '../ListBoxItem';
import { ListBoxSection } from '../ListBoxSection';
import { mergeRefs } from '@react-aria/utils';
import { useListBox } from '@react-aria/listbox';
import { useStyles } from './ListBoxBase.styles';

export interface ListBoxBaseProps extends AriaListBoxProps<object>, StyleProps {
  /**
   * The collection list state.
   */
  state: ListState<object>;
}

export const ListBoxBase = createComponent<'div', ListBoxBaseProps>((props, forwardedRef) => {
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
            return <ListBoxSection key={item.key} item={item} />;
          }

          return <ListBoxItem key={item.key} item={item} />;
        })}
      </Comp>
    </ListBoxContext.Provider>
  );
});
