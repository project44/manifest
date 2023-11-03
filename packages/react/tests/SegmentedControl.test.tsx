import { fireEvent, render, screen } from '@testing-library/react';
import { Segment, SegmentedControl } from '../src';

describe('segmented control', () => {
  it('should render and support selection', () => {
    const onChange = jest.fn();

    render(
      <SegmentedControl aria-label="mock aria" onChange={onChange}>
        <Segment aria-label="overview" label="Overview" value="overview" />
        <Segment aria-label="lanes" label="Lanes" value="lanes" />
      </SegmentedControl>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(false);

    fireEvent.click(screen.getByLabelText('Overview'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('overview');

    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
  });

  it('should support a default value', () => {
    const onChange = jest.fn();

    render(
      <SegmentedControl aria-label="mock aria" defaultValue="lanes" onChange={onChange}>
        <Segment aria-label="overview" label="Overview" value="overview" />
        <Segment aria-label="lanes" label="Lanes" value="lanes" />
      </SegmentedControl>,
    );

    const radioGroup = screen.getByRole('radiogroup');
    const radios: HTMLInputElement[] = screen.getAllByRole('radio');

    expect(radioGroup).toBeVisible();
    expect(radios).toHaveLength(2);

    expect(radios[0].checked).toBe(false);
    expect(radios[1].checked).toBe(true);

    fireEvent.click(screen.getByLabelText('Overview'));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('overview');

    expect(radios[0].checked).toBe(true);
    expect(radios[1].checked).toBe(false);
  });
});
