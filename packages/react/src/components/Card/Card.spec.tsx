import * as React from 'react';
import { axe } from 'jest-axe';
import { Card } from './Card';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { render } from '@testing-library/react';

describe('@manifest/react - Card', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
