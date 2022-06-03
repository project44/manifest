import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { mergeProps } from '../../utils';
import { StyledLink } from './Link.styles';
import { useFocusRing } from '@react-aria/focus';

export interface LinkProps extends ManifestProps, React.ComponentProps<typeof StyledLink> {}

export const Link = React.forwardRef<React.ElementRef<typeof StyledLink>, LinkProps>(
  (props, forwardedRef) => {
    const { className, ...other } = props;

    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <StyledLink
        {...mergeProps(focusProps, other)}
        className={cx('manifest-link', className)}
        isFocusVisible={isFocusVisible}
        ref={forwardedRef}
      />
    );
  },
);
