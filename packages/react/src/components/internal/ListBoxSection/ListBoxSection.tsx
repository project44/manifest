import type { DOMProps, StyleProps } from '../../../types';
import type { Node } from '@react-types/shared';
import * as React from 'react';
import { ListBoxContext, useListBoxContext } from '../ListBoxContext';
import { cx } from '../../../styles';
import { ListBoxItem } from '../ListBoxItem';
import { Separator } from '../../Separator';
import { Typography } from '../../Typography';
import { useListBoxSection } from '@react-aria/listbox';
import { useStyles } from './ListBoxSection.styles';

export interface ListBoxSectionProps<T extends object = object> extends DOMProps, StyleProps {
  /**
   * The content of the section.
   */
  children?: React.ReactNode;
  /**
   * Item object in the collection.
   */
  item: Node<T>;
  /**
   * The section label.
   */
  title?: React.ReactNode;
}

export const ListBoxSection: React.FC<ListBoxSectionProps> = props => {
  const { className: classNameProp, css, item } = props;

  const { state } = useListBoxContext();

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    'aria-label': item['aria-label'],
    heading: item.rendered,
  });

  const showSeparator = item.key !== state.collection.getFirstKey();

  const { className } = useStyles({ css });

  return (
    <>
      {showSeparator && <Separator className="manifest-listbox-separator" />}
      <div {...itemProps} className={cx(className, classNameProp, 'manifest-listbox-section')}>
        {item.rendered && (
          <Typography
            {...headingProps}
            className="manifest-listbox-section__label"
            variant="caption"
          >
            {item.rendered}
          </Typography>
        )}
        <div {...groupProps} className="manifest-listbox-section__group">
          {[...item.childNodes].map(node => (
            <ListBoxItem key={node.key} item={node} />
          ))}
        </div>
      </div>
    </>
  );
};
