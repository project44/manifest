import { render, screen } from '@testing-library/react';

import { NumberFieldBase } from '..';

describe('@project44-manifest/components - NumberFieldBase', () => {
  it('should render', () => {
    render(<NumberFieldBase inputProps={{ defaultValue: 1234 }} />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input).toBeDefined();
    expect(input.value).toBe('1234');
  });

  it('should render input with label', () => {
    render(<NumberFieldBase inputProps={{ defaultValue: 1234 }} label="Number Field Label" />);

    expect(screen.getByText('Number Field Label')).toBeDefined();
  });
});
