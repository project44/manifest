import { render, screen } from '@testing-library/react';
import { Button, ButtonGroup } from '../src';

describe('react-button - ButtonGroup', () => {
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
