import type { AriaListBoxProps } from '@react-types/listbox';
import type { FocusableProps } from '@react-types/shared';
import type { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';
import * as React from 'react';
import {
  CSS,
  cx,
  useListBoxStyles,
  useListItemBoxStyles,
  useListBoxSectionStyles,
} from './ListBox.styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { Icon } from '../Icon';
import { Separator } from '../Separator';
import { Typography } from '../Typography';
import { useHover } from '@react-aria/interactions';
import { useListBox } from '@react-aria/listbox';
import { useListBoxSection } from '@react-aria/listbox';
import { useOption } from '@react-aria/listbox';

/**
 * -----------------------------------------------------------------------------------------------
 * ListBox Context
 * -----------------------------------------------------------------------------------------------
 */

interface ListBoxContext<T extends object = object> {
  state: ListState<T>;
}

const ListBoxContext = React.createContext<ListBoxContext | null>(null);

const useListBoxContext = () => React.useContext(ListBoxContext);

/**
 * -----------------------------------------------------------------------------------------------
 * ListBox
 * -----------------------------------------------------------------------------------------------
 */

type ListBoxState<T extends object = object> = ListState<T>;
type ListBoxAriaProps<T extends object = object> = AriaListBoxProps<T>;
type ListBoxElement = React.ElementRef<'div'>;
type ListBoxNativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, keyof ListBoxAriaProps>;

interface ListBoxProps extends ListBoxNativeProps, ListBoxAriaProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * The collection list state.
   */
  state: ListBoxState;
}

const ListBox = React.forwardRef<ListBoxElement, ListBoxProps>((props, forwardedRef) => {
  const { className: classNameProp, css, state, ...other } = props;

  const listboxRef = React.useRef<HTMLDivElement>(null);

  const { listBoxProps } = useListBox(other, state, listboxRef);

  const { className } = useListBoxStyles({ css });

  return (
    <ListBoxContext.Provider value={{ state }}>
      <div
        {...listBoxProps}
        className={cx('manifest-listbox', className, classNameProp)}
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
});

if (__DEV__) {
  ListBox.displayName = 'ManifestListBox';
}

ListBox.toString = () => '.manifest-listbox';

/**
 * -----------------------------------------------------------------------------------------------
 * ListBoxItem @private The rendered component for the react-aria collection Item.
 * -----------------------------------------------------------------------------------------------
 */

type ListBoxItemNativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, keyof FocusableProps>;

interface ListBoxItemProps<T extends object = object>
  extends ListBoxItemNativeProps,
    FocusableProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Whether the item is virtualized.
   */
  isVirtualized?: boolean;
  /**
   * Item object in the collection.
   */
  item: Node<T>;
  /**
   * Icon added before the item text.
   */
  startIcon?: React.ReactElement;
  /**
   * Callback executed on item select.
   */
  onAction?(key: React.Key): void;
}

const ListBoxItem: React.FC<ListBoxItemProps> = props => {
  const { className: classNameProp, css, isVirtualized, item, startIcon: startIconProp } = props;

  const { rendered, key } = item;

  const itemRef = React.useRef<HTMLDivElement>(null);

  const { state } = useListBoxContext() as ListBoxContext;

  const { optionProps, labelProps, isFocused, isDisabled, isPressed, isSelected } = useOption(
    {
      'aria-label': item['aria-label'],
      key,
      isVirtualized,
    },
    state,
    itemRef,
  );
  const { hoverProps, isHovered } = useHover({ isDisabled });

  console.log(isSelected);

  const startIcon = React.useMemo(
    () => startIconProp ?? (item.props.startIcon as React.ReactElement),
    [startIconProp, item.props.startIcon],
  );

  const { className } = useListItemBoxStyles({
    css,
    isDisabled,
    isFocused,
    isHovered,
    isPressed,
    isSelected,
  });

  return (
    <div
      {...mergeProps(optionProps, hoverProps)}
      className={cx('manifest-listbox-item', className, classNameProp)}
      ref={itemRef}
    >
      {startIcon && (
        <span className={cx('manifest-listbox-item--icon', 'manifest-listbox-item--icon__start')}>
          {startIcon}
        </span>
      )}

      <Typography {...labelProps} className="manifest-listbox-item--text" variant="subtext">
        {rendered}
      </Typography>

      {isSelected && (
        <span className={cx('manifest-listbox-item--icon', 'manifest-listbox-item--icon__end')}>
          <Icon icon="check" />
        </span>
      )}
    </div>
  );
};

if (__DEV__) {
  ListBoxItem.displayName = 'ManifestListBoxItem';
}

ListBoxItem.toString = () => '.manifest-listbox-item';

/**
 * -----------------------------------------------------------------------------------------------
 * ListBoxSection @private The rendered component for the react-aria collection Item.
 * -----------------------------------------------------------------------------------------------
 */

type ListBoxSectionNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface ListBoxSectionProps<T extends object = object> extends ListBoxSectionNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Item object in the collection.
   */
  item: Node<T>;
}

const ListBoxSection: React.FC<ListBoxSectionProps> = props => {
  const { className: classNameProp, css, item } = props;

  const { state } = useListBoxContext() as ListBoxContext;

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    'aria-label': item['aria-label'],
    heading: item.rendered,
  });

  const showSeparator = item.key !== state.collection.getFirstKey();

  const { className } = useListBoxSectionStyles({ css });

  return (
    <>
      {showSeparator && <Separator className="manifest-listbox-separator" />}
      <div {...itemProps} className={cx('manifest-listbox-section', className, classNameProp)}>
        {item.rendered && (
          <Typography
            {...headingProps}
            className="manifest-listbox-section--label"
            variant="caption"
          >
            {item.rendered}
          </Typography>
        )}
        <div {...groupProps} className="manifest-listbox-section--group">
          {[...item.childNodes].map(node => (
            <ListBoxItem key={node.key} item={node} />
          ))}
        </div>
      </div>
    </>
  );
};

if (__DEV__) {
  ListBoxSection.displayName = 'ManifestListBoxSection';
}

ListBoxSection.toString = () => '.manifest-listbox-section';

export { ListBox, ListBoxItem, ListBoxSection };
export type { ListBoxProps, ListBoxItemProps, ListBoxSectionProps };
