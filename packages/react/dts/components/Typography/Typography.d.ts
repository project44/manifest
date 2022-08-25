import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface TypographyProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    variant?: 'body' | 'bodyBold' | 'caption' | 'captionBold' | 'display' | 'heading' | 'subtext' | 'subtextBold' | 'subtitle' | 'title';
}
declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLSpanElement>>;
export { Typography };
export type { TypographyProps };
//# sourceMappingURL=Typography.d.ts.map