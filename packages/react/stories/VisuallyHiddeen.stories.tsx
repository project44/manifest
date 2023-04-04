import { VisuallyHidden } from '../src';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
};

export const Default = () => (
  <>
    The following text is visually hidden:
    <VisuallyHidden>This text is hidden</VisuallyHidden>
  </>
);

export const Focusable = () => (
  <>
    The following text is visually hidden and focusable:
    <VisuallyHidden isFocusable>This text is hidden and focusable</VisuallyHidden>
  </>
);
