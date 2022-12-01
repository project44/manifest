import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from '@project44-manifest/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider>
    <App />
  </Provider>,
);
