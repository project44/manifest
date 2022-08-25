import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface TagProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    isRemovable?: boolean;
    onRemove?(): void;
}
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLDivElement>>;
export { Tag };
export type { TagProps };
//# sourceMappingURL=Tag.d.ts.map