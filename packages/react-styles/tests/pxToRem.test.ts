import { pxToRem } from '../src';

it('convert px value to rem', () => {
  expect(pxToRem(24)).toBe('1.5rem');
});
