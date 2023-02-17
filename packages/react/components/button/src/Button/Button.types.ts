import type { FocusableProps, PressEvents } from '@react-types/shared';
import type { CSS } from '@project44-manifest/react-styles';
import type { ButtonSize, ButtonVariant } from '../types';

export type ButtonElement = 'button';

export interface ButtonProps extends PressEvents, FocusableProps {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
  /** Theme aware style object */
  css?: CSS;
  /** Icon added after the button text. */
  endIcon?: React.ReactElement;
  /** A URL to link to if as="a". */
  href?: string;
  /**
   * Whether to exclude the element from the sequential tab order. If true,
   * the element will not be focusable via the keyboard by tabbing. This should
   * be avoided except in rare scenarios where an alternative means of accessing
   * the element or its functionality via the keyboard is available.
   */
  excludeFromTabOrder?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
  /**
   * The size of the button.
   *
   * @default 'medium'
   */
  size?: ButtonSize;
  /** Icon added before the button text. */
  startIcon?: React.ReactElement;
  /** The target window for the link. */
  target?: string;
  /**
   * The behavior of the button when used in an HTML form.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The display variant of the button.
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

export type { FocusableProps, PressEvents };
