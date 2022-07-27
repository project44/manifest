import type { DOMProps, StyleProps } from '../../../types';
import type { AriaListBoxProps } from '@react-types/listbox';
import type { ListState } from '@react-stately/list';
import * as React from 'react';
import { cx } from '../../../styles';
import { ListBoxContext } from '../ListBoxContext';
import { ListBoxItem } from '../ListBoxItem';
import { ListBoxSection } from '../ListBoxSection';
import { mergeRefs } from '@react-aria/utils';
import { useListBox } from '@react-aria/listbox';
import { useStyles } from './ListBoxBase.styles';

type ListBoxBaseElement = React.ElementRef<'div'>;

interface ListBoxBaseProps extends AriaListBoxProps<object>, DOMProps, StyleProps {
  /**
   * The collection list state.
   */
  state: ListState<object>;
}

const ListBoxBase = React.forwardRef<ListBoxBaseElement, ListBoxBaseProps>(
  (props, forwardedRef) => {
    const { className: classNameProp, css, state, ...other } = props;

    const listboxRef = React.useRef<HTMLDivElement>(null);

    const { listBoxProps } = useListBox(other, state, listboxRef);

    const { className } = useStyles({ css });

    return (
      <ListBoxContext.Provider value={{ state }}>
        <div
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
        </div>
      </ListBoxContext.Provider>
    );
  },
);

if (__DEV__) {
  ListBoxBase.displayName = 'ManifestListBoxBase';
}

export { ListBoxBase };
export type { ListBoxBaseProps };
