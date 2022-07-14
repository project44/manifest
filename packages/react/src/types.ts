import { CSS } from './styles';

// Many of these interfaces are clones of react-aria types.
// Cherry-picking the ones we use most often.

export interface AriaLabelingProps {
  /** Defines a string value that labels the current element.*/
  'aria-label'?: string;
  /** Identifies the element (or elements) that labels the current element. */
  'aria-labelledby'?: string;
  /** Identifies the element (or elements) that describes the object. */
  'aria-describedby'?: string;
  /** Identifies the element (or elements) that provide a detailed, extended description for the object. */
  'aria-details'?: string;
}

export interface DOMProps {
  /** The element's unique identifier */
  id?: string;
}

export interface FocusableProps {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
  /** Handler that is called when the element receives focus. */
  onFocus?: (e: FocusEvent) => void;
  /** Handler that is called when the element loses focus. */
  onBlur?: (e: FocusEvent) => void;
  /** Handler that is called when the element's focus status changes. */
  onFocusChange?: (isFocused: boolean) => void;
  /** Handler that is called when a key is pressed. */
  onKeyDown?: (e: KeyboardEvent) => void;
  /** Handler that is called when a key is released. */
  onKeyUp?: (e: KeyboardEvent) => void;
}

export interface StyleProps {
  /** Class name attached to the root element. */
  className?: string;
  /** Theme aware style object. */
  css?: CSS;
}
