import * as React from 'react';
import { Avatar } from '../../src';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';

describe('@manifest/react - Avatar', () => {
  const orignalGlobalImage = window.Image;

  beforeAll(() => {
    (window.Image as any) = class MockImage {
      onload: () => void = () => {
        // noop
      };
      src = '';
      constructor() {
        setTimeout(() => {
          this.onload();
        }, 300);
        return this;
      }
    };
  });

  afterAll(() => {
    window.Image = orignalGlobalImage;
  });

  it('should pass accessibility', async () => {
    const { container } = render(
      <Avatar
        fallback="MU"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
