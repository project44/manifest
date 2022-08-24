import type { DOMProps, StyleProps } from '../../../types';
import type { Node } from '@react-types/shared';
import type { TreeState } from '@react-stately/tree';
import * as React from 'react';
import { cx } from '../../../styles';
import { DropdownItem } from '../DropdownItem';
import { Typography } from '../../Typography';
import { useMenuSection } from '@react-aria/menu';
import { useSeparator } from '@react-aria/separator';
import { useStyles } from './DropdownSection.styles';

export interface DropdownSectionProps<T extends object = object> extends DOMProps, StyleProps {
  /**
   * The items within the section.
   */
  children?: React.ReactNode;
  /**
   * Item object in the collection.
   */
  item: Node<T>;
  /**
   * Tree state of the collection.
   */
  state: TreeState<T>;
  /**
   * The section label.
   */
  title?: React.ReactNode;
  /**
   * Callback executed on item select.
   */
  onAction?(key: React.Key): void;
}

export const DropdownSection: React.FC<DropdownSectionProps> = props => {
  const { className: classNameProp, css, item, onAction, state } = props;

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
      <li {...itemProps} className={cx(className, classNameProp, 'manifest-dropdown-section')}>
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
          {[...item.childNodes].map(node => {
            let item = (
              <DropdownItem key={node.key} item={node} state={state} onAction={onAction} />
            );

            if (node.wrapper) {
              item = node.wrapper(item);
            }

            return item;
          })}
        </ul>
      </li>
    </>
  );
};
