import { createContext } from '../../utils';

export interface FormControlContext {
  hasHelperText?: boolean;
  helperTextId?: string;
  id?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  labelId?: string;
  setHasHelperText?(hasHelperText: boolean): void;
}

const [FormControlProvider, useFormControl] =
  createContext<FormControlContext>('FormControlProvider');

export { FormControlProvider, useFormControl };
