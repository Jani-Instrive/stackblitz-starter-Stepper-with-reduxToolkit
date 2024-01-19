import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { App } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App name="StackBlitz" />
    </Provider>
  </StrictMode>
);
