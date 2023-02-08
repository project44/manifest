import * as React from 'react';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon.types';

export function createIcon(path: React.ReactNode) {
  const Component = React.forwardRef((props, ref) => (
    <Icon ref={ref} {...props}>
      {path}
    </Icon>
  )) as ForwardRefComponent<'svg', IconProps>;

  return React.memo(Component);
}
