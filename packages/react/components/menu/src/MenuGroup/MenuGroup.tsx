import * as React from 'react';
import { ChevronDown, ChevronUp } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { noop } from '@project44-manifest/react-utils';
import { useControlledState } from '@project44-manifest/use-controlled-state';
import { MenuItem } from '../MenuItem';
import { MenuGroupProvider } from './MenuGroup.context';
import { StyledMenuGroup } from './MenuGroup.styles';
import type { MenuGroupElement, MenuGroupProps } from './MenuGroup.types';

export const MenuGroup = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    defaultExpanded,
    isExpanded: isExpandedProp,
    label,
    onExpandedChange = noop,
    startIcon,
    ...other
  } = props;

  const [isExpanded, setExpanded] = useControlledState(
    isExpandedProp!,
    defaultExpanded ?? false,
    onExpandedChange,
  );

  const handleExpand = React.useCallback(() => {
    setExpanded(!isExpanded);
  }, [isExpanded, setExpanded]);

  const className = cx('manifest-menu-group', classNameProp);

  return (
    <StyledMenuGroup {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <MenuItem
        endIcon={
          isExpanded ? <ChevronUp aria-label="collapse" /> : <ChevronDown aria-label="expand" />
        }
        label={label}
        startIcon={startIcon}
        onClick={handleExpand}
      />
      <MenuGroupProvider value={{ isGrouped: true }}>{children}</MenuGroupProvider>
    </StyledMenuGroup>
  );
}) as ForwardRefComponent<MenuGroupElement, MenuGroupProps>;
