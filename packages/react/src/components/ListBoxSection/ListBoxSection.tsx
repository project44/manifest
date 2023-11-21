import { useListBoxSection } from '@react-aria/listbox';
import type { Node, SectionProps } from '@react-types/shared';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { useListBoxContext } from '../ListBoxContext';
import { LIST_BOX_ITEM } from '../ListBoxItem';
import { Separator } from '../Separator';
import { Typography } from '../Typography';
import { useStyles } from './ListBoxSection.styles';

export type ListBoxSectionElement = 'div';

export interface ListBoxSectionOptions<T extends As = ListBoxSectionElement>
  extends Options<T>,
    StyleProps {
  /**
   * Item object in the collection.
   */
  item: Node<object>;
}

export type ListBoxSectionProps<T extends As = ListBoxSectionElement> = Omit<
  Props<ListBoxSectionOptions<T>>,
  'item'
> &
  SectionProps<object>;

/** @private */
export const ListBoxSection = createComponent<ListBoxSectionOptions>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, item } = props;

  const { state } = useListBoxContext()!;

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    'aria-label': item['aria-label'],
    heading: item.rendered,
  });

  const showSeparator = item.key !== state.collection.getFirstKey();

  const { className } = useStyles({ css });

  return (
    <>
      {showSeparator && <Separator className="manifest-listbox-separator" />}
      <Comp
        {...itemProps}
        ref={forwardedRef}
        className={cx(className, classNameProp, 'manifest-listbox-section')}
      >
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
          {[...item.childNodes].map((node) => (
            <LIST_BOX_ITEM key={node.key} item={node} />
          ))}
        </div>
      </Comp>
    </>
  );
});

ListBoxSection.displayName = 'ListBoxSection';
