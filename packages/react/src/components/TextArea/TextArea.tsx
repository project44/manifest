import * as React from 'react';
import { chain, mergeProps, mergeRefs, useLayoutEffect } from '@react-aria/utils';
import { TextFieldBase, TextFieldBaseProps } from '../internal/TextFieldBase';
import { cx } from '../../styles';
import { useControlledState } from '@react-stately/utils';
import { useTextField } from '@react-aria/textfield';

type TextAreaElement = React.ElementRef<'div'>;

interface TextAreaProps extends Omit<TextFieldBaseProps, 'endIcon' | 'startIcon'> {
  /**
   * The default value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Temporary text that occupies the text input when it is empty.
   */
  placeholder?: string;
  /**
   * The current value (controlled).
   */
  value?: string;
  /**
   * Handler that is called when the value changes.
   */
  onChange?: (value: string) => void;
}

const TextArea = React.forwardRef<TextAreaElement, TextAreaProps>((props, forwardedRef) => {
  const {
    className,
    helperTextProps = {},
    inputProps: inputPropsProp = {},
    inputRef,
    labelProps: labelPropsProp = {},
    onChange,
    ...other
  } = props;

  const areaRef = React.useRef<HTMLTextAreaElement>(null);

  const [inputValue, setInputValue] = useControlledState(props.value, props.defaultValue, () => {
    //noop
  });

  const handleHeightChange = React.useCallback(() => {
    const input = areaRef.current as HTMLTextAreaElement;
    const prevAlignment = input.style.alignSelf;

    input.style.alignSelf = 'start';
    input.style.height = 'auto';
    input.style.height = `${input.scrollHeight}px`;
    input.style.alignSelf = prevAlignment;
  }, [areaRef]);

  const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
    { ...props, inputElementType: 'textarea', onChange: chain(onChange, setInputValue) },
    areaRef,
  );

  useLayoutEffect(() => {
    if (areaRef.current) {
      handleHeightChange();
    }
  }, [handleHeightChange, inputValue, areaRef]);

  return (
    <TextFieldBase
      {...other}
      className={cx(className, 'manifest-textarea')}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      inputProps={mergeProps(inputProps, inputPropsProp)}
      inputRef={
        mergeRefs(areaRef, inputRef as typeof areaRef) as React.RefObject<HTMLTextAreaElement>
      }
      labelProps={mergeProps(labelProps, labelPropsProp)}
      multiline
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  TextArea.displayName = 'ManifestTextArea';
}

export { TextArea };
export type { TextAreaProps };
