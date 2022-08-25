import * as React from 'react';
import { TextFieldBaseProps } from '../internal/TextFieldBase';
interface TextFieldProps extends TextFieldBaseProps {
    defaultValue?: string;
    placeholder?: string;
    size?: 'medium' | 'small';
    value?: string;
    onChange?: (value: string) => void;
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLDivElement>>;
export { TextField };
export type { TextFieldProps };
//# sourceMappingURL=TextField.d.ts.map