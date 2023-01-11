import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

if (global.window) {
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
}
