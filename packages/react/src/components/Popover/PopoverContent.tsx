import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledPopoverContent } from './Popover.styles';
import { usePopoverContext } from './Popover.context';

type PopoverContentElement = React.ElementRef<typeof StyledPopoverContent>;
type PopoverContentNativeProps = React.ComponentPropsWithRef<typeof StyledPopoverContent>;

export interface PopoverContentProps extends ManifestProps, PopoverContentNativeProps {}

export const PopoverContent = React.forwardRef<PopoverContentElement, PopoverContentProps>(
  (props, forwardedRef) => {
    const { className, ...other } = props;

    const { align, offset, placement, onOutsideClick, onEscapeKeyDown } = usePopoverContext();

    return (
      <PopoverPrimitive.Content
        asChild
        align={align}
        alignOffset={offset?.[0]}
        side={placement}
        sideOffset={offset?.[1]}
        onInteractOutside={onOutsideClick}
        onEscapeKeyDown={onEscapeKeyDown}
      >
        <StyledPopoverContent
          {...other}
          className={cx('manifest-popover', className)}
          ref={forwardedRef}
        />
      </PopoverPrimitive.Content>
    );
  },
);
