import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import { Collapse } from '@project44-manifest/react-transition';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { noop } from '@project44-manifest/react-utils';
import { useControlledState } from '@project44-manifest/use-controlled-state';
import { MenuItem } from '../MenuItem';
import { MenuGroupProvider } from './MenuGroup.context';
import { StyledIcon, StyledMenuGroup } from './MenuGroup.styles';
import type { MenuGroupElement, MenuGroupProps } from './MenuGroup.types';

export const MenuGroup = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    defaultExpanded,
    iconProps = {},
    isExpanded: isExpandedProp,
    itemProps = {},
    label,
    labelProps,
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
        {...itemProps}
        endIcon={<StyledIcon {...iconProps} isExpanded={isExpanded} />}
        label={label}
        labelProps={labelProps}
        startIcon={startIcon}
        onClick={handleExpand}
      />
      <MenuGroupProvider value={{ isGrouped: true }}>
        <Collapse duration={100} in={isExpanded}>
          <div className="manifest-menu-group__wrapper">{children}</div>
        </Collapse>
      </MenuGroupProvider>
    </StyledMenuGroup>
  );
}) as ForwardRefComponent<MenuGroupElement, MenuGroupProps>;
