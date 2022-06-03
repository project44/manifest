import * as React from 'react';
import { CssBaseline } from './CssBaseline';
import { render } from '@testing-library/react';

describe('@manifest/react - CssBaseline', () => {
  it('should render', () => {
    const { container } = render(
      <>
        <CssBaseline />
        <div>hello world</div>
      </>,
    );

    expect(container).toBeInTheDocument();
  });
});
