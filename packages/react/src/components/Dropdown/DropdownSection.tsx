import type { ManifestProps } from '../../types';
import type { Node } from '@react-types/shared';
import type { TreeState } from '@react-stately/tree';
import * as React from 'react';
import { StyledDropdownSection, StyledDropdownSectionTitle } from './Dropdown.styles';
import { Box } from '../Box';
import { cx } from '../../styles';
import { DropdownItem } from './DropdownItem';
import { mergeProps } from '@react-aria/utils';
import { Separator } from '../Separator';
import { useMenuSection } from '@react-aria/menu';

export interface DropdownSectionProps<T extends object = object> extends ManifestProps {
  /**
   * Item object in the collection.
   */
  item: Node<T>;
  /**
   * Tree state of the collection.
   */
  state: TreeState<T>;
  /**
   * Callback executed on item select.
   */
  onAction?(key: React.Key): void;
}

/**
 * @private The rendered component for the react-aria collection Section.
 */
export const DropdownSection: React.FC<DropdownSectionProps> = props => {
  const { as, className, css, item, onAction, state } = props;

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  const showSeparator = item.key !== state.collection.getFirstKey();

  return (
    <>
      {showSeparator && (
        <Separator
          className="manifest-dropdown--section-separator"
          css={{ mx: '-$small', my: '$small' }}
        />
      )}
      <Box {...itemProps} className="manifest-dropdown--section-wrapper">
        {item.rendered && (
          <StyledDropdownSectionTitle
            {...headingProps}
            className="manifest-dropdown--section-label"
            variant="caption"
          >
            {item.rendered}
          </StyledDropdownSectionTitle>
        )}
        <StyledDropdownSection
          {...groupProps}
          as={item.props?.as || as}
          className={cx('manifest-dropdown-section', className)}
          css={{ ...mergeProps(css, item.props?.css) }}
        >
          {[...item.childNodes].map(node => {
            let item = (
              <DropdownItem key={node.key} item={node} state={state} onAction={onAction} />
            );

            if (node.wrapper) {
              item = node.wrapper(item);
            }

            return item;
          })}
        </StyledDropdownSection>
      </Box>
    </>
  );
};
