import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberField } from '../../..';

describe('@project44-manifest/components - NumberField', () => {
  it('should render an formated number input', () => {
    render(<NumberField aria-label="number field" value={1234} />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(['1,234', '1.234'].includes(input.value)).toBeTruthy();
  });

  it('should render a defaultly formated currency input', () => {
    render(
      <NumberField
        aria-label="number field"
        formatOptions={{ currency: 'USD', style: 'currency' }}
        value={1234}
      />,
    );

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input.value).toBe('$1,234.00');
  });

  it('should render a defaultly customly formated currency input', () => {
    render(
      <NumberField
        aria-label="number field"
        customLocale="de-DE"
        formatOptions={{
          currency: 'EUR',
          currencyDisplay: 'code',
          maximumFractionDigits: 0,
          style: 'currency',
        }}
        value={1234}
      />,
    );

    const input: HTMLInputElement = screen.getByRole('textbox');

    // NumberField displays number and currency
    // code sparated with special character (U+00a0)
    expect(input.value).toBe('1.234 EUR');
  });

  it('should support an uncontrolled value', async () => {
    render(<NumberField aria-label="number field" defaultValue={1} />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input.value).toBe('1');

    await userEvent.type(input, '2');

    expect(input.value).toBe('12');
  });

  it('should support a controlled value', async () => {
    const onChange = jest.fn();

    render(<NumberField aria-label="text field" value={1} onChange={onChange} />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input.value).toBe('1');

    await userEvent.type(input, '2');

    expect(input.value).toBe('12');
  });

  it('should support isDisabled', async () => {
    render(<NumberField isDisabled aria-label="text field" />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input).toHaveAttribute('disabled');

    await userEvent.click(input);

    expect(document.activeElement).not.toEqual(input);
  });

  it('should support isReadonly', async () => {
    render(<NumberField isReadOnly aria-label="text field" />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input).toHaveAttribute('readonly');

    await userEvent.click(input);

    expect(document.activeElement).toEqual(input);
  });
});
