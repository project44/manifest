import { render, screen } from '@testing-library/react';
import { ActionCard, ActionCardBody, ActionCardHeader, ActionCardImage } from '../../..';

describe('action-card', () => {
  it('should render', () => {
    render(
      <ActionCard href="#">
        <ActionCardImage src="https://picsum.photos/400/600" />
        <ActionCardHeader>Title</ActionCardHeader>
        <ActionCardBody>Lorem ipsum dolor sit amet</ActionCardBody>
      </ActionCard>,
    );

    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeDefined();
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByRole('link')).toHaveAttribute('href', '#');
  });
});
