import { fireEvent } from '@testing-library/react';

// Triggers a "press" event on an element.
export function triggerPress(element: Element, opts = {}) {
	fireEvent.mouseDown(element, { detail: 1, ...opts });
	fireEvent.mouseUp(element, { detail: 1, ...opts });
	fireEvent.click(element, { detail: 1, ...opts });
}

export { default as userEvent } from '@testing-library/user-event';
