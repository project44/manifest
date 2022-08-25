import * as React from 'react';
export interface DropdownContext {
    closeOnSelect?: boolean;
    menuProps: React.HTMLAttributes<HTMLUListElement>;
    menuRef: React.RefObject<HTMLUListElement>;
    onClose?(): void;
}
export declare const DropdownContext: React.Context<DropdownContext | null>;
export declare const useDropdownContext: () => DropdownContext | null;
//# sourceMappingURL=Dropdown.context.d.ts.map