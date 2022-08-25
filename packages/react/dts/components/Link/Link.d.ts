import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
declare type LinkNativeProps = React.ComponentPropsWithoutRef<'a'>;
interface LinkProps extends LinkNativeProps, DOMProps, StyleProps {
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export { Link };
export type { LinkProps };
//# sourceMappingURL=Link.d.ts.map