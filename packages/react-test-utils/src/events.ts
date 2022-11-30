import { fireEvent } from '@testing-library/react';

// Triggers a "press" event on an element.
export function triggerPress(element: Element, options = {}) {
  fireEvent.mouseDown(element, { detail: 1, ...options });
  fireEvent.mouseUp(element, { detail: 1, ...options });
  fireEvent.click(element, { detail: 1, ...options });
}

export { default as userEvent } from '@testing-library/user-event';
