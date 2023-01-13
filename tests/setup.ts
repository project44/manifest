import '@testing-library/jest-dom/extend-expect';

if (global.window) {
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
}
