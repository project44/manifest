import type { ManifestProps } from '../../../types';
import type { Node } from '@react-types/shared';
import * as React from 'react';
import { ListBoxContext, useListBoxContext } from './ListBox.context';
import { StyledListBoxSection, StyledListBoxSectionTitle } from './ListBox.styles';
import { Box } from '../../Box';
import { cx } from '../../../styles';
import { ListBoxItem } from './ListBoxItem';
import { mergeProps } from '@react-aria/utils';
import { Separator } from '../../Separator';
import { useListBoxSection } from '@react-aria/listbox';

export interface ListBoxSectionProps<T extends object = object> extends ManifestProps {
  /**
   * Item object in the collection.
   */
  item: Node<T>;
}

/**
 * @private The rendered component for the react-aria collection Section.
 */
export const ListBoxSection: React.FC<ListBoxSectionProps> = props => {
  const { as, className, css, item } = props;

  const { state } = useListBoxContext() as ListBoxContext;

  const { itemProps, headingProps, groupProps } = useListBoxSection({
    'aria-label': item['aria-label'],
    heading: item.rendered,
  });

  const showSeparator = item.key !== state.collection.getFirstKey();

  return (
    <>
      {showSeparator && (
        <Separator
          as="li"
          className="manifest-dropdown--section-separator"
          css={{ mx: '-$small', my: '$small' }}
        />
      )}
      <Box {...itemProps} className="manifest-dropdown--section-wrapper">
        {item.rendered && (
          <StyledListBoxSectionTitle
            {...headingProps}
            className="manifest-dropdown--section-label"
            variant="caption"
          >
            {item.rendered}
          </StyledListBoxSectionTitle>
        )}
        <StyledListBoxSection
          {...groupProps}
          as={item.props?.as || as}
          className={cx('manifest-dropdown-section', className)}
          css={{ ...mergeProps(css, item.props?.css) }}
        >
          {[...item.childNodes].map(node => (
            <ListBoxItem key={node.key} item={node} />
          ))}
        </StyledListBoxSection>
      </Box>
    </>
  );
};
