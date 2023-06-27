import React from 'react';
import type { AriaButtonProps } from '@react-aria/button';
import { useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { Check, Close, CopyAll } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import { useChildrenTextContent, useCopyToClipboard } from '../../hooks';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { mergeProps, mergeRefs } from '../../utils';
import { Typography } from '../Typography';
import { useStyles } from './Tag.styles';

export type TagElement = 'div';

export interface TagOptions<T extends As = TagElement> extends Options<T>, StyleProps {
  /**
   * Whether the tag supports click to copy
   */
  isCopyable?: boolean;
  /**
   * Whether the tag is removable.
   */
  isRemovable?: boolean;
  /**
   * Whether the tag is disabled.
   */
  isDisabled?: boolean;
  /**
   * Handler called on tag removable.
   */
  onRemove?: () => void;
  /**
   * The tag label.
   */
  label?: string;
  /**
   * Props passed to the remove button.
   */
  removeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /**
   * The start adornment.
   */
  startAdornment?: React.ReactNode;
}

export type TagProps<T extends As = TagElement> = Props<TagOptions<T>>;

export const Tag = createComponent<TagOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    children,
    className: classNameProp,
    css,
    isCopyable,
    isDisabled,
    isRemovable,
    label = '',
    onRemove,
    removeButtonProps,
    startAdornment,
    ...other
  } = props;

  const [isCopied, setIsCopied] = React.useState(false);
  const childrenText = useChildrenTextContent(children);

  const removeButtonRef = React.useRef<HTMLButtonElement>(null);

  const copyButtonRef = React.useRef<HTMLButtonElement>(null);

  const { copy } = useCopyToClipboard();

  const { buttonProps: removeButtonCombinedProps } = useButton(
    {
      ...removeButtonProps,
      isDisabled,
      onPress: onRemove,
    } as AriaButtonProps,
    removeButtonRef,
  );

  const { isHovered, hoverProps } = useHover({ isDisabled });

  const labelText = typeof label === 'string' && label !== '' ? label : childrenText;

  const onCopy = React.useCallback(() => {
    copy(labelText)
      .then((didCopy) => void setIsCopied(didCopy))
      .catch(() => void setIsCopied(false));
  }, [labelText, copy]);

  const { buttonProps: copyButtonProps } = useButton(
    {
      elementType: Comp,
      isDisabled,
      onClick: onCopy,
      onPress: onCopy,
    } as AriaButtonProps<typeof Comp>,
    copyButtonRef,
  );

  const { className } = useStyles({
    css,
    isCopied,
    isCopyable,
    isDisabled,
    isHovered,
    isRemovable,
  });

  if (isCopyable && (!label || label === '')) {
    // eslint-disable-next-line no-console
    console.warn('Tag component requires a label prop for click-to-copy');
  }

  return (
    <Comp
      {...mergeProps(hoverProps, other, (isCopyable && copyButtonProps) || {})}
      ref={mergeRefs(forwardedRef, copyButtonRef)}
      className={cx(className, classNameProp, 'manifest-tag')}
      tabIndex={0}
      {...(isDisabled ? { 'aria-disabled': 'true' } : {})}
    >
      {startAdornment && (
        <div aria-hidden className="manifest-tag__start-adornment">
          {startAdornment}
        </div>
      )}
      <Typography
        className="manifest-tag__text"
        variant="caption"
        {...{
          'data-children': children,
        }}
      >
        {children}
      </Typography>
      {isCopyable && (
        <div className="manifest-tag__copy-icon-container">
          {isCopied ? (
            <Check className="manifest-tag__copy-icon" size="small" />
          ) : (
            <CopyAll className="manifest-tag__copy-icon" size="small" />
          )}
          <span className="manifest-tag__copy-icon-fade" />
        </div>
      )}
      {isRemovable && (
        <button
          {...removeButtonCombinedProps}
          ref={removeButtonRef}
          className="manifest-tag__icon-button"
          tabIndex={-1}
        >
          <Close className="manifest-tag__icon" size="small" />
        </button>
      )}
    </Comp>
  );
});
