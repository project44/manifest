import * as React from 'react';
import { useMenuSection } from '@react-aria/menu';
import { useSeparator } from '@react-aria/separator';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { DROPDOWN_ITEM } from '../DropdownItem';
import {
  StyledDropdownSection,
  StyledDropdownSectionGroup,
  StyledDropdownSectionLabel,
  StyledDropdownSeperator,
} from './DropdownSection.styles';
import type { DropdownSectionElement, DropdownSectionOptions } from './DropdownSection.types';

/** @private */
export const DropdownSection = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, item, onAction, state } = props;

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  const { separatorProps } = useSeparator({ elementType: 'li' });

  const showSeparator = item.key !== state.collection.getFirstKey();

  return (
    <>
      {showSeparator && (
        <StyledDropdownSeperator {...separatorProps} className="manifest-dropdown-separator" />
      )}
      <StyledDropdownSection
        {...itemProps}
        ref={forwardedRef}
        as={as}
        className={cx('manifest-dropdown-section', classNameProp)}
        css={css}
      >
        {item.rendered && (
          <StyledDropdownSectionLabel
            {...headingProps}
            className="manifest-dropdown-section__label"
            variant="caption"
          >
            {item.rendered}
          </StyledDropdownSectionLabel>
        )}
        <StyledDropdownSectionGroup {...groupProps} className="manifest-dropdown-section__group">
          {[...item.childNodes].map((node) => (
            <DROPDOWN_ITEM key={node.key} item={node} state={state} onAction={onAction} />
          ))}
        </StyledDropdownSectionGroup>
      </StyledDropdownSection>
    </>
  );
}) as ForwardRefComponent<DropdownSectionElement, DropdownSectionOptions>;

DropdownSection.displayName = 'DropdownSection';
