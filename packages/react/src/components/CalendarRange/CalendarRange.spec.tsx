import * as React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { CalendarRange } from '../CalendarRange';

describe('@project44-manifest/react - CalendarRange', () => {
  it('should have no accessibility violations when passed a default range value', async () => {
    const { container } = render(
      <CalendarRange
        defaultValue={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a range value', async () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
