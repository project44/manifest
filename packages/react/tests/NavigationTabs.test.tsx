import { fireEvent, render, screen } from '@testing-library/react';
import { NavigationTab, NavigationTabs } from '../src/components/NavigationTabs';

describe('<Tabs />', () => {
  const onClickFunction1 = jest.fn();
  const onClickFunction2 = jest.fn();

  beforeEach(() => {
    const data: NavigationTab[] = [
      { label: 'Tab one', onClick: onClickFunction1, count: 10 },
      {
        label: 'Tab two',
        onClick: onClickFunction2,
      },
    ];

    render(<NavigationTabs tabs={data} />);
  });
  it('should render', () => {
    const textOne = screen.getByText('Tab one');
    const textTwo = screen.getByText('Tab two');

    expect(textOne).toBeVisible();
    expect(textTwo).toBeVisible();
  });
  it('should render count data', () => {
    const textOne = screen.getByText('10');
    expect(textOne).toBeVisible();
  });
  it('should fire onClick functions', () => {
    const textOne = screen.getByText('Tab one');
    const textTwo = screen.getByText('Tab two');

    fireEvent.click(textOne);
    fireEvent.click(textTwo);
    expect(onClickFunction1).toHaveBeenCalledTimes(1);
    expect(onClickFunction2).toHaveBeenCalledTimes(1);
  });
});
