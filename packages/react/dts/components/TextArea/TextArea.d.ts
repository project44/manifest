import * as React from 'react';
import { TextFieldBaseProps } from '../internal/TextFieldBase';
interface TextAreaProps extends Omit<TextFieldBaseProps, 'endIcon' | 'startIcon'> {
    defaultValue?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLDivElement>>;
export { TextArea };
export type { TextAreaProps };
//# sourceMappingURL=TextArea.d.ts.map