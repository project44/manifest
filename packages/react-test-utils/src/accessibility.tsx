import '@testing-library/jest-dom/extend-expect';
import type * as React from 'react';
import type { JestAxeConfigureOptions } from 'jest-axe';
import { axe, toHaveNoViolations } from 'jest-axe';
import type { RenderOptions } from '@testing-library/react';
import { render } from './render';

expect.extend(toHaveNoViolations);

export function accessibility(
  ui: React.ReactElement,
  options: RenderOptions & { axeOptions?: JestAxeConfigureOptions } = {},
) {
  it('should have no accessibility violations', async () => {
    const { axeOptions, ...other } = options;
    const { container } = render(ui, other);

    const result = await axe(container, axeOptions);

    expect(result).toHaveNoViolations();
  });
}
