import type { StyleProps } from '../../types';
import * as React from 'react';
export declare type AvatarSize = 'small' | 'medium';
export interface AvatarProps extends StyleProps {
    alt?: string;
    fallback?: React.ReactNode;
    size?: 'medium' | 'small';
    src?: string;
}
export declare const Avatar: import("@project44-manifest/system").Component<AvatarProps>;
//# sourceMappingURL=Avatar.d.ts.map