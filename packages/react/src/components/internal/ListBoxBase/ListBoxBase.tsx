import type { AriaListBoxProps } from '@react-types/listbox';
import type { ListState } from '@react-stately/list';
import type { ManifestProps } from '../../../types';
import * as React from 'react';
import { cx } from '../../../styles';
import { ListBoxContext } from './ListBox.context';
import { ListBoxItem } from './ListBoxItem';
import { mergeRefs } from '@react-aria/utils';
import { StyledListBox } from './ListBox.styles';
import { useListBox } from '@react-aria/listbox';
import { ListBoxSection } from './ListBoxSection';

type ListBoxState<T extends object = object> = ListState<T>;
type ListBoxAriaProps<T extends object = object> = AriaListBoxProps<T>;
type ListBoxElement = React.ElementRef<typeof StyledListBox>;
type ListBoxNativeProps = Omit<
  React.ComponentPropsWithoutRef<typeof StyledListBox>,
  keyof ListBoxAriaProps
>;

export interface ListBoxBaseProps extends ManifestProps, ListBoxNativeProps, ListBoxAriaProps {
  state: ListBoxState;
}

export const ListBoxBase = React.forwardRef<ListBoxElement, ListBoxBaseProps>(
  (props, forwardedRef) => {
    const { as, css, className, state, ...other } = props;

    const listboxRef = React.useRef<HTMLDivElement>(null);

    const { listBoxProps } = useListBox(other, state, listboxRef);

    return (
      <ListBoxContext.Provider value={{ state }}>
        <StyledListBox
          {...listBoxProps}
          as={as}
          className={cx('manifest-listbox', className)}
          css={css}
          ref={mergeRefs(listboxRef, forwardedRef)}
        >
          {[...state.collection].map(item => {
            if (item.type === 'section') {
              return <ListBoxSection key={item.key} item={item} />;
            }

            return <ListBoxItem key={item.key} item={item} />;
          })}
        </StyledListBox>
      </ListBoxContext.Provider>
    );
  },
);
