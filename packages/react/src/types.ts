import { CSS } from './styles';

// Many of these interfaces are clones of react-aria types.
// Cherry-picking the ones we use most often.

export interface DOMProps {
  /** The element's unique identifier */
  id?: string;
}

export interface StyleProps {
  /** Class name attached to the root element. */
  className?: string;
  /** Theme aware style object. */
  css?: CSS;
}
