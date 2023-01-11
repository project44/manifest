import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { Button, ButtonGroup } from '../src';

describe('react-button - ButtonGroup', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </ButtonGroup>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render', () => {
    render(
      <ButtonGroup data-testid="button-group">
        <Button>Cancel</Button>
        <Button>Save</Button>
      </ButtonGroup>,
    );

    const buttonGroup = screen.getByTestId('button-group');
    const buttons = screen.getAllByRole('button');

    expect(buttonGroup).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });
});
