import { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface PaginationProps extends DOMProps, StyleProps {
    boundaries?: number;
    defaultPage?: number;
    page?: number;
    rowsPerPage?: number;
    showPageNumbers?: boolean;
    siblings?: number;
    totalRowCount?: number;
    onChange?(page: number): void;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export { Pagination };
export type { PaginationProps };
//# sourceMappingURL=Pagination.d.ts.map