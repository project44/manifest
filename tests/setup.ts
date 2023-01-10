import '@testing-library/jest-dom/extend-expect';

const { getComputedStyle } = window;

window.getComputedStyle = (elt) => getComputedStyle(elt);

global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
