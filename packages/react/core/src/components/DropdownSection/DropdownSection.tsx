import * as React from 'react';
import { useMenuSection } from '@react-aria/menu';
import { useSeparator } from '@react-aria/separator';
import type { TreeState } from '@react-stately/tree';
import type { Node, SectionProps } from '@react-types/shared';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { DROPDOWN_ITEM } from '../DropdownItem';
import { Typography } from '../Typography';
import { useStyles } from './DropdownSection.styles';

export type DropdownSectionElement = 'li';

export interface DropdownSectionOptions<T extends As = DropdownSectionElement>
  extends Options<T>,
    StyleProps {
  /**
   * Item object in the collection.
   */
  item: Node<object>;
  /**
   * Tree state of the collection.
   */
  state: TreeState<object>;
  /**
   * The section label.
   */
  title?: React.ReactNode;
  /**
   * Callback executed on item select.
   */
  onAction?: (key: React.Key) => void;
}

export type DropdownSectionProps<T extends As = DropdownSectionElement> = Omit<
  Props<DropdownSectionOptions<T>>,
  'item' | 'state'
> &
  SectionProps<object>;

/** @private */
export const DropdownSection = createComponent<DropdownSectionOptions>((props, forwardedRef) => {
  const { as: Comp = 'li', className: classNameProp, css, item, onAction, state } = props;

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  const { separatorProps } = useSeparator({ elementType: 'li' });

  const showSeparator = item.key !== state.collection.getFirstKey();

  const { className } = useStyles({ css });

  return (
    <>
      {showSeparator && <li {...separatorProps} className="manifest-dropdown-separator" />}
      <Comp
        {...itemProps}
        ref={forwardedRef}
        className={cx(className, classNameProp, 'manifest-dropdown-section')}
      >
        {item.rendered && (
          <Typography
            {...headingProps}
            className="manifest-dropdown-section__label"
            variant="caption"
          >
            {item.rendered}
          </Typography>
        )}
        <ul {...groupProps} className="manifest-dropdown-section__group">
          {[...item.childNodes].map((node) => (
            <DROPDOWN_ITEM key={node.key} item={node} state={state} onAction={onAction} />
          ))}
        </ul>
      </Comp>
    </>
  );
});
