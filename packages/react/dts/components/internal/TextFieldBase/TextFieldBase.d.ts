import type { FocusableProps, ValidationState } from '@react-types/shared';
import type { StyleProps } from '../../../types';
import * as React from 'react';
export interface TextFieldBaseProps extends StyleProps, FocusableProps {
    endIcon?: React.ReactNode;
    helperText?: React.ReactNode;
    helperTextProps?: React.HTMLAttributes<HTMLElement>;
    inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    label?: React.ReactNode;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
    multiline?: boolean;
    startIcon?: React.ReactNode;
    validationState?: ValidationState;
}
export declare const TextFieldBase: import("@project44-manifest/system").Component<TextFieldBaseProps>;
//# sourceMappingURL=TextFieldBase.d.ts.map