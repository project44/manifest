import { render, screen } from '@testing-library/react';
import { ActionCard } from '../src/components/ActionCard';
import { ActionCardBody } from '../src/components/ActionCardBody';
import { ActionCardHeader } from '../src/components/ActionCardHeader';
import { ActionCardImage } from '../src/components/ActionCardImage';

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
