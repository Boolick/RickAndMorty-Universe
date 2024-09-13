import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/named
import { App } from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
