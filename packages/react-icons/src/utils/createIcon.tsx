import * as React from 'react';
import type { IconProps } from '@project44-manifest/react-icon/src/Icon.types';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Icon } from '../Icon'; //

export function createIcon(path: React.ReactNode) {
  const Component = React.forwardRef((props, ref) => (
    <Icon ref={ref} {...props}>
      {path}
    </Icon>
  )) as ForwardRefComponent<'svg', IconProps>;

  return React.memo(Component);
}

// pull into new react-icons package
