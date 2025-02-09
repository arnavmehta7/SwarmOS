import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from './providers';
import App from './App';
import './index.css';
import '@coinbase/onchainkit/styles.css'; // Add this line for onchainkit styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);