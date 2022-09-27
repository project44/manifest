const { toHaveNoViolations } = require('jest-axe');

require('@testing-library/jest-dom');

expect.extend(toHaveNoViolations);

global.DOMRect = {
	fromRect: () => ({ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 }),
};

global.ResizeObserver = class ResizeObserver {
	constructor(cb) {
		this.cb = cb;
	}
	observe() {
		this.cb([{ borderBoxSize: { blockSize: 0, inlineSize: 0 } }]);
	}
	unobserve() {}
};

beforeAll(() => {
	const { getComputedStyle } = window;

	window.getComputedStyle = (elt) => getComputedStyle(elt);
});
