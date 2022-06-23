import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledDropdownMenu } from './Dropdown.styles';
import { useDropdownContext } from './Dropdown.context';

type DropdownMenuElement = React.ElementRef<typeof StyledDropdownMenu>;
type DropdownMenuNativeProps = React.ComponentPropsWithRef<typeof StyledDropdownMenu>;

export interface DropdownMenuProps extends ManifestProps, DropdownMenuNativeProps {}

export const DropdownMenu = React.forwardRef<DropdownMenuElement, DropdownMenuProps>(
  (props, ref) => {
    const { className, ...other } = props;
    const { align, offset, placement, onOutsideClick, onEscapeKeyDown } = useDropdownContext();

    return (
      <DropdownPrimitive.Content
        asChild
        align={align}
        alignOffset={offset?.[0]}
        side={placement}
        sideOffset={offset?.[1]}
        onInteractOutside={onOutsideClick}
        onEscapeKeyDown={onEscapeKeyDown}
      >
        <StyledDropdownMenu {...other} className={cx('manifest-dropdown', className)} ref={ref} />
      </DropdownPrimitive.Content>
    );
  },
);
