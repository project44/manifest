import { card, focus, focusWithin } from '../src';

it('should return a css object for card styles', () => {
  const styles = card();

  expect(typeof styles === 'object').toBeTruthy();
});

it('should return an css object for focus styles', () => {
  const styles = focus();

  expect(typeof styles === 'object').toBeTruthy();
});

it('should return an css object for focusWithin styles', () => {
  const styles = focusWithin();

  expect(typeof styles === 'object').toBeTruthy();
});
