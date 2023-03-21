import { render, screen } from '@testing-library/react';
import { Card } from '../src/components/Card';
import { CardBody } from '../src/components/CardBody';
import { CardFooter } from '../src/components/CardFooter';
import { CardHeader } from '../src/components/CardHeader';

describe('card', () => {
  it('should render', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Lorem ipsum</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Lorem ipsum')).toBeDefined();
    expect(screen.getByText('Footer')).toBeDefined();
  });
});
