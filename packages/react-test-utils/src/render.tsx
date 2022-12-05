import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { OverlayProvider } from '@react-aria/overlays';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
  return render(<OverlayProvider>{ui}</OverlayProvider>, options);
}

export { customRender as render };
